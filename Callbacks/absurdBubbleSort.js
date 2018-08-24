const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Write this first.
function askIfGreaterThan(el1, el2, callback) {
  reader.question (`Is ${el1} greater than ${el2}?`, function(res) {
    if (res === 'true') {
      callback(true);
    } else {
      callback(false);
    }
  });
}

// Once you're done testing askIfGreaterThan with dummy arguments, write this.
function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
  // madeAnySwaps = false;
  if (i === arr.length - 1) {
    outerBubbleSortLoop(madeAnySwaps);
  } else {
    askIfGreaterThan(arr[i], arr[i + 1], function(isGreaterThan) {
      if (isGreaterThan) {
        [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
        madeAnySwaps = true;
      }
      i++;
      innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop);
    } );
  }
}

// Once you're done testing innerBubbleSortLoop, write outerBubbleSortLoop.
// Once you're done testing outerBubbleSortLoop, write absurdBubbleSort.

function absurdBubbleSort(arr, sortCompletionCallback) {
  function outerBubbleSortLoop(madeAnySwaps) {
    // Begin an inner loop if you made any swaps. Otherwise, call
    // `sortCompletionCallback`.
    if (madeAnySwaps) {
      innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
    } else {
      sortCompletionCallback(arr);
    }
  }
  outerBubbleSortLoop(true);
  // Kick the first outer loop off, starting `madeAnySwaps` as true.
}

absurdBubbleSort([3, 2, 1], function (arr) {
  console.log("Sorted array: " + JSON.stringify(arr));
  reader.close();
});
