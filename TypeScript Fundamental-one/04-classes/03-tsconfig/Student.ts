class Student {

    // Properties
    private _firstName: string;
    private _lastName: string;
    

    // Constructor to initialize properties
    constructor(theFirst: string, theLast: string) {
        this._firstName = theFirst;
        this._lastName = theLast;
    }

    public get firstName(): string {
        return this._firstName
    }

    public set firstName(value: string){
        this._firstName = value;
    }

    public get lastName(): string {
        return this._lastName;
    }
    public set lastName(value: string) {
        this._lastName = value;
    }

    
}

// Create an instance of the Customer class with constructor parameters
let myStudent = new Student("Martin", "Toto");

// Access and print the properties of the customer
console.log(myStudent.firstName);  // Output: Martin
console.log(myStudent.lastName);   // Output: Toto
