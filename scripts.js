// Initialize a new array
let beatles = ["John", "Paul", "George", "Ringo"];

// Add "Yoko" to beatles array
beatles.push("Yoko");

// Remove the last element "Yoko" from the array
beatles.pop();

// Loop through an array printing each value to a separate line
function printArrayValues(arrayToPrint) {
  for (let i = 0; i < arrayToPrint.length; i++) {
    console.log(arrayToPrint[i]);
  }
}

// Call the printArrayValues method
printArrayValues(beatles);
// Sort the array in alphabetical order before printing
printArrayValues(beatles.sort());
// Sort the array in reverse-alphabetical order before printing
printArrayValues(beatles.sort().reverse());