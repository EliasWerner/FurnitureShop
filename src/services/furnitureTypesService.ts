import { IFurnitureType } from '../models/IFurnitureType';

export class FurnitureTypesService {
  private furnitureTypes: IFurnitureType[] = [
    {
      Id: 1,
      Title: 'Кухни',
      ImageUrl: 'https://images.by.prom.st/158343576_w286_h250_kuhni.jpg',
    },
    {
      Id: 2,
      Title: 'Прихожие',
      ImageUrl: 'https://images.by.prom.st/157990490_w286_h250_prihozhie.jpg',
    },
    {
      Id: 3,
      Title: 'Туалетные столики',
      ImageUrl:
        'https://images.by.prom.st/158348785_w286_h250_tualetnye-stoliki.jpg',
    },
    {
      Id: 4,
      Title: 'Стенки и горки',
      ImageUrl:
        'https://images.by.prom.st/157989015_w286_h250_stenki-gorki.jpg',
    },
    {
      Id: 5,
      Title: 'Тумбы под телевизор',
      ImageUrl:
        'https://images.by.prom.st/158337490_w286_h250_tumby-pod-televizor.jpg',
    },
    {
      Id: 6,
      Title: 'Кухни линейные 1.6 метра',
      ImageUrl: '',
      ParentTypeId: 1,
    },
    {
      Id: 7,
      Title: 'Кухни линейные 1.8 метра',
      ImageUrl: '',
      ParentTypeId: 1,
    },
    {
      Id: 8,
      Title: 'Библиотеки',
      ImageUrl: '',
      ParentTypeId: 4,
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
}
