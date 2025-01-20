// Define an array of numbers representing review scores
let reviews: number[] = [5, 5, 4.5, 1, 3];

// Initialize a variable to hold the total of all review scores
let total: number = 0;

// Loop through each element in the reviews array
for (let i = 0; i < reviews.length; i++) {
    // Print the current index to the console (for debugging or tracking)
    console.log([i]);
    
    // Add the current review score to the total
    total += reviews[i];
}

// Calculate the average review score by dividing the total by the number of reviews
let average: number = total / reviews.length;

// Print the calculated average to the console
console.log("Reviews average = " + average);
