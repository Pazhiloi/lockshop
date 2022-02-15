import {
  about4,
  about5,
  about6,
  box,
  box1,
  card,
  checkmark,
  closemark,
  facebook,
  furniture1,
  furniture2,
  furniture3,
  gift,
  icon1,
  icon2,
  icon3,
  like,
  lock1,
  lock10,
  lock11,
  lock12,
  lock2,
  lock3,
  lock4,
  lock5,
  lock6,
  lock7,
  lock8,
  lock9,
  payment,
  picture,
  raddison,
  raddisonLogo,
  settings,
  sold1,
  sold2,
  sold3,
  twitter,
  vk,
} from "./images";

export const footerItems = [
  {
    id: 1,
    title: `Навигация`,
    list: [
      {
        id: "1",
        text: `Главная`,
      },
      {
        id: "2",
        text: `Каталог`,
      },
      {
        id: "3",
        text: `Оптовая продажа`,
      },
      {
        id: "4",
        text: `О нас`,
      },
    ],
  },
  {
    id: 2,
    title: `Наши контакты
`,
    list: [
      {
        id: "1",
        text: `Телефоны`,
      },
      {
        id: "2",
        text: `+7 (988) 565 00 38`,
      },
      {
        id: "3",
        text: `+375 33 662 82 56`,
      },
      {
        id: "4",
        text: `Email`,
      },
      {
        id: "5",
        text: `vladpertcev@mail.ru`,
      },
      {
        id: "6",
        text: `korobko416@gmail.com`,
      },
    ],
  },
  {
    id: 3,
    title: `Наш адрес`,
    list: [
      {
        id: "1",
        text: `Россия, Ростов-на-Дону ул. Богачева, 16`,
      },
    ],
  },
  {
    id: 4,
    title: `информация`,
    list: [
      {
        id: "1",
        text: `Доставка и оплата`,
      },
      {
        id: "2",
        text: `Гарантии`,
      },
      {
        id: "3",
        text: `Возврат товара`,
      },
    ],
  },
];
export const socialList = [
  {
    id: 1,
    image: vk,
  },
  {
    id: 2,
    image: twitter,
  },
  {
    id: 3,
    image: facebook,
  },
];
export const mainSlider = [
  {
    id: 1,
    image: lock1,
    title: `Golden Soft 
     GS-200Z-5 для офиса`,
    text1: `Замок дверной электронный Golden Soft GS-200Z-5 имеет роскошный глянцевый блеск, четкие линии, красивые формы.`,
    text2: `Подходит для установки на деревянную/межкомнатную дверь.`,
    price: "37 000₽",
    currentPrice: "33 000₽",
  },
  {
    id: 2,
    image: lock2,
    title: `Golden Soft 
     GS-200Z-5 для офиса`,
    text1: `Замок дверной электронный Golden Soft GS-200Z-5 имеет роскошный глянцевый блеск, четкие линии, красивые формы.`,
    text2: `Подходит для установки на деревянную/межкомнатную дверь.`,
    price: "7 000₽",
    currentPrice: "3 000₽",
  },
  {
    id: 3,
    image: lock3,
    title: `Golden Soft 
     GS-200Z-5 для офиса`,
    text1: `Замок дверной электронный Golden Soft GS-200Z-5 имеет роскошный глянцевый блеск, четкие линии, красивые формы.`,
    text2: `Подходит для установки на деревянную/межкомнатную дверь.`,
    price: "37 0000₽",
    currentPrice: "33 0000₽",
  },
];
export const countAnimate = [
  {
    id: 1,
    title: `Счастливых клиентов`,
    number: `5,567`,
  },
  {
    id: 2,
    title: `Продуктов на выбор`,
    number: `1245`,
  },
  {
    id: 3,
    title: `Продаж в день`,
    number: `372`,
  },
  {
    id: 4,
    title: `Лет на рынке`,
    number: `20`,
  },
];

export const preferencesList = [
  {
    id: 1,
    text: `Возврат удвоенной стоимости каждого замка в случае брака. `,
    image: box,
  },
  {
    id: 2,
    text: `Наносим ваш логотип компании на наш продукт `,
    image: like,
  },
  {
    id: 3,
    text: `Возврат удвоенной стоимости каждого замка в случае брака.  `,
    image: box,
  },
];

export const mainCategories = [
  {
    id: 1,
    image: lock5,
    text: `Для отелей`,
    link: ``,
  },
  {
    id: 2,
    image: lock6,
    text: `Для шкафчиков`,
    link: ``,
  },
  {
    id: 3,
    image: lock7,
    text: `Для офисов`,
    link: ``,
  },
  {
    id: 4,
    image: lock8,
    text: `Замки для дома`,
    link: ``,
  },
];
export const product = [
  {
    id: 1,
    status: `В наличии`,
    statusIcon: checkmark,
    icon: gift,
    text: `Дверной Замок Golden Soft для отеля`,
    price: `37 000₽`,
    currentPrice: 33000,
    image: lock3,
    reviewsAmount: 10,
    rating: 5,
  },
  {
    id: 2,
    status: `Нет в наличии`,
    statusIcon: closemark,
    icon: gift,
    text: `Вариативный замок Golden Soft для отеля`,
    price: `8 000₽`,
    currentPrice: 7000,
    image: lock4,
    reviewsAmount: 10,
    rating: 2
  },
  {
    id: 3,
    status: `В наличии`,
    statusIcon: checkmark,
    icon: gift,
    text: `Дверной Замок Golden Soft для офиса`,
    price: `39 000₽`,
    currentPrice: 33000,
    image: lock1,
    reviewsAmount: 10,
    rating: 1
  },
  {
    id: 4,
    status: `В наличии`,
    statusIcon: checkmark,
    icon: gift,
    text: `Дверной Замок Golden Soft для отеля`,
    price: `12 000₽`,
    currentPrice: 9000,
    image: lock2,
    reviewsAmount: 10,
    rating: 5
  },
  {
    id: 5,
    status: `В наличии`,
    statusIcon: checkmark,
    icon: gift,
    text: `Дверной Замок Golden Soft для отеля`,
    price: `37 000₽`,
    currentPrice: 33000,
    image: lock3,
    reviewsAmount: 10,
    rating: 4
  },
  {
    id: 6,
    status: `Нет в наличии`,
    statusIcon: closemark,
    icon: gift,
    text: `Вариативный замок Golden Soft для отеля`,
    price: `8 000₽`,
    currentPrice: 7000,
    image: lock4,
    reviewsAmount: 10,
    rating: 2
  },
  {
    id: 7,
    status: `В наличии`,
    statusIcon: checkmark,
    icon: gift,
    text: `Дверной Замок Golden Soft для офиса`,
    price: `39 000₽`,
    currentPrice: 33000,
    image: lock1,
    reviewsAmount: 10,
    rating: 1
  },
  {
    id: 8,
    status: `В наличии`,
    statusIcon: checkmark,
    icon: gift,
    text: `Дверной Замок Golden Soft для отеля`,
    price: `12 000₽`,
    currentPrice: 9000,
    image: lock2,
    reviewsAmount: 10,
    rating: 0
  },
];

export const inputs = [
  {
    id: 1,
    text: `Ваше имя`,
  },
  {
    id: 2,
    text: `Ваш Email`,
  },
];
export const catalogFilterList = [
  {
    id: 1,
    title: `Цена`,
  },
  {
    id: 2,
    title: `Особенности`,
  },
  {
    id: 3,
    title: `Цвет`,
  },
  {
    id: 4,
    title: `Материал`,
  },
  {
    id: 5,
    title: `Размеры`,
  },
];
export const catalogCategories = [
  {
    id: 1,
    text: `Накладные электронные замки`,
    image: lock9,
  },
  {
    id: 2,
    text: `Врезные электроные замки`,
    image: lock10,
  },
  {
    id: 3,
    text: `Замки для квартиры`,
    image: lock11,
  },
  {
    id: 4,
    text: `Замки для дома`,
    image: lock8,
  },
  {
    id: 5,
    text: `Замки для отелей`,
    image: lock5,
  },
  {
    id: 6,
    text: `Замки для офиса`,
    image: lock7,
  },
  {
    id: 7,
    text: `Замки для шкафчиков`,
    image: lock6,
  },
  {
    id: 8,
    text: `Замки для раздевалок`,
    image: lock12,
  },
];

export const filterList = [
      {
        id: "1a",
        isCheked: true,
        text: `Электронные кодовые замки`,
        amount: "(5)",
      },
      {
        id: "2a",
        isCheked: false,
        text: `Биометрические замки`,
        amount: "(5)",
      },
      {
        id: "3a",
        isCheked: false,
        text: `Замок с отппечатком`,
        amount: "(5)",
      },
      {
        id: "4a",
        isCheked: false,
        text: `Замок с бесконтактной картой`,
        amount: "(5)",
      },
      {
        id: "5a",
        isCheked: false,
        text: `Программируемые замки`,
        amount: "(5)",
      },
      {
        id: "6a",
        isCheked: false,
        text: `Замки на батарейках`,
        amount: "(5)",
      },
      {
        id: "7a",
        isCheked: false,
        text: `Замки с удаленным доступом`,
        amount: "(5)",
      },
      {
        id: "8a",
        isCheked: false,
        text: `Bluetooth замки`,
        amount: "(5)",
      },
      {
        id: "9a",
        isCheked: false,
        text: `Электронные замки для квартиры`,
        amount: "(5)",
      },
      {
        id: "10a",
        isCheked: false,
        text: `Замки для стеклянных дверей`,
        amount: "(5)",
      },
      {
        id: "11a",
        isCheked: false,
        text: `Электронные цилиндры`,
        amount: "(5)",
      },
];
export const soldsList = [
  {
    id: 1,
    title: `Оформление заявки`,
    text: `Вы оставляете заявку на сайте или связываетесь с нами по указанному на сайте номеру телефона`,
    image: sold1,
  },
  {
    id: 2,
    title: `Согласование`,
    text: `Мы консультируем Вас, согласовываем стоимость и точное время приезда нашего специалиста`,
    image: sold2,
  },
  {
    id: 3,
    title: `Отправка товара и установка`,
    text: `Наш специалист по монтажу замков выезжает к Вам в точно зазначеное время по согласованному адресу`,
    image: sold3,
  },
];

export const soldPreferences = [
  {
    id: 1,
    title: `Возврат удвоенной стоимости`,
    text: `За каждый отправленый товар который окажеться бракованным, мы вернем вам двойную стоимость.`,
    icon: box1,
  },
  {
    id: 2,
    title: `Монтаж`,
    text: `Проводим монтажные работы любой сложности и в любое удобное для Вас время`,
    icon: settings,
  },
  {
    id: 3,
    title: `Брендирование продукта`,
    text: `Мы нанесем Ваш логотип любой сложности на свою продукцию, чтобы прибавить ей эксклюзивности `,
    icon: picture,
  },
  {
    id: 4,
    title: `Брендирование продукта`,
    text: `Мы нанесем Ваш логотип любой сложности на свою продукцию, чтобы прибавить ей эксклюзивности `,
    icon: box1,
  },
];

export const hotelList = [
  {
    id: 1,
    image: raddison,
    icon: raddisonLogo,
    title: `Проект для гостинницы Radisson Hotels`,
    budget: `$5000`,
    list: [
      {
        id: "1",
        checked: true,
        text: `Установлено 123 Вариативных замка Golden Soft для отеля`,
      },
      {
        id: "2",
        checked: true,
        text: `Было нанесено личный брендинг на все замки`,
      },
      {
        id: "3",
        checked: true,
        text: `Были проведны монтажные работы, также была произведена помощь в пкделючении замков к системе`,
      },
    ],
  },
  {
    id: 2,
    image: raddison,
    icon: raddisonLogo,
    title: `Проект для гостинницы Radisson Hotels`,
    budget: `$15000`,
    list: [
      {
        id: "1",
        checked: true,
        text: `Установлено 123 Вариативных замка Golden Soft для отеля`,
      },
      {
        id: "2",
        checked: true,
        text: `Было нанесено личный брендинг на все замки`,
      },
      {
        id: "3",
        checked: true,
        text: `Были проведны монтажные работы, также была произведена помощь в пкделючении замков к системе`,
      },
    ],
  },
  {
    id: 3,
    image: raddison,
    icon: raddisonLogo,
    title: `Проект для гостинницы Radisson Hotels`,
    budget: `$500000`,
    list: [
      {
        id: "1",
        checked: true,
        text: `Установлено 123 Вариативных замка Golden Soft для отеля`,
      },
      {
        id: "2",
        checked: true,
        text: `Было нанесено личный брендинг на все замки`,
      },
      {
        id: "3",
        checked: true,
        text: `Были проведны монтажные работы, также была произведена помощь в пкделючении замков к системе`,
      },
    ],
  },
];

export const furnitureList = [
  {
    id: 1,
    image: furniture1,
    icon: icon1,
    title: `Почта России`,
    list: [
      {
        id: "1",
        checked: true,
        text: `Получение посылки согласно условиям перевозчика`,
      },
      {
        id: "2",
        checked: true,
        text: `Доставка в течении 1-2 дней`,
      },
    ],
  },
  {
    id: 2,
    image: furniture2,
    icon: icon2,
    title: `Деловые линии`,
    list: [
      {
        id: "1",
        checked: true,
        text: `Получение посылки согласно условиям перевозчика`,
      },
      {
        id: "2",
        checked: true,
        text: `Доставка в течении 1-2 дней`,
      },
    ],
  },
  {
    id: 3,
    image: furniture3,
    icon: icon3,
    title: `СДЭК`,
    list: [
      {
        id: "1",
        checked: true,
        text: `Получение посылки согласно условиям перевозчика`,
      },
      {
        id: "2",
        checked: true,
        text: `Доставка в течении 1-2 дней`,
      },
    ],
  },
];

export const payments = [
  {
    id: 1,
    title: `Банковская карта`,
    text: `
    Онлайн заказ можно оплатить с помощью банковской карты, выпущенной на территории России. Оформляя заказ на сайте, в пункте «Оплата» выберите «Банковская карта». После переадресации на страницу системы безопасных платежей, необходимо лишь подтвердить платеж.
    `,
    icon: payment,
  },
  {
    id: 2,
    title: `Оплата при получении товара`,
    text: `
    Онлайн заказ можно оплатить непосредственно при получении. Оформляя заказ на сайте, в пункте «Оплата» выберите «Оплата при получении товара». После того как товар будет доставлен к заказчику, после полного осмотра, оплатите стоимость товара удобным для вас способом.
    `,
    icon: card,
  },
];

export const garantires = [
  {
    id: 1,
    text: `обмен или возврат товара в срок до 14 дней с момента приобретения;`,
  },
  {
    id: 2,
    text: `обмен или возврат товара на основании акта, выданного Авторизованным сервисным центром по результатам гарантийного обслуживания (в соответствии с Законом РФ «О защите прав потребителей»).
`,
  },
];
export const returns = [
  {
    id: 1,
    text: `выданный продавцом расчетный документ (чек / акт приема-передачи / накладная или др.), подтверждающий факт приобретения;
`,
  },
  {
    id: 2,
    text: `гарантийный талон;
`,
  },
  {
    id: 3,
    text: `документ, удостоверяющий личность;
`,
  },
  {
    id: 4,
    text: `идентификационный налоговый номер (ИНН);
`,
  },
  {
    id: 5,
    text: `в случае оплаты покупки банковской картой – актуальные реквизиты карточного счета.
`,
  },
];

export const contactItems = [
  {
    id: 1,
    title: `Наш адрес`,
    image: about4,
    list: [
      {
        id: "1",
        text: `Россия, Ростов-на-Дону ул. Богачева, 16`,
      },
    ],
  },
  {
    id: 2,
    title: `Телефоны`,
    image: about5,
    list: [
      {
        id: "1",
        text: `+7 (988) 565 00 38`,
      },
      {
        id: "2",
        text: `+375 33 662 82 56`,
      },
    ],
  },
  {
    id: 3,
    title: `Email`,
    image: about6,
    list: [
      {
        id: "1",
        text: `vladpertcev@mail.ru`,
      },
      {
        id: "2",
        text: `korobko416@gmail.com`,
      },
    ],
  },
];
export const catalogsList = [
  {
    id: 1,
    text: `Накладные электронные замки`,
    image: lock1,
  },
  {
    id: 2,
    text: `Врезные электронные замки`,
    image: lock2,
  },
  {
    id: 3,
    text: `Замки для квартиры`,
    image: lock3,
  },
  {
    id: 4,
    text: `Замки для дома`,
    image: lock4,
  },
  {
    id: 5,
    text: `Замки для отелей`,
    image: lock5,
  },
  {
    id: 6,
    text: `Замки для офиса`,
    image: lock6,
  },
  {
    id: 7,
    text: `Замки для шкафчиков`,
    image: lock7,
  },
  {
    id: 8,
    text: `Замки для раздевалок`,
    image: lock8,
  },
];
