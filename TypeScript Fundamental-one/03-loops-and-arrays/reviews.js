var reviews = [5, 5, 4.5, 1, 3];
var total = 0;
for (var i = 0; i < reviews.length; i++) {
    console.log([i]);
    total += reviews[i];
}
var average = total / reviews.length;
console.log("Reviews average = " + average);
