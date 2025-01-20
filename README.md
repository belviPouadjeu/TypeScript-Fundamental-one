## Exercise: Implement a Shape Hierarchy with Polymorphism

### Objective
Learn to:
1. Design a shape hierarchy using `inheritance` and `overriding`.
2. Use `polymorphism` to manage multiple object types in a single array.
3. Separate logic across multiple files for modularity and clarity.

### Exercise Statement

#### 1. Define the Shape Hierarchy:
- Use the provided `Shape`, `Circle`, and `Rectangle` classes.

Ensure the following:
- `Shape` is the base class with properties `x` and `y`, and a `getInfo()` method.
- `Circle` and `Rectangle` inherit from `Shape` and override the `getInfo()` method to include additional properties (`radius` for `Circle`, `width` and `length` for `Rectangle`).

#### 2. Driver Script (`Driver.ts`):
Implement the following:
- Instantiate individual objects: `Shape`, `Circle`, and `Rectangle`.
- Display the information for each object using their `getInfo()` method.

#### 3. Array Handling Script (`ArrayDriver.ts`):
Create an array of type `Shape[]`:
- Add instances of `Shape`, `Circle`, and `Rectangle` to the array.
- Use a loop to iterate through the array and log the output of `getInfo()` for each object.

### Steps to Complete

#### 1. Base and Derived Classes
- Use the provided `Shape.ts`, `Circle.ts`, and `Rectangle.ts` files.
- Each class should have:
  - A constructor to initialize its properties.
  - Getters and setters for its properties.
  - A `getInfo()` method (override in derived classes).

#### 2. Driver Script (`Driver.ts`)
- Write a script that:
  - Creates and initializes `Shape`, `Circle`, and `Rectangle` objects.
  - Logs their information using the `getInfo()` method.

#### 3. Array Handling Script (`ArrayDriver.ts`)
- Implement the following:
  - Declare an empty array of type `Shape[]`.
  - Add instances of `Shape`, `Circle`, and `Rectangle` to the array.
  - Use a `for-of` loop to iterate through the array.
  - Call the `getInfo()` method on each object in the array and log the output.
