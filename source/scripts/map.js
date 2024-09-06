
// eslint-disable-next-line no-undef
ymaps.ready(() => {
  // eslint-disable-next-line no-undef
  const myMap = new ymaps.Map('ymap', {
      center: [59.938631, 30.323037],
      zoom: 16
    }, {
      searchControlProvider: 'yandex#search'
    }),
    // eslint-disable-next-line no-undef
    myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
      hintContent: 'Cat Energy'
    }, {
      // Опции.
      // Необходимо указать данный тип макета.
      iconLayout: 'default#image',
      // Своё изображение иконки метки.
      iconImageHref: '../images/map-pin-desktop@2x.png',
      // Размеры метки.
      iconImageSize: [90, 80],
      // Смещение левого верхнего угла иконки относительно
      // её "ножки" (точки привязки).
      iconImageOffset: [-45, -75]
    });

  myMap.geoObjects
    .add(myPlacemark);
  //Сдвигаем центр карты для размера от 1440px
  const mq = window.matchMedia('(min-width: 1440px)');

  if (mq.matches) {
    myMap.setCenter([59.938703, 30.318006]);
  } else {
    myMap.setCenter([59.938631, 30.323037]);
  }
});
