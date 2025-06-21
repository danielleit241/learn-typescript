//Literals
let direction: "north" | "south" | "east" | "west";
direction = "north";

console.log(direction);
if(direction === "north") {
    console.log("Heading north!");
}

let responseCode: 200 | 404 | 500;
responseCode = 200;
console.log(`Response code is: ${responseCode}`);

//Enum
enum Size{
    Smallest,
    Medium,
    Large,
}
var mySize: Size = Size.Medium;

console.log(Size.Smallest);
console.log(Size.Medium);
console.log(Size.Large);

if(mySize === Size.Medium) {
    console.log("My size is medium.");
}
