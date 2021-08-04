const containerEl = document.getElementById('container');

const clickHandler = function(event) {
  if (event.target.matches('button')) {
    event.target.textContent = 'Clicked!';
  }
};

containerEl.addEventListener('click', clickHandler);




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