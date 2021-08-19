$(document).ready(function () {
  var currentFloor = 2;// текущий этаж
  var homePath = $('.home-image path'); // каждый отдельный этаж в SVG
  var counterUp = $('.counter-up'); // кнопка увеличения этажа
  var counterDown = $('.counter-down'); // кнопка уменьшения этажа

  // наведение мышки на этаж
  homePath.on('mouseover', function () {
    homePath.removeClass('current-floor'); // удаление выделения этажа
    currentFloor = $(this).attr('data-floor'); // получение значения текущего этажа
    $('.counter').text(currentFloor); // запись значения в счетчик
  });

  // Работа счетчика (кнопка вверх)

  counterUp.on('click', function () {
    // проверка этажа (не > 18)
    if (currentFloor < 18) {
      currentFloor++; // прибавление 1 этажа
      usCurrentFloor = currentFloor.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });
      $('.counter').text(usCurrentFloor); // форматирование переменной с этажом (двузначное отображение)
      homePath.removeClass('current-floor'); // удаление выделения этажа
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
      homePath.removeClass('current-floor'); // удаление выделения этажа
      $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor'); // выделение текущего этажа
    }
  });

});