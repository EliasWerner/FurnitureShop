import { IFurnitureType } from '../models/IFurnitureType';

export class FurnitureTypesService {
  private furnitureTypes: IFurnitureType[] = [
    {
      Id: 791655,
      Title: 'Детская и подростковая мебель',
      RouteLink: '/catalog/detskaya-podrostkovaya-mebel',
      ImageUrl:
        'https://images.by.prom.st/161846870_modulnaya-detskaya-ilona.jpg',
    },
    {
      Id: 8416189,
      Title: 'Мебель для гостиной',
      RouteLink: '/catalog/mebel-dlya-gostinoj',
      ImageUrl: 'https://images.by.prom.st/161836633_gostinaya-siti-ondens.jpg',
    },
    {
      Id: 8416188,
      Title: 'Мебель для спальни',
      RouteLink: '/catalog/mebel-dlya-spalni',
      ImageUrl:
        'https://images.by.prom.st/160883565_modulnaya-spalnya-eshli.jpg',
    },
    {
      Id: 8416196,
      Title: 'Шкафы, витрины, стеллажи',
      RouteLink: '/catalog/shkafy-vitriny-stellazhi',
      ImageUrl:
        'https://images.by.prom.st/157989015_w286_h250_stenki-gorki.jpg',
    },
    {
      Id: 791663,
      Title: 'Кухни',
      RouteLink: '/catalog/kuhni',
      ImageUrl: 'https://images.by.prom.st/155599484_kuhnya-simpl-21.jpg',
    },
    {
      Id: 1684489,
      Title: 'Кухонные уголки, столы, тубуреты и стулья',
      ImageUrl:
        'https://images.by.prom.st/159106880_stol-obedennyj-raskladnoj.jpg',
      RouteLink: '/catalog/kuhonnye-ugolki-stoly',
    },
    {
      Id: 791702,
      Title: 'Столы письменные, компьютерные, журнальные',
      ImageUrl: 'https://images.by.prom.st/160177099_stol-pismennyj-tip.jpg',
      RouteLink: '/catalog/stoly-pismennyekompyuternye-zhurnalnye',
    },
    {
      Id: 1684030,
      Title: 'Комоды и тумбы',
      ImageUrl: 'https://images.by.prom.st/160177167_komod-1400-betti.jpg',
      RouteLink: '/catalog/komody-tumby',
    },
    {
      Id: 6692497,
      Title: 'Мягкая мебель',
      ImageUrl: 'https://images.by.prom.st/162607652_divan-krovat-london-.jpg',
      RouteLink: '/catalog/myagkaya-mebel',
    },
    {
      Id: 8416195,
      Title: 'Доп позиции',
      ImageUrl: 'https://images.by.prom.st/166008493_banketka-palermo-2.jpg',
      RouteLink: '/catalog/dop-pozitsii',
    },
  ];

  public getFurnitureTypes = () => {
    return this.furnitureTypes;
  };

  public getMainFurnitureTypes = () => {
    return this.furnitureTypes.filter(
      (ft) => ft.ParentTypeId === null || ft.ParentTypeId === undefined
    );
  };

  public getFurnitureSubtypes = (furnitureTypeId: number) => {
    return this.furnitureTypes.filter(
      (ft) => ft.ParentTypeId === furnitureTypeId
    );
  };

  public getFurnityreTypeById = (typeId: number) => {
    return this.furnitureTypes.filter((ft) => ft.Id === typeId)[0];
  };
}
