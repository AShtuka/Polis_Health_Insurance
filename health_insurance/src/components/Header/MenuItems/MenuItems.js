const menuForPerson = [
    {
        id: 1,
        title: 'Страхование'
    },
    {
        id: 2,
        title: 'Онлайн-кредиты',
        linkTo: '/credits'
    },
    {
        id: 3,
        title: 'Кредитные карты',
        linkTo: 'credits-cart'
    },
];

const menuForPersonDesktop = [
    {
        id: 1,
        title: 'Страхование'
    },
    {
        id: 2,
        title: 'Талоны на топливо',
        linkTo: 'gas-talons'
    },
    {
        id: 3,
        title: 'Онлайн-кредиты',
        linkTo: '/credits'
    },
    {
        id: 4,
        title: 'Категория',
        linkTo: '/category'
    },
    {
        id: 5,
        title: 'Реферальная программа',
        linkTo: '/program'
    },
    {
        id: 6,
        title: 'Еще'
    }
];

const menuForBusiness = [
    {
        id: 1,
        title: 'Платформа для бизнеса',
        linkTo: '/platform'
    },
    {
        id: 2,
        title: 'Документация API',
        linkTo: '/api'
    },
];

const subMenuInsurance = [
    {
        id: 1,
        title: 'ОСАГО',
        linkTo: '/osago'
    },
    {
        id: 2,
        title: 'Туристическое страхование',
        linkTo: '/insurance'
    },
    {
        id: 3,
        title: 'КАСКО',
        linkTo: '/kasco'
    },
];

const subMenuMore = [
    {
        id: 1,
        title: 'Link one',
        linkTo: '/link-one'
    },
    {
        id: 2,
        title: 'Link two',
        linkTo: '/link-two'
    },
    {
        id: 3,
        title: 'Link three',
        linkTo: '/link-three'
    },
];

export  {menuForBusiness, menuForPerson, menuForPersonDesktop, subMenuInsurance, subMenuMore };