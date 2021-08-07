// ex FIBONACCI SEQUENCE
// 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, etc...

// if num <= 2
//   return 1 (the first two numbers in sequence)

// otherwise return
//   same logic with num - 1
//   plus
//   same logic with num - 2



// if num <= 2
//   return 1 (the first two numbers in sequence)

// create new array with [1, 1]

// loop from i = 2 to num
//   push [i - 1] + [i - 2] to array

// return last item in array

const numbers = [41, 24, 28, 1, 40, 41, 32, 33, 50, 5, 34, 5, 21, 21, 43, 43, 21, 4, 49, 24];

const mostDuplicates = (arr) => {
    let mostValue;
    let mostCount = 0;
  
    for (let i = 0; i < arr.length; i++) {
      let counter = 0;
  
      // nested loop would go here
  
      if (counter > mostCount) {
        mostCount = counter;
        mostValue = arr[i];
      }
    }
  
    return `${mostValue} appeared ${mostCount} times.`;
  };

  module.exports = { mostDuplicates };