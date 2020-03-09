import { IFurnitureType } from '../models/IFurnitureType';

export class FurnitureTypesService {
  private furnitureTypes: IFurnitureType[] = [
    {
      Id: 791663,
      Title: 'Кухни',
      RouteLink: '/catalog/kuhni',
      ImageUrl: 'https://images.by.prom.st/158343576_w286_h250_kuhni.jpg',
    },
    {
      Id: 789807,
      Title: 'Прихожие',
      RouteLink: '/catalog/prihozhie',
      ImageUrl: 'https://images.by.prom.st/157990490_w286_h250_prihozhie.jpg',
    },
    {
      Id: 1684225,
      Title: 'Туалетные столики',
      RouteLink: '/catalog/tualetnye-stoliki',
      ImageUrl:
        'https://images.by.prom.st/158348785_w286_h250_tualetnye-stoliki.jpg',
    },
    {
      Id: 1407193,
      Title: 'Стенки и горки',
      RouteLink: '/catalog/stenki-gorki',
      ImageUrl:
        'https://images.by.prom.st/157989015_w286_h250_stenki-gorki.jpg',
    },
    {
      Id: 7740189,
      Title: 'Тумбы под телевизор',
      RouteLink: '/catalog/tumby-pod-tv',
      ImageUrl:
        'https://images.by.prom.st/158337490_w286_h250_tumby-pod-televizor.jpg',
    },
    {
      Id: 6,
      Title: 'Кухни линейные 1.6 метра',
      ImageUrl: '',
      ParentTypeId: 791663,
    },
    {
      Id: 7,
      Title: 'Кухни линейные 1.8 метра',
      ImageUrl: '',
      ParentTypeId: 791663,
    },
    {
      Id: 8,
      Title: 'Библиотеки',
      ImageUrl: '',
      ParentTypeId: 1407193,
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
