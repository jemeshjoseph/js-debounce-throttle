
//Demo: Debouncing and Throttling in JavaScript
'use strict';
import { debounce, throttle } from "js-debounce-throttle";

let counter = 0;
const getData = (searchValue) => {
  // Fetching data from server via API call
  console.log('Fetching Data...', counter++, "Search value:", searchValue);
}

const debounceInput = document.getElementById('debounceInput');
const throttleInput = document.getElementById('throttleInput');

/**
 * getData is the function to fetch data via API call
 * 300 is the delay time in ms or debouncing interval in ms
 */
const betterFunction1 = debounce(getData, 300);
const betterFunction2 = throttle(getData, 500);

debounceInput.addEventListener("keyup", event => {
  betterFunction1(event.target.value);
});

throttleInput.addEventListener("keyup", event => {
  betterFunction2(event.target.value);
});
