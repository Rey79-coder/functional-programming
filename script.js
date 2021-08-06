const data = [12, 23, 38, 40, 54, 62, 71, 87, 99];

const binarySearch = (arr, num, left, right) => {
  let middle = Math.floor((left + right) / 2);

  // range overlapped, so never found number
  if (left > right) {
    return -1;
  }
  else if (num === arr[middle]) {
    return middle;
  }
  else if (num < arr[middle]) {
    // call again with a new right value
    return binarySearch(arr, num, left, middle - 1);
  }
  else {
    // call again with a new left value
    return binarySearch(arr, num, middle + 1, right);
  }
};

// set initial left and right values on first call
console.log(binarySearch(data, 12, 0, data.length - 1));


// const binarySearch = (arr, num) => {
//   let left = 0;
//   let right = arr.length - 1;
//   let middle = Math.floor((left + right) / 2);

//   if (num === arr[middle]) {
//     return 'found it';
//   }
//   else if (num < arr[middle]) {
//     right = middle;
//     return `bring right down to ${right}`;
//   }
//   else if (num > arr[middle]) {
//     left = middle + 1;
//     return `bring left up to ${left}`;
//   }
// };

// console.log(binarySearch(data, 38));

// FUNCTION SELF-CONTAINED BUTTON
// const containerEl = document.getElementById('container');

// const clickHandler = function(event) {
//   if (event.target.matches('button')) {
//     event.target.textContent = 'Clicked!';
//   }
// };

// containerEl.addEventListener('click', clickHandler);




// FUNCTION TO CREATE A COUNTER
// const buttonEl = document.getElementById('my-button');

// const clickHandler = function() {
//   let count = 0;

//   return function() {
//     count++;
//     this.textContent = `Clicks: ${count}`;
//   };
// };

// buttonEl.addEventListener('click', clickHandler());








// CLOSURE APPROACH IS THAT YOU ADD MORE BUTTONS, YOU'RE NOT POLLUTING THE GLOBAL SPACE.
// const buttons = document.getElementsByTagName('button');

// for (let i = 0; i < buttons.length; i++) {
//   buttons[i].addEventListener('click', clickHandler());
// }