// 3D Scroll

let zSpacing = -1000, // Задается расстояние между "кадрами" по оси Z
  lastPos = zSpacing / 5, // Начальная позиция для сравнения прокрутки
  $frames = document.getElementsByClassName("frame"), // Получение элементов с классом "frame"
  frames = Array.from($frames), // Преобразование HTMLCollection в массив
  zVals = []; // Массив для хранения значений координат Z для каждого кадра

window.onscroll = function () {
  let top = document.documentElement.scrollTop, // Получение текущей позиции прокрутки
    delta = lastPos - top; // Разница между последней позицией и текущей

  lastPos = top; // Обновление последней позиции

  frames.forEach(function (n, i) {
    zVals.push(i * zSpacing + zSpacing); // Инициализация значений координат Z для каждого кадра
    zVals[i] += delta * -5.5; // Изменение координаты Z в зависимости от прокрутки
    let frame = frames[i],
      transform = `translateZ(${zVals[i]}px)`, // Создание строки трансформации для перемещения кадра по оси Z
      opacity = zVals[i] < Math.abs(zSpacing) / 1.8 ? 1 : 0; // Установка прозрачности кадра в зависимости от его координаты Z
    frame.setAttribute("style", `transform: ${transform}; opacity: ${opacity}`); // Применение стиля к кадру
  });
};

window.scrollTo(0, 1);

// Audio

let soundButton = document.querySelector(".soundbutton"),
  audio = document.querySelector(".audio");

soundButton.addEventListener("click", (e) => {
  soundButton.classList.toggle("paused");
  audio.paused ? audio.play() : audio.pause();
});

window.onfocus = function () {
  soundButton.classList.contains("paused") ? audio.pause() : audio.play();
};

window.onblur = function () {
  audio.pause();
};
