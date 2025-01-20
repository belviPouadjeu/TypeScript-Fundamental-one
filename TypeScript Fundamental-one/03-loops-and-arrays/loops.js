/**
 * The for loop is used to repeat a block of code a specified number of times. It consists of three parts: initialization, condition, and increment/decrement. Each part is executed at different stages of the loop.
 */
// ================================ Basic For Loop
/**
 * The basic for loop allows you to initialize a variable, set a condition for the loop to run, and update the variable after each iteration.
 */
for (var i = 0; i < 5; i++) {
    console.log(i); // Output: 0, 1, 2, 3, 4
}
// ================================ For-Of Loop
/**
 * The for-of loop iterates over the values of an iterable object, such as an array or a string.
 */
var colors = ["red", "green", "blue"];
for (var _i = 0, colors_1 = colors; _i < colors_1.length; _i++) {
    var color = colors_1[_i];
    console.log(color); // Output: red, green, blue
}
// ================================  For-In Loop
/**
 * The for-in loop iterates over the enumerable properties of an object or array. It returns the keys or property names.
 */
var person = {
    name: "Ramesh",
    age: 25,
    city: "Mumbai"
};
for (var key in person) {
    console.log("".concat(key, ": ").concat(person[key])); // Output: name: Ramesh, age: 25, city: Mumbai
}
// ================================ Nested For Loop
/**
 * A nested for loop is a for loop inside another for loop. It allows you to perform more complex iterations.
 */
for (var i = 1; i <= 3; i++) {
    for (var j = 1; j <= 3; j++) {
        console.log("".concat(i, " * ").concat(j, " = ").concat(i * j)); // Output: 1 * 1 = 1, 1 * 2 = 2, ... , 3 * 3 = 9
    }
}
