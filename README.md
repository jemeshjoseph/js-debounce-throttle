# js-debounce-throttle
Debounce and throttle functions to enhance the website performance by limiting/reducing the number of times the handler function is being executed due to user events. User events can be engagements like clicks, scroll, resize, text box inputs, mouse events etc.

# Install
```
npm install js-debounce-throttle --save
```
# Usage

#### Debouncing
```javascript

// Demo: Debouncing
'use strict';
import { debounce } from "js-debounce-throttle";

const functionToExecute = (value) => {
  // Print the value to Console 
  console.log('Value:', value);
}

/**
 * Using debounce() function
 * Param 1: Callback function to execute for debouncing behaviour eg. functionToExecute()
 * Parram 2: Time in milliseconds or debouncing interval eg. 500
 */
const debounceFunction = debounce(functionToExecute, 500);

/**
 * A search text box with element id 'searchTextBox'
 * listens for 'keyup' event to execute debouncing
 */
const searchTextBoxInput = document.getElementById('searchTextBox');
searchTextBoxInput.addEventListener("keyup", event => {
  debounceFunction(event.target.value);
});

```

#### Throttling
```javascript

// Demo: Throttling
'use strict';
import { throttle } from "js-debounce-throttle";

const functionToExecute = (value) => {
  // Print the value to Console 
  console.log('Value:', value);
}

/**
 * Using throttle() function
 * Param 1: Callback function to execute for throttling behaviour eg. functionToExecute()
 * Parram 2: Time in milliseconds or throttling interval eg. 300
 */
const throttleFunction = throttle(functionToExecute, 300);

/**
 * A search text box with element id 'searchTextBox'
 * listens for 'keyup' event to execute throttling
 */
const searchTextBoxInput = document.getElementById('searchTextBox');
searchTextBoxInput.addEventListener("keyup", event => {
  throttleFunction(event.target.value);
});

```
