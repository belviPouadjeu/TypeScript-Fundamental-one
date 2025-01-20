var sportOne = [
    "Soccer",
    "Basketball",
    "Tennis",
    "Cricket",
    "Volleyball",
    "Baseball",
    "Golf",
    "Swimming",
    "Table Tennis",
    "Rugby"
];
/*for(let i = 0; i < sportOne.length; i++){
    console.log(sportOne[i]);
    

}*/
// Let's use the simplified for loop
for (var _i = 0, sportOne_1 = sportOne; _i < sportOne_1.length; _i++) {
    var tempSport = sportOne_1[_i];
    if (tempSport == "Tennis") {
        console.log(tempSport + "<< My Favourite!");
    }
    else {
        console.log(tempSport);
    }
}
