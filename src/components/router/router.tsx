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
        path="/catalog/stenki-gorki"
        render={() => <FurnitureList parentTypeId={1407193} />}
      />
      <Route
        exact
        path="/catalog/prihozhie"
        render={() => <FurnitureList parentTypeId={789807} />}
      />
      <Route
        exact
        path="/catalog/kuhonnye-ugolki-stoly"
        render={() => <FurnitureList parentTypeId={1684489} />}
      />
      <Route
        exact
        path="/catalog/shkafy-raspashnye-uglovye"
        render={() => <FurnitureList parentTypeId={3699166} />}
      />
      <Route
        exact
        path="/catalog/krovati-odnospalnye"
        render={() => <FurnitureList parentTypeId={1684334} />}
      />
      <Route
        exact
        path="/catalog/mebel-dlya-detej"
        render={() => <FurnitureList parentTypeId={791655} />}
      />
      <Route
        exact
        path="/catalog/kuhni-linejnye-uglovye"
        render={() => <FurnitureList parentTypeId={7785769} />}
      />
      <Route
        exact
        path="/catalog/tumby-pod-televizor"
        render={() => <FurnitureList parentTypeId={7740189} />}
      />
      <Route
        exact
        path="/catalog/obuvnitsy"
        render={() => <FurnitureList parentTypeId={1684028} />}
      />
      <Route
        exact
        path="/catalog/shkafy-kupe"
        render={() => <FurnitureList parentTypeId={1406533} />}
      />
      <Route
        exact
        path="/catalog/penaly-stellazhi-vitriny"
        render={() => <FurnitureList parentTypeId={3699173} />}
      />
      <Route
        exact
        path="/catalog/pufiki-skami-prihozhuyu"
        render={() => <FurnitureList parentTypeId={3929193} />}
      />
      <Route
        exact
        path="/catalog/tumby-pod-tv"
        render={() => <FurnitureList parentTypeId={7740189} />}
      />
      <Route
        exact
        path="/catalog/mebel-dlya-prihozhej"
        render={() => <FurnitureList parentTypeId={7783290} />}
      />
      <Route
        exact
        path="/catalog/spalnye-garnitury-modulnye"
        render={() => <FurnitureList parentTypeId={1407181} />}
      />
      <Route
        exact
        path="/catalog/detskaya-podrostkovaya-mebel"
        render={() => <FurnitureList parentTypeId={7772055} />}
      />
      <Route
        exact
        path="/catalog/pismennye-kompyuternye-zhurnalnye-stoly"
        render={() => <FurnitureList parentTypeId={791702} />}
      />
      <Route
        exact
        path="/catalog/krovati-dvuspalnye"
        render={() => <FurnitureList parentTypeId={1684336} />}
      />
      <Route
        exact
        path="/catalog/prikrovatnye-tumbochki"
        render={() => <FurnitureList parentTypeId={7555451} />}
      />
      <Route
        exact
        path="/catalog/mebel-dlya-spalni"
        render={() => <FurnitureList parentTypeId={7785738} />}
      />
      <Route
        exact
        path="/catalog/tualetnye-stoliki"
        render={() => <FurnitureList parentTypeId={1684225} />}
      />
      <Route
        exact
        path="/catalog/kuhni"
        render={() => <FurnitureList parentTypeId={791663} />}
      />
      <Route
        exact
        path="/catalog/komody-tumby"
        render={() => <FurnitureList parentTypeId={7771471} />}
      />
      <Route
        exact
        path="/catalog/krovati-polutornye"
        render={() => <FurnitureList parentTypeId={1684335} />}
      />
      <Route
        exact
        path="/catalog/myagkaya-mebel"
        render={() => <FurnitureList parentTypeId={6692497} />}
      />
      <Route
        exact
        path="/catalog/komody-obuvnitsy-tumby"
        render={() => <FurnitureList parentTypeId={7771471} />}
      />
      <Route
        exact
        path="/catalog/shkafy"
        render={() => <FurnitureList parentTypeId={7785768} />}
      />
      <Route component={PageNotFound} />
    </Switch>
  );
};
