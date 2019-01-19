// Create a callback function and invoke the function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  firstItem(items, function(first) {
    console.log(first)
  });

*/

function logger(x) {
  console.log(x);
}


function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr.length);
}

getLength(items, logger);

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr[arr.length - 1]);
}

last(items, logger)

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x + y);
}

sumNums(12, 5, logger);

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x * y);
}

multiplyNums(3, 7, logger);

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  let contained = false;
  for (let i = 0; i < list.length; i++) {
    if (list[i] === item) {
      contained = true;
      break;
    }
  }
  return cb(contained);
}

contains('Pencil', items, logger);

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  let noDuplicates = [];
  for (let i = 0; i < array.length; i++) {
    let val = array[i];
    let used = false;
    for (let j = 0; j < noDuplicates.length; j++) {
      if (val === noDuplicates[j]) {
        used = true;
      }
    }
    if (!used) {
      noDuplicates.push(val);
    }
  }

  cb(noDuplicates);
}

removeDuplicates(items, (arr) => {
  console.log(arr);
})