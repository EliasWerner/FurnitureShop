import * as React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import { Main } from '../mainPage/main';
import { AboutUs } from '../aboutUsPage/aboutUs';
import { Contacts } from '../contactsPage/contacts';
import { Feedbacks } from '../feedbackPage/feedbacks';
import { DeliveryInfo } from '../deliveryInfoPage/deliveryInfo';
import { PageNotFound } from '../pageNotFound/pageNotFound';
import { ShoppingCart } from '../shoppingCartPage/shoppingCart';

export const AppRouter = () => {
  return (
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/about-us" component={AboutUs} />
      <Route exact path="/contacts" component={Contacts} />
      <Route exact path="/feedbacks" component={Feedbacks} />
      <Route exact path="/delivery" component={DeliveryInfo} />
      <Route exact path="/shopping-cart" component={ShoppingCart} />
      <Route component={PageNotFound} />
    </Switch>
  );
};
