# js-debounce-throttle
Debounce and throttle functions to enhance the website performance by limiting/reducing the number of times the handler function is being executed due to user events. User events can be engagements like clicks, scroll, resize, text box inputs, mouse events etc.

## Install
```
npm install js-debounce-throttle --save
```
## Usage

### Debouncing
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

### Throttling
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

## API
### debounce(callback, delay): Function
`debounce` function itself returns a `Function` which is the debounce execution of the callback function.
> Debouncing can be applied in implementing suggestive text, where we wait for the user to stop typing for a few seconds before suggesting the text. thus, on every keystroke, we wait for some seconds before giving out suggestions.
Another application of debouncing is in content-loading webpages like Facebook and Twitter where the user keeps on scrolling. In these scenarios, if the scroll event is fired too frequently, there might be a performance impact, as it contains lots of videos and images. Thus the scroll event must make use of debouncing.

### throttle(callback, delay): Function
`throttle` function itself returns a `Function` which is the throttle execution of the callback function.
> It prevent frequent calling of the function. It makes the website faster and controls the rate at which a particular function is called.

Parameter | Type | Description
------------ | ------------- | -------------
**`callback`** | `Function` | Function to be executed after the delay. The `this` context and all arguments are passed through, as-is, to `callback` when the throttled/debounced function is executed.
**`delay`** | `Number` | Time delay expressed in milliseconds to debounce/throttle the function execution.

## Browser Support
All modern browsers and IE10+.
