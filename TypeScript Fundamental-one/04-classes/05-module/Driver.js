"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Student_1 = require("./Student");
// Create an instance of the Customer class with constructor parameters
let myStudent = new Student_1.Student("Martin", "Toto");
// Access and print the properties of the customer
console.log(myStudent.firstName); // Output: Martin
console.log(myStudent.lastName); // Output: Toto
