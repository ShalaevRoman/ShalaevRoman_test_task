export default {
  header: {
    imgPath: require('@/assets/header/header-logo.svg'),
    inputText: 'Шукайте будь-що...',
    authUser: {
      name: 'person@gmail.com',
      userPicPath: require('@/assets/header/user.svg'),
      bellPicPath: require('@/assets/header/bell.svg')
    },
    navBarInfo: {
      buttonText: 'передлатити',
      list: [
        {
          id: 1,
          name: 'Усі відео',
          path: '/'
        },
        {
          id: 2,
          name: 'Документи',
          path: '/documents'
        },
        {
          id: 3,
          name: 'Теми',
          path: '/theme'
        },
        {
          id: 4,
          name: 'Автоматизація',
          path: '/auth'
        },
        {
          id: 5,
          name: 'Рубрики',
          path: '/categories'
        },
        {
          id: 6,
          name: 'Особистий консультант',
          path: '/consultant'
        }
      ]
    }
  },
  allVideos: {
    title: 'Усі відео',
    searchItems: [
      { name: 'Спочатку нові', value: 'new' },
      { name: 'Популярні', value: 'popular' },
      { name: 'Усі відео', value: 'all' },
      { name: 'Розпродаж', value: 'sale' }
    ],
    label: 'Сортувати',
    columnImg: require('@/assets/allVideos/column.svg'),
    rowImg: require('@/assets/allVideos/row.svg'),
    imgPath: require('@/assets/allVideos/video.svg'),
    heartImg: require('@/assets/allVideos/heart.svg')
  },
  subNavList: [
    {
      active: true,
      items: [
        { title: 'Усі відео', type: 'all' },
        { title: 'Мої відео', type: 'myVideos' },
        { title: 'Безкоштовно', type: 'forFree' },
        { title: 'Новинки', type: 'new' },
        { title: 'Останні переглянуті', type: 'lastVideos' },
        { title: 'Мої обрані', type: 'myChoice' }
      ],
      title: 'ВІДЕО'
    },
    {
      items: [
        { title: 'КОНСУЛЬТАЦІЇ' }
      ],
      title: 'КОНСУЛЬТАЦІЇ'
    },
    {
      items: [{ title: 'ДОКУМЕНТИ' }],
      title: 'ДОКУМЕНТИ'
    },
    {
      items: [{ title: 'ТЕМИ' }],
      title: 'ТЕМИ'
    },
    {
      items: [{ title: 'АВТОМАТИЗАЦІЯ' }],
      title: 'АВТОМАТИЗАЦІЯ'
    },
    {
      items: [{ title: 'ЛЕКТОРИ' }],
      title: 'ЛЕКТОРИ'
    },
    {
      items: [{ title: 'РУБРИКИ' }],
      title: 'РУБРИКИ'
    }
  ]
}
