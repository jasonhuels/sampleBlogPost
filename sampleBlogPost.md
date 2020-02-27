# Sort and Loop Through Arrays in JavaScript
Arrays and looping are two of the most important concepts in programming. Arrays are lists that contain multiple values that can be accessed as a collection or individually. Knowing how to sort an array is important because it can make searching an array for a particular value a much faster process. In this post we'll go over the basics of declaring, sorting, and looping through arrays in JavaScript.
## Let It Be an Array
Arrays in JavaScript can be created by declaring the name of the array and assigning it's values inside of square brackets:
```sh
let beatles = ["John", "Paul", "George", "Ringo"];
```
Arrays are used as a collection of multiple values in a single list-like variable. Arrays allow us to access the entire collection as a single value or to access each individual value by using that value's index. It's important to note that the first index of the array is 0 rather than 1. 
```sh
console.log(beatles);
> (4) ["John", "Paul", "George", "Ringo"]

console.log(beatles[0]);
> John
```
Unlike in many other programming languages, arrays in JavaScript do not have a fixed length which makes them even more powerful. You can easily push a new value to an array without needing to redeclare the array.
```sh
beatles.push("Yoko");
console.log(beatles);
> (5) ["John", "Paul", "George", "Ringo", "Yoko"]
```
You also have the ability to initialize an array to be empty and push values to it later.
```sh
let plasticOnoBand = [];
plasticOnoBand.push("John", "Yoko");
console.log(plasticOnoBand);
> (2) ["John", "Yoko"]
```
## All You Need is Loops
Arrays and Loops often go hand-in-hand because loops provide a convient way to iterate through an array and use the individual values in a meaningful way. The most common way to iterate through an array is by using a ```for``` loop where the iterator of the loop is also used to access the indivual indices of the array:
```sh
function printArrayValues(arrayToPrint) {
  for(let i=0; i<arrayToPrint.length; i++) {
    console.log(arrayToPrint[i]);
  }
}

printArrayValues(beatles);
> John
> Paul
> George
> Ringo
```
The anatomy of the ```for``` loop is broken into 4 parts: initialization: ```let i=0;```, termination condition: ```i<arrayToPrint```, increment/decrement statement: ```i++```, and body: ```console.log(arrayToPrint[i]);```. Here are the steps taken in executing ```for``` loop:
1. The initialization is run before we enter into the loop and the variable(s) we declare here will be scoped to the body of loop.
2. Next the termination condition is checked, if it evaluates to ```true``` the loop is exited, otherwise we continue into the body.
3. Next all the expressions within the body of the loop will be executed in order.
4. Finally the increment/decrement statement is executed before returning to step 2 and re-evaluating the termination condition.

## Here Comes the Sort
Show the code required to sort the array alphabetically, ascending then descending. After each sort, call the function again. Explain how it works.
Sorting arrays alphabetically in JavaScript can simply be done with the built-in ```sort`` method.
```sh
beatles.sort();
console.log(beatles);
> (4) ["George", "John", "Paul", "Ringo"]
```
The ```sort``` method mutates the original array and defaults to sorting the items in the array in ascending order. Sorting the array in descending order can be done be using the built-in ```reverse``` method after the array has been sorted.
```sh
beatles.sort().reverse();
console.log(beatles);
> (4) ["Ringo", "Paul", "John", "George"]
```

## Get Back to Learning JavaScript
Arrays are a great way to store a list of data or information, but they have their limitations. What if we wanted to store more information about The Beatles such as the names of all their albums, or the year they formed? Storing this information all in one array would be too disorganized to be useful. A better solution would be to use a JavaScript Object. You can learn more about Objects by following this link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object 