"use strict";
class Student {
    // Constructor to initialize properties
    constructor(theFirst, theLast) {
        this._firstName = theFirst;
        this._lastName = theLast;
    }
    get firstName() {
        return this._firstName;
    }
    set firstName(value) {
        this._firstName = value;
    }
    get lastName() {
        return this._lastName;
    }
    set lastName(value) {
        this._lastName = value;
    }
}
// Create an instance of the Customer class with constructor parameters
let myStudent = new Student("Martin", "Toto");
// Access and print the properties of the customer
console.log(myStudent.firstName); // Output: Martin
console.log(myStudent.lastName); // Output: Toto
