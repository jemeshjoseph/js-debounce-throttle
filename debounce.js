// Debounce function
export default function (fn, delay) {
  let timer;
  return function () { // Closure function
    let context = this;
    let args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      // Call the getData function
      // apply() function is used to pass the arguments
      fn.apply(context, args);
    }, delay);
  }
}