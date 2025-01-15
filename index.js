// Iteration 1: Names and Input
const hacker1 = "George";
console.log(`The drivers' name is ${hacker1}`);

const hacker2 = "Oliver";
console.log(`The navigator's name is ${hacker2}`)


// Iteration 2: Conditionals
const hacker1Length = hacker1.length;
console.log(hacker1Length);

const hacker2Length = hacker2.length;
console.log(hacker2Length);

if (hacker1Length > hacker2Length) {
    console.log(`The driver has the longest name, it has ${hacker1Length} characters.`)
}  if (hacker1Length < hacker2Length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2Length} characters.`)
} else if (hacker1Length === hacker2Length) {
    console.log (`Wow, you both have equally long names, ${hacker2Length} characters!`);
}


// Iteration 3: Loops


//3.1
let hackerArray = hacker1.split('');
console.log(hackerArray);

let hacker1CapsSpace = hackerArray.join(" ").toUpperCase();
console.log(hacker1CapsSpace);


  //3.2

  let hacker2Reversed = hacker2.split('').reverse().join('');
  console.log(hacker2Reversed);
 
  //3.3

  if (hacker1 < hacker2) {
    console.log(`The driver's name goes first.`);
}   if (hacker1 > hacker2) {
    console.log(`Yo, the navigator goes first, definitely.`);
}  if (hacker1 === hacker2) {
    console.log (`What?! You both have the same name?`);
}
