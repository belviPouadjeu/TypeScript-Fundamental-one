var Student = /** @class */ (function () {
    // Constructor to initialize properties
    function Student(theFirst, theLast) {
        this._firstName = theFirst;
        this._lastName = theLast;
    }
    Object.defineProperty(Student.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: false,
        configurable: true
    });
    return Student;
}());
// Create an instance of the Customer class with constructor parameters
var myStudent = new Student("Martin", "Toto");
// Access and print the properties of the customer
console.log(myStudent.firstName); // Output: Martin
console.log(myStudent.lastName); // Output: Toto
