let sportOne: string[] = [
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


for(let tempSport of sportOne){
    if(tempSport == "Tennis"){
        console.log(tempSport + " << My Favourite!");
        
    }else{
        console.log(tempSport);
        
    }
}