export function debounce(func, delay) {
  let timerId;

  return function (event) {
    clearTimeout(timerId);

    timerId = setTimeout(function () {
      func(event);
    }, delay);
  };
}

export function debounceFunction(func, delay) {
  let timerId = null;

  return function (...args) {
    clearTimeout(timerId);

    timerId = setTimeout(function () {
      func.apply(null, args);
    }, delay);
  };
}
