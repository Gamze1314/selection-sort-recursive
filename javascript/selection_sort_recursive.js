function selectionSortRecursive(arr) {
  if (arr.length === 0) {
    return arr;
  }
  // arr [0,2,3,1]

  const min = Math.min(...arr);
  const idx = arr.indexOf(min);
  arr.splice(idx, 1); //removes the min element
  // arr = [2,3,1]

  const result = selectionSortRecursive(arr);
  //The unshift() method in JavaScript adds one or more elements to the beginning of an array. It modifies the original array and returns the new length of the array.
  result.unshift(min); // min element i basa ekle
  return result;
}

if (require.main === module) {
  // add your own tests in here
  const longInput = [];

  for (let i = 0; i < 100; ++i) {
    longInput.push(Math.random());
  }

  const startTime = Date.now();

  for (let i = 0; i < 1000; ++i) {
    selectionSortRecursive([2, 1]);
    selectionSortRecursive(longInput);
  }

  const avgTime = (Date.now() - startTime) / 2000;

  console.log(avgTime);
  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSortRecursive([3, -1, 5, 2]));

  console.log("");
}

module.exports = selectionSortRecursive;

// Please add your pseudocode to this file
// find the minimum , remove it from the stack until arr.length is 0.

// And a written explanation of your solution
