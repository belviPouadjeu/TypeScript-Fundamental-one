var Customer = /** @class */ (function () {
    // Constructor to initialize properties
    function Customer(theFirst, theLast) {
        this.firstName = theFirst;
        this.lastName = theLast;
    }
    return Customer;
}());
// Create an instance of the Customer class with constructor parameters
var myCustomer = new Customer("Martin", "Toto");
// Access and print the properties of the customer
console.log(myCustomer.firstName); // Output: Martin
console.log(myCustomer.lastName); // Output: Toto
