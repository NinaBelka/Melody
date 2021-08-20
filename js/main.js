$(document).ready(function () {
  var currentFloor = 2;// текущий этаж
  var floorPath = $('.home-image path'); // каждый отдельный этаж в SVG
  var counterUp = $('.counter-up'); // кнопка увеличения этажа
  var counterDown = $('.counter-down'); // кнопка уменьшения этажа
  var modal = $('.modal'); // модальное окно
  var modalCloseButton = $('.modal-close-button'); // кнопка закрытия модального окна
  var viewFlatsButton = $('.view-flats'); // кнопка просмотра квартир на этаже

  // наведение мышки на этаж
  floorPath.on('mouseover', function () {
    floorPath.removeClass('current-floor'); // удаление выделения этажа
    currentFloor = $(this).attr('data-floor'); // получение значения текущего этажа
    $('.counter').text(currentFloor); // запись значения в счетчик
  });

  // открытие модального окна при нажатии на этаж
  floorPath.on('click', toggleModal);

  // закрытие модального окна по кнопке с крестом
  modalCloseButton.on('click', toggleModal);

  //открытие модального окна по кнопке просмотра квартир на этаже
  viewFlatsButton.on('click', toggleModal);

  // Работа счетчика (кнопка вверх)

  counterUp.on('click', function () {
    // проверка этажа (не > 18)
    if (currentFloor < 18) {
      currentFloor++; // прибавление 1 этажа
      usCurrentFloor = currentFloor.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });
      $('.counter').text(usCurrentFloor); // форматирование переменной с этажом (двузначное отображение)
      floorPath.removeClass('current-floor'); // удаление выделения этажа
      $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor'); // выделение текущего этажа
    }
  });
  // Работа счетчика (кнопка вниз)

  counterDown.on('click', function () {
    // проверка этажа (не < 2)
    if (currentFloor > 2) {
      currentFloor--; // уменьшение 1 этажа
      usCurrentFloor = currentFloor.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });
      $('.counter').text(usCurrentFloor); // форматирование переменной с этажом (двузначное отображение)
      floorPath.removeClass('current-floor'); // удаление выделения этажа
      $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor'); // выделение текущего этажа
    }
  });

  // открытие/закрытие модального окна
  function toggleModal() {
    modal.toggleClass('is-open');
  }
});