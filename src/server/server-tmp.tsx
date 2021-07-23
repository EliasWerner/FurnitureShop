import path from 'path';
import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { ChunkExtractor } from '@loadable/server';
import { config } from './config';
import { StaticRouter } from 'react-router';

const app = express();

app.use('/static/', express.static(config.staticPath));

if (!config.isProd) {
  const webpack = require('webpack');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const webpackHotServerMiddleware = require('webpack-hot-server-middleware');
  const clientConfig = require('../webpack.client.dev').default;
  const serverConfig = require('../webpack.server').default;

  serverConfig.mode = 'development';
  const compiler = webpack([clientConfig, serverConfig]);

  app.use(
    webpackDevMiddleware(compiler, {
      logLevel: 'silent',
      publicPath: '/dist/web',
      writeToDisk(filePath: string) {
        return /dist\/node\//.test(filePath) || /loadable-stats/.test(filePath);
      },
    })
  );

  app.use(
    webpackHotMiddleware(
      compiler.compilers.find((c: any) => c.name === 'client')
    )
  );

  app.use(webpackHotServerMiddleware(compiler));
  let started = false;
  // tslint:disable-next-line:no-console
  console.log('Compiling:....');
  compiler.plugin('done', () => {
    if (!started) {
      started = true;
      startServer();
    }
  });
} else {
  const nodeStats = path.resolve(
    __dirname,
    '../../public/dist/node/loadable-stats.json'
  );

  const webStats = path.resolve(
    __dirname,
    '../../public/dist/web/loadable-stats.json'
  );

  const serverRenderer = (): express.RequestHandler => {
    const nodeExtractor = new ChunkExtractor({ statsFile: nodeStats });
    const { default: App } = nodeExtractor.requireEntrypoint();

    const webExtractor = new ChunkExtractor({ statsFile: webStats });

    return (req, res, next) => {
      const context: {} = {};
      const jsx = webExtractor.collectChunks(
        <StaticRouter context={context} location={req.url}>
          <App />
        </StaticRouter>
      );

      const html = renderToString(jsx);

      res.set('content-type', 'text/html');
      res.send(`
              <!DOCTYPE html>
              <html>
                <head>
                ${webExtractor.getLinkTags()}
                ${webExtractor.getStyleTags()}
                </head>
                <body>
                  <div id="main">${html}</div>
                  ${webExtractor.getScriptTags()}
                </body>
              </html>
            `);
    };
  };

  app.use(serverRenderer());
  startServer();
}

function startServer() {
  app.listen(config.serverPort, () => {
    // tslint:disable-next-line:no-console
    console.log(`running at http://localhost:${config.serverPort}`);
    // tslint:disable-next-line:no-console
    console.log(`environemt: ${config.env}`);
  });
}
