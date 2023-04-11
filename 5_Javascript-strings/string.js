const collectionOfWords = ["amulya","ananya","vignesh","vaibhavi"]
console.log(collectionOfWords[1]);

const name = "Amulya prabhu";
console.log(name[1])

// javascript in double quotes
const Name = "Vignesh"
console.log(Name)


// javascript in single quotes
const names = 'baby'
console.log(names)

const use = 'don\'t do this\'';
console.log(use)


//  easy to remeber n for new line -->   \n -> for creating new line ( i.e, next line just like div tag in html) in the code
const family = " my family is a nuclear family. \n I have one sibling."
console.log(family)

// easy to remeber t for tab which gives space-->  \t -> for creating space in the line ( i.e," " can also be used) in the code
const fam = " my family is a nuclear family.\t I have one sibling."
console.log(fam)

// template literals - which is exactly same as f string that is used in python and the syntax in js for it is 4{"string"}
const naam ="amulya prabhu"
const greetings = (naam) => {
    console.log(` hi my name is ${naam}`);
};
greetings("amulya");
greetings("vignesh");



// changing the string to uppercase and lower case , for upper case it is variable.toUpperCase(); and for lowercase it is variable.toLowerCase();


let channel = "do some coding"
//  console.log(channel.toUpperCase())

let Channel = "DO SOME CODING"
 console.log(channel.toLowerCase())


