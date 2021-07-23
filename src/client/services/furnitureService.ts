import { IFurniture } from '../models/IFurniture';

export class FurnitureService {
  private furniture: IFurniture[] = [
    {
      Id: 1,
      Title: 'Кухня Мила',
      Description:
        '<strong>Кухня Мила 1,4 м фабрики Интерлиния</strong> - один из многочисленных вариантов компоновки <strong>кухонь Мила</strong>. В зависимости от того, какой размер кухни вам необходим, вы можете подобрать комбинации от 1,2 м до 2,6м, кроме того, кухня Мила бывает и угловая.</span> <strong><span style="font-size:12.0pt">Купить кухонный гарнитур Мила 1.4 м в Минске и с доставкой по РБ</span></strong><span style="font-size:12.0pt"> вы можете в нашем интерне-магазине.</span>',
      FurnitureTypeId: 791663,
      Price: 310,
      ImageUrl: 'https://images.by.prom.st/75052795_w640_h640_75052795.jpg',
    },
    {
      Id: 2,
      Title: 'Кухня Мила Хольц 1,4 м.',
      Description:
        '<strong>Кухня Мила 1,4 м фабрики Интерлиния</strong> - один из многочисленных вариантов компоновки <strong>кухонь Мила</strong>. В зависимости от того, какой размер кухни вам необходим, вы можете подобрать комбинации от 1,2 м до 2,6м, кроме того, кухня Мила бывает и угловая.</span> <strong><span style="font-size:12.0pt">Купить кухонный гарнитур Мила 1.4 м в Минске и с доставкой по РБ</span></strong><span style="font-size:12.0pt"> вы можете в нашем интерне-магазине.</span>',
      FurnitureTypeId: 791663,
      Price: 530,
      ImageUrl: 'https://images.by.prom.st/85337698_w640_h640_85337698.jpg',
    },
    {
      Id: 3,
      Title: 'Прихожая Беркли',
      Description:
        '<strong>Купить прихожую Беркли</strong><strong> фабрики Мебель-Класс </strong>и прочую мебель в Минске и с доставкой по РБ вы можете в нашем интернет-магазине <strong>mebel-online.dеal.by</strong>. Оформить заказ можно, позвонив по телефонам <span class="js-phone-numberhighlight-phone"><strong>+37529 766 36 56 </strong></span><strong>(мтс), <span class="js-phone-numberhighlight-phone">+37544 766 55 83 </span>(velcom),</strong> либо оставить заказ онлайн, после чего, в ближайшее время наш оператор свяжется с вами, ответит на все имеющиеся вопросы и, при необходимости, оформит заявку. Товар поставляется в разобранном виде в заводской упаковке до подъезда. Доставка мебели осуществляется по Минску. Возможна платная доставка по городам и регионам РБ, стоимость зависит от удаленности населенного пункта от Минска и от массы приобретаемого вами товара. Оплата производится по факту получения изделия.',
      FurnitureTypeId: 789807,
      Price: 233.98,
      ImageUrl: 'https://images.by.prom.st/158678986_w640_h640_158678986.jpg',
    },
    {
      Id: 4,
      Title: 'Стенка горка Атлантида 2',
      Description: '',
      FurnitureTypeId: 1407193,
      Price: 603,
      ImageUrl: 'https://images.by.prom.st/72306864_w640_h640_72306864.jpg',
    },
    {
      Id: 5,
      Title: 'Тумба под ТВ Виста 13н',
      Description:
        '<strong>Тумба под телевизор Виста 13</strong> отличается изящным и современным  дизайном. Если вы приобретете <strong>тумбу Виста 13</strong>, то увидите как, казалось бы, такая маленькая деталь, может изменить интерьер и придать ему шарм.<strong> </strong> <strong>Купить тумбу под телевизор Виста 13 в Минске и с доставкой по РБ</strong> вы можете в нашем интерне-магазине.',
      FurnitureTypeId: 7740189,
      Price: 158,
      ImageUrl: 'https://images.by.prom.st/127016258_w640_h640_127016258.jpg',
    },
  ];

  public getFurniture = () => this.furniture;

  public getFurnitureById = (furnitureId: number) => {
    return this.furniture.filter((f) => f.Id === furnitureId)[0];
  };

  public getFurnitureByType = (furnitureTypeId: number) => {
    return this.furniture.filter((f) => f.FurnitureTypeId === furnitureTypeId);
  };
}
