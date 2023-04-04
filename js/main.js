x = 5
console.log(x)

console.log(x);
console.log(x);
console.log(x);
console.log(x);

// this is a single-line JS comment!

/* 
this 
is 
a 
multi
line comment
*/
console.log("This is how we print in JS")

/*
Main Differences:
- python is interpreted language
- JS is a compiled language
    -interpreted = top-down; it reads it runs it!
    -compiled = some things are done at compile and NOT at run-time
*/

/*
datatypes with python vs JS:
    -strings : SAME
    -Booleans: SAME (but not title-cased)
    -Int      : Numeric
    -float     :Numeric
*/

// variable definition

var name1 = 'Brandt';
var name2 = 'Brendan';
console.log(name1);
console.log(name2);
console.log(typeof name1);


var num1 = 11;
console.log(num1);
console.log(typeof num1);

//Bools
var bool1 = true;
console.log(bool1);
console.log(typeof bool1);

/*
-lists and dictionaries (in python)
-arrays and objects (in JS)
*/

var js_arr = [name1, name2, num1, bool1];
console.log(js_arr);

// object

var js_obj = {'key': 'a_value'}
console.log(js_obj);

console.log(hoisted_variable);
var hoisted_variable = "Bear";
console.log(hoisted_variable);

// ^^^^ DON"T DO THAT!

/* 
OLD way- var
    - please just don't
NEW ways - 
    - let
        - let allows for variable redifintion, but NOT redeclaration!
    - const
        - Doesn't allow for either
Using forces us to do things the right way!
*/

let z = 7;
console.log(z);
z = 're-defined!';
console.log(z);


const pye_pye = 3.1415;
// pye_pye =    ----> Can't do it!
console.log(pye_pye);

// MATH!  Yay

// addition
let sum1 = 1.654 + 3;
console.log(sum1);

// subtraction
let diff1 = 6.324 - 2.67;
console.log(diff1);

// multiplication
let prod1 = 40 * 35;
console.log(prod1);

//division
let div1 = 75 / 25;
console.log(div1);

// exponents
let pow1 = 3 ** 3;
console.log(pow1);

/*
Rounding:
Math.round(<value>) --> rounds to the nearest integer
Math.floor(<value>) --> rounds down
Math.ceil(<value>) --> rounds up
*/

/*
A NOTE ON CASING:
snake_case - python
camelCase - JS
*/

let roundPi = Math.round(pye_pye);
console.log(roundPi);

let floorPi = Math.floor(pye_pye);
console.log(floorPi);

let ceilPi = Math.ceil(pye_pye);
console.log(ceilPi);

// rounding to decimal places
// .toFixed() . . . for display purposes

console.log(pye_pye.toFixed(2));
console.log(pye_pye);

// workaround to actually round a number-   * 100, round to int, and /100
let modPi = 3.1415;
console.log(Math.round(modPi*100)/100);

let test1 = 4.14 + '4';
console.log(test1, typeof test1);

let test2 = '4' + false;
console.log(test2, typeof test2);

let test3 = 4 + true;
console.log(test3, typeof test3);

let test4 = 4 + false;
console.log(test4, typeof test4);

let test5 = [] + undefined;
console.log(test5, typeof test5);

let test6 = [] + false;
console.log(test6, typeof test6);

let test7 = [] + 6;
console.log(test7, typeof test7);

let gwen = ('b' + 'a' +  + 'b' + 'a');
console.log(gwen);

// functions

/*
give a process a name, maybe take something in, and do something with it
*/
// def hello_world():
function helloWorld(){return 'HELLO CLICHE!'};

// calling functions
console.log(helloWorld());

let ret_val = helloWorld();
console.log(ret_val);

let hiName = function(n){
    return "Hello there" + n + '!'
};
let ret_val2 = hiName('Brendan');
console.log(ret_val2);

// ES6 introduced the arrow function syntax:
// let <nameoffunction> = (<parameters>) => { <codetorun> }


let nextHiName = (n) => {
    return 'Hi again ' + n + '!'
};

// a way to think about arrow function syntax
// () => {}

console.log(nextHiName('Athena'))

// self-invoking function
// sorta kinda anonymous, 
//  it calls itself when it's defined
console.log((function(n){return 'hi yet again ' + n + '!'})('Self-invoked!'))

/*
let's talk about conditional structure!
Python
if/elif/else
JS
if (condition){
    code block to run if
} else if (condition){
    code block to run else if
} else {
    code to run else
}
*/

let age = 35;
if (age < 18) {
    console.log("it's a kid!")
} else if ( age < 65) {
    console.log("adult")
} else {
    console.log("SENIOR")
};

// comparison operators
// (<, >, <=, >=) - all the same!
// BUT differences:  and - && in JS
//                  or - || in JS

let color = 'blue';
if (color=='green' || color == 'blue'){
    console.log('apparently it is blue')
}

console.log('4' == 4);
console.log('4' === 4);

let age2 = 45;
age2 < 18 ? console.log('KIDDO') : age2 < 65 ? console.log('adult') : console.log('senior')

// None --> only a thing in python!
// in JS it's null

let noval = null;
console.log(noval);

// looping

// common for-loop

let stri = "Clutch112";

// for i in range(len(stri)):
//     print(stri[i])

for (let i = 0; i < stri.length ; i++){
    console.log(stri[i])
}

// f-string  BACK_TICKS!!!!!!!   ` String goes in here with ${variable}`
// console.log(`the character is: ${stri[i]}`)

//while loop 
let n = 1;
while(n < 14){
    console.log(n);
    n++; // don't make inifinite loops!
}

// nested loops
let tester = 'abcd';
for (let i = 0 ; i<tester.length; i++){
    for (let j = 1; j< 5; j++){
        console.log(tester[i], j);
    }
}


// do while loop
do {
    console.log('one step taken')
} while (false);

// JS arrays
/*
equivalent to python lists. . . pretty much the same.
ordered, indexed, can have any datatypes
*/
console.log('\nARRAYS')
let animals = ['bear', 'tiger', 'elephant', 'monkey'];
console.log(animals, typeof animals)


animals[1] = 'house cat';
console.log(animals);

for ( let i = 0; i<animals.length; i++){
    console.log(i, animals[i])
};

let pointer = 0;
while (pointer < animals.length){
    console.log(pointer, animals[pointer]);
    pointer++;
};

// add/remove values from array
// array.push() / unshift

console.log(animals);
animals.push('eagle');
console.log(animals);

//removal . . . pop(), splice, shift, 

//.pop()
animals.pop();
console.log(animals);
// console.log(animals.pop())

// Array.splice()

animals.splice(2, 1);
console.log(animals);
animals.push('eagle');
console.log(animals);
animals.push('elephant');
console.log(animals);

//re-creating .remove

for (let i = 0; i<animals.length; i++){
    if (animals[i] === 'elephant'){
        animals.splice(i, 1);
        break;
    }
};
console.log(animals);
console.log("\nOTHER ARRAY METHODS");
// Array.slice(start, stop)  --- SLICE not splice  
console.log(animals);
console.log(animals.slice(3));
console.log(animals.slice(2,4));


// other array methods 
// .join(), indexOf()

let animals_str = animals.join(', ');
console.log(animals_str);

console.log(animals.indexOf('eagle'));


// .search()
let search_str = "Bald Eagle";
console.log(search_str.search('B'));


switch (animals[7]){
    case 'bear':
        console.log('Oh my, it is a bear!');
        break;
    case 'house cat':
        console.log('Oh a cute little kitten!');
        break;
    case 'eagle':
        console.log('Grand and majestic!');
        break;
    default:
        console.log(" I don't know this animal. . . ");
        break;
}