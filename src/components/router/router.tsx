import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Main } from '../mainPage/main';
import { AboutUs } from '../aboutUsPage/aboutUs';
import { Contacts } from '../contactsPage/contacts';
import { Feedbacks } from '../feedbacksPage/feedbacks';
import { DeliveryInfo } from '../deliveryInfoPage/deliveryInfo';
import { PageNotFound } from '../pageNotFound/pageNotFound';
import { ShoppingCart } from '../shoppingCartPage/shoppingCart';
import { FurnitureCatalog } from '../furnitureCatalog/furnitureCatalog';
import FurnitureList from '../furnitureList/furnitureListContainer';
import Furniture from '../furniture/furnitureContainer';

export const AppRouter = () => {
  return (
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/about-us" component={AboutUs} />
      <Route exact path="/contacts" component={Contacts} />
      <Route exact path="/feedbacks" component={Feedbacks} />
      <Route exact path="/delivery" component={DeliveryInfo} />
      <Route exact path="/shopping-cart" component={ShoppingCart} />

      <Route exact path="/catalog" component={FurnitureCatalog} />
      <Route
        exact
        path="/catalog/detskaya-podrostkovaya-mebel"
        render={() => <FurnitureList parentTypeId={791655} />}
      />
      <Route
        exact
        path="/catalog/mebel-dlya-gostinoj"
        render={() => <FurnitureList parentTypeId={8416189} />}
      />

      <Route
        exact
        path="/catalog/mebel-dlya-spalni"
        render={() => <FurnitureList parentTypeId={8416188} />}
      />
      <Route
        exact
        path="/catalog/shkafy-vitriny-stellazhi"
        render={() => <FurnitureList parentTypeId={8416196} />}
      />

      <Route
        exact
        path="/catalog/kuhni"
        render={() => <FurnitureList parentTypeId={791663} />}
      />
      <Route
        exact
        path="/catalog/kuhonnye-ugolki-stoly"
        render={() => <FurnitureList parentTypeId={1684489} />}
      />
      <Route
        exact
        path="/catalog/stoly-pismennyekompyuternye-zhurnalnye"
        render={() => <FurnitureList parentTypeId={791702} />}
      />
      <Route
        exact
        path="/catalog/komody-tumby"
        render={() => <FurnitureList parentTypeId={1684030} />}
      />

      <Route
        exact
        path="/catalog/myagkaya-mebel"
        render={() => <FurnitureList parentTypeId={6692497} />}
      />
      <Route
        exact
        path="/catalog/dop-pozitsii"
        render={() => <FurnitureList parentTypeId={8416195} />}
      />
      <Route exact path="/:furnitureId" component={Furniture} />
      <Route component={PageNotFound} />
    </Switch>
  );
};
