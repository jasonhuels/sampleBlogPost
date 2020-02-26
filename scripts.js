let beatles = ["John", "Paul", "George", "Ringo"];

function printArrayValues(arrayToPrint) {
  for (let i = 0; i < arrayToPrint.length; i++) {
    console.log(arrayToPrint[i]);
  }
}

printArrayValues(beatles);
printArrayValues(beatles.sort());
printArrayValues(beatles.sort().reverse());