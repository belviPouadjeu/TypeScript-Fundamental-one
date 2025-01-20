class Customer {

    // Properties
    firstName: string;
    lastName: string;

    // Constructor to initialize properties
    constructor(theFirst: string, theLast: string) {
        this.firstName = theFirst;
        this.lastName = theLast;
    }

    
}

// Create an instance of the Customer class with constructor parameters
let myCustomer = new Customer("Martin", "Toto");

// Access and print the properties of the customer
console.log(myCustomer.firstName);  // Output: Martin
console.log(myCustomer.lastName);   // Output: Toto
