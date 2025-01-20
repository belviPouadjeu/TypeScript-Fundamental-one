/**
 * The for loop is used to repeat a block of code a specified number of times. It consists of three parts: initialization, condition, and increment/decrement. Each part is executed at different stages of the loop.
 */


// ================================ Basic For Loop

/**
 * The basic for loop allows you to initialize a variable, set a condition for the loop to run, and update the variable after each iteration.
 */

for (let i = 0; i < 5; i++) {
    console.log(i); // Output: 0, 1, 2, 3, 4
}

// ================================ For-Of Loop

/**
 * The for-of loop iterates over the values of an iterable object, such as an array or a string.
 */
let colors: string[] = ["red", "green", "blue"];

for (let color of colors) {
    console.log(color); // Output: red, green, blue
}

// ================================  For-In Loop

/**
 * The for-in loop iterates over the enumerable properties of an object or array. It returns the keys or property names.
 */
let person = {
    name: "Ramesh",
    age: 25,
    city: "Mumbai"
};

for (let key in person) {
    console.log(`${key}: ${person[key]}`); // Output: name: Ramesh, age: 25, city: Mumbai
}

// ================================ Nested For Loop
/**
 * A nested for loop is a for loop inside another for loop. It allows you to perform more complex iterations.
 */
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
      console.log(`${i} * ${j} = ${i * j}`); // Output: 1 * 1 = 1, 1 * 2 = 2, ... , 3 * 3 = 9
    }
}