//  let and const

let num = 1;
let num2 = 2;
console.log(num * num2) 
num = 20
console.log(num * num2) 

const myMoney = 300;

const isEven = (myMoney % 2) === 0; 

if (isEven) {
    console.log('even');
} else {
    console.log('odd');
}

const myFirstName = "Jett";
const myAge = 24;
const myFullName = `${myFirstName} Dembin`;
console.log(`Hi I am ${myFullName} and I am ${myAge} years old`);
if (myAge > 28) {
    console.log("Im older than Aaron");
} else if (myAge === 28) {
    console.log("Im the same age as Aaron");
} else {
    console.log("Im younger than Aaron");
}

const isEvenAge = (myAge % 2) === 0;

if (isEvenAge) {
    console.log("My age is even");
} else {
    console.log("My age is odd");
}

let activeUserCount = 0;
if (activeUserCount === 1) {
    console.log("There is 1 active user");
} else {
    console.log("There ARE 2 active USERS");
}

/*
 JS Practice 3
 Again you'll want to open the console to test your results
*/

/*
    ☑️ create an empty "Array Literal" and save it in the variable "days"
    ☑️ write an "if" statement to test if the array has any items (HINT: truthy / falsy)
    ☑️ inside the "if" block, print out the first item from the array
    ☑️ inside the "else" block, push a string "Mon" into the array
*/
/*
const days = [];
if (days == 0 || "") {
    console.log("Has no items");
    return(days[0]);
} else {
    days.push("Mon");
    console.log(days);
}
*/

/*
    ☑️ create an "Array Literal" and save it in the variable "months" and add the values "Jan" and "Feb"
    ☑️ write an "if" statement to test if the array has any items AND the first month starts with "J" 
    ☑️ inside the "if" block, print out the first item from the array
    ☑️ inside the "else" block, push a string "Jan" into the array.
    ☑️ outside the "if else" blocks, print out the "type of" the "months" variable (HINT: arrays have a special type function)
*/
const months = [];
months.push("Jan", "Feb");
console.log(months != 0)
console.log(months[0].indexOf("J"))
if ((months != (0 || "")) && (months[0].indexOf("J") == 0)) {
        console.log(months[0])
} else {
    months.push("Jan");
}

console.log(Array.isArray(months));
/*
    ☑️ create a variable "numOfWeeks" and save the number 0 in it
    ☑️ write an "if" statement that checks if the value of "numOfWeeks" is a "number" type
    ☑️ inside the "if" block, use let to create a variable "areNoWeeks", then using the value of numOfWeeks, fill this variable with a boolean (should be false if numOfWeeks is zero, and true otherwise)
    ☑️ outside the "if" block, print the value of "areNoWeeks" -- what is it?
    ☑️ can you fix this so "areNoWeeks" prints out a boolean?
*/

const numOfWeeks = 0;
let areNoWeeks;
if (typeof numOfWeeks === "number") {
    areNoWeeks = Boolean(numOfWeeks);
}
console.log(areNoWeeks);

var nums = [4, 3, 2];
if (nums.length && nums[1] > 2) {
    console.log("t");
}
const first = "Aaron";
console.log(first.length)

/*
 JS Practice 4

 this time you'll get a little less direction, 
 use "don't forget javascript" cheat sheet & re-watch the videos if needed!
*/

/*
    ☑️ create a string that contains your name
    ☑️ for loop over it, and print character to the console, one at a time
*/
const myName = "Jett";

for (let i = 0; i < myName.length; i++) {
    console.log(myName[i]);
}
/*
    ☑️ create an array with the first names of everyone in your family
    ☑️ for loop over the array, and print out the names one at a time
    ☑️ now, change your loop to print out first and last name on each iteration!
        (hint, your last name is the same for you whole family, right?)
*/
const names = ["Ben", "Max", "Jett", "Maricia"];

for (let i = 0; i < names.length; i++) {
    names[i] = names[i] + " " + "Dembin";
    console.log(names)
}

/*
    ☑️ copy the code you wrote above and paste it below this comment
    ☑️ now "refactor" this code into a "declarative" "for of" loop
*/
for (name of names) {
    console.log(name)
}
/*
    ☑️ now, declare an index variable "i" (on its own) and set it to zero
    ☑️ now write a while loop, with the break condition being i < 10. DON'T SAVE THE FILE
    ☑️ ...because you need to increment i by one each time the loop runs (do this inside the loop body)
    ☑️ now console log i in the body, and make sure it's printing numbers 0-9
*/
var i = 0;

while (i < 10) {
    console.log(i)
    i++;
}


/*
    ☑️ ok take the while loop code from above and paste it below
    ☑️ now, change i to be an empty string
    ☑️ set the break condition to be when the string length is > 10
    ☑️ and add a new "A" character to the end of i every time the loop runs.
*/

var i = "";

while (i.length < 10) {
    i += "A";
    console.log;
}
/*
    ☑️ still with me? let's create an object in variable "computer"
    ☑️ set the following keys & values: ram is "8GB", cpu is "quad core", storage is "1TB"
    ☑️ now, loop over the object with a "for in" loop
    ☑️ on each loop iteration, print out the key and value in a string formatted like so:
        "ram spec is 8GB", "cpu spec is quad core", "storage spec is 1TB"
*/

var computer = {
    ram : "8GB",
    cpu : "quad core",
    storage : "1TB"
}
/*
for (var key in computer) {
    console.log(`${key} is ${computer[key]}`)
}*/

/*
  JS Practice 5
  
    This will be the hardest practice yet, so get ready!

    We'll practice using common methods, then creating our own functions

    To test a given function or method, 
    you can put it inside a console log, like so.
        >> console.log(addTwo(2));
        >> 4

    or like so with your "expected" value of 4
        >> console.log(addTwo(2) === 4)
        >> true
    this also known as a test :)
*/
console.log(2 + 2);

/*
    ☑️ Cool, let's create our own functions, first create a function definition that...
        >> 1. takes a number, "num" as an argument
        >> 2. divides num by 2
        >> 3. (don't forget to return!)
    ☑️ then, add some code to your function that rounds the number DOWN
    ☑️ finally, call your function with the values: 10, 25, 1235
        >> these should return: "5", "12", "617"
*/

function divides(num) {
    return(Math.floor(num / 2));
}
console.log(divides(1235));
divides(10);
divides(25);
divides(1235);


/*
    ☑️ now, create a function expression that 
        >> 1. takes a string as an argument
        >> 2. takes the first character "upper cases" it, and returns it
        >> 3. HINT: use direct indexing to get a single character from a string
    ☑️ call your function with the values: "hello", "world", "i love javascript"
        >> these should return "H", "W", "I"
    ☑️ BONUS: change your fn to return the original string capitalized
        >> these should return "Hello", "World", "I love javascript"
*/

const strings = function(string) {
    string[0] === 0
    return string[0].toUpperCase() + string.slice(1);
}

const newString = strings("hello");
console.log(newString);
console.log(strings("world"));
console.log(strings("i love javascript"));


/*
    ☑️ Now, let's get some practice with the string methods
    ☑️ given the string "i love javascript"...
        >> get the "indexOf" the "j" character (should return 7)
        >> get the "indexOf" the "z" character (should return -1)

        >> get a "slice" of just the word "javascript"
        >> get a "slice" of just the word "love"

        >> "replace" the word "javascript" with "HTML"

        >> "split" the words apart into an array (should return ["i", "love", "javascript"])
*/

var love = "I love javascript";

console.log(love.slice(2, 7));
console.log(love.replace("javascript", "HTML"));
console.log(love.split(" "));



/*
    ☑️ let's get some practice with the number methods
    ☑️ given the number 1000
        >> Convert it to a string with a "fixed" 2 decimal places
        >> add a dollar sign to the front of this string
        >> Use Math.max to compare your age with my age (28)
*/

let a = 1000;
let b = a.toFixed(2).toString();
let c = "$" + b;
console.log(Math.max(24, 28));
/*
    ☑️ let's get some practice with the array methods
    ☑️ given the array [ 1, 2, 3, 4 ]
        >> Let's "slice" it to just get the last 2 numbers 
            (remember, it does not modify the array, but makes a copy)

        >> Now, let's "push" numbers 5 and 6 into our array
            ( the Array should now be [1, 2, 3, 4, 5, 6] )

        >> Let's "SPLICE" it to now remove the 4 and 5 
            (remember, this DOES modify the array "in place")

*/

let array = [1, 2, 3, 4];
console.log(array.slice(2));
console.log(array.push(5, 6));
console.log(array);
array.splice(3, 2);
console.log(array);
/*
    CHAINING

    A common pattern is to chain multiple methods together
    They get "evaluated" from left to right, so...

    var name = "Igor Z";

    name.toUpperCase().split(' '); 
        >> would work! 
        >> toUpperCase goes first, so we get: "IGOR Z".split(' '), and finally ['IGOR', 'Z']
        >> in other words, we use 2 string methods in a row

    name.split(' ').toUpperCase();
        >> would NOT work
        >> split goes first, so we get ["Igor", "Z"].toUpperCase(), which causes an error
        >> we cannot use .toUpperCase, a string method, on an array

    ☑️ a common pattern is chaining "split" and "join" together
        this allows us to use array methods on strings, and then convert them back

        write the following out to see for yourself
        >> create a string, var alphabet = "abc"
        >> ".split" this string with the "" (empty space) char as an argument
        >> attach the ".reverse()" method to the end
        >> now ".join" this array with the "" (empty space) char as an argument

        cool, right?
*/

var alphabet = "abc";
console.log(alphabet.split("").reverse().join(""));


/*
    ☑️ ok, now it's your turn (for real this time)
        Chain these steps into a single line! (Don't use intermediary variables)

    ☑️ create a number, var myNumber = 100...
        >> Let's convert it to a "fixed" 2 decimcal places (ex. "100.00")
        >> Then let's "split" it at "." to get dollars and cents
        >> Finally, let's use DIRECT INDEXING to just get the cents (ex. "00")
*/

var myNumber = 100;
console.log(myNumber.toFixed(2));
console.log(myNumber.toFixed(2).split(".").splice(1));

/*
    ☑️ one more, create a string, var coachName = "jan frey"...
        >> Let's split the words apart
        >> Then JUST get the last name initial (hint: direct indexing 2x)
        >> Convert the "f" to upper case
        >> Concat it, to create a string that says "F is the last initial"
        >> And finally, wrap the whole thing in a console.log!
*/


var coachName = "jan frey";
console.log((coachName.split(" ").splice(1).toString().split("").splice(0, 1).toString().toUpperCase()) + " is the last initial");



/*
 JS Practice 6
*/

/*
    Let's practice "higher order" array methods.
    (Using arrow functions is optional)

    Remember, To test a given function or method, 
    you can put it inside a console log, like so.
        >> console.log(addTwo(2));
        >> 4

    or like so with your "expected" value of 4
        >> console.log(addTwo(2) === 4)
        >> true
    this also known as a test :)
*/

var nums = [1, 2, 3, 4];

/*
    SOME and EVERY
    ☑️ write some code to check if "every" number in nums is positive
    ☑️ write some code to check if any / "some" numbers in nums are greater than 3
*/

const pos = nums.every(num => {
    if (num >= 0) {
        return true
    }
});
console.log(pos);

const overThree = nums.some(num => {
    if (num > 3) {
        return num
    }
});
console.log(overThree);

/*
    FOR EACH number in nums
    ☑️ print out each number one at a time (use forEach, not a loop)
    ☑️ print strings formatted like so ("1 sheep", "2 sheep", "3 sheep"...) to the console
*/

nums.forEach(num => {
    console.log(`${num} sheep`);
});

/*
    MAP is arguably the most commonly used higher order method
    ☑️ write some code that creates a new array, where double every number in nums is doubled
    ☑️ write some code that creates a new array, where each number is replaced by a dollar amount
        (ex ['$1.00', '$2.00', ...])
    ☑️ write some code that creates a new array, where each number is replaced by a boolean
        indicating whether it is positive or not
        (ex. [true, true, ...])
*/

const newNums = nums.map(num => num * 2);
console.log(newNums);

const numDollar = nums.map(num => (`$${num}.00`));
console.log(numDollar);

/*
    Let's FILTER things down
    ☑️ write some code that creates a filtered array where only the negative numbers remain
        (should be an empty array...)
    ☑️ write some code that creates a filtered array where only even numbers remain
        (HINT: %)
*/

const filteredNums = nums.filter(num => {});
console.log(filteredNums);

const filteredEvenNums = nums.filter(num => {
    if (num % 2 === 0) {
        return true
    }
});
console.log(filteredEvenNums)

/*
    REDUCE the complexity (warning: challenging)
    ☑️ A common use case for reduce is adding all the numbers in an array together
        can you get that sum with reduce, for this array? (result should be 10)
    ☑️ Still too easy for you? Ok.
        Try creating a single "sheep" string from all the numbers, using reduce
        result should be ("1 sheep, 2 sheep, 3 sheep...")
        (Feel free to use Google, & don't worry if you can't get this! It's very challenging)
*/

const totalNums = nums.reduce((sum, age) => {
    return total = sum + age;
});
console.log(totalNums);

const sheepNums = nums.reduce((sum, age, i) => {
    sum[i] += `${age} sheep`;
    return sum
}, ["", "", "", ""]);
console.log(sheepNums)

/*
    HIGHER ORDER CHAINING

    Method chaining is still scary? It's about to get scarier.
    Just kidding (kind of)

    Remember, don't use intermediary variables

    ☑️ Let's chain split, filter, and join
        >> 1. Create a string variable -- var coach = "aaron"
        >> 2. SPLIT the "coach" variable using "" (empty space)
        >> 3. FILTER out the "a" characters
        >> 4. JOIN the result back into a string, using "" (empty space)

    ☑️ Let's chain together map and reduce on "nums"
        >> 1. MAP nums to create a new array, with triple each number
        >> 2. REDUCE to add the numbers (re use your reduce code here)
*/

 /*
            Ready to write some DOM code?

            PART I:
            Let's start simple, 
                1. USING JAVASCRIPT, create a <div> element
                2. add the "container" class
                3. append as a child, to the body

            Let's fill that container
                1. USING JAVASCRIPT create 3 <p> elements
                2. fill them with the text...
                    [1] "Yesterday was good" [2] "Today is great" [3] "Tomorrow will be better"
                3. append them as children, to the "container" above

            Now, REFACTOR (update) the code above to use forEach on this array of strings:
                var copy = ["Yesterday was good", "Today is great", "Tomorrow will be better"];
*/
var container = document.createElement("div");
container.classList.add("container");
document.body.appendChild(container);
container.style.backgroundColor = "red";
container.style.height = "100px";

var copy = [
        "Yesterday was good",
        "Today is great",
        "Tomorrow will be better",
];

      copy.forEach(function (copyItem) {
        var pItem = document.createElement("p");
        pItem.innerHTML = copyItem;
        container.appendChild(pItem);
      }
        /*
            PART II:
            Start by creating another element
                1. create a button element
                2. set its text to be "enable dark mode"
                3. set style: 15px padding, no border, "black" background, "white" (text) color -- CAN YOU DO THIS WITH A LOOP?
                4. append as a child, to the "container" class div
        */

                  /*  
            Ready to write an event listener?
                1. add a click event listener to the black button
                2. inside the 'click' function, write code that...
                    - changes the background color of the html "body" to "black"
                    then, 
                    - change the background of ".container" to "#777" and color to white
                    - change the button text to black, and the background to white
         */

         /*
            BONUS (CHALLENGING): 
            Once dark mode is enabled, can you write code to switch it back to light mode?
                HINT #1: create a boolean variable that indicates whether dark mode is active
                HINT #2: use this for an if statement inside your event listener
                HINT #3: change the button text as well, depending on the state
        */
copy.forEach(function (copyItem) {
        var pItem = document.createElement("p");
        pItem.innerHTML = copyItem;
        container.appendChild(pItem);
      });

      var btn = document.createElement("div");
      btn.innerText = "enable dark mode";
      /*btn.style.cssText =
        "background-color:black;color:white;width:115px;pointer:cursor";
      */
      var styles = {
        padding: "15px",
        border: "none",
        background: "black",
        color: "white",
        width: "115px",
      };
      for (var key in styles) {
        btn.style[key] = styles[key];
      }
      container.appendChild(btn);

      btn.addEventListener("click", function () {
        if (darkmodeIsActive) {
          document.body.style.backgroundColor = "white";
          container.style.cssText = "background-color:red;color:white";
          btn.style.cssText =
            "background-color:black;color:white;padding:15px;width:115px;cursor:pointer";
          btn.innerText = "enable dark mode";
          darkmodeIsActive = false;
        } else {
          document.body.style.backgroundColor = "black";
          container.style.cssText =
            "background-color:#777;color:white;cursor:pointer";
          btn.style.cssText =
            "color:black;background-color:white;padding:15px;width:120px";
          btn.innerText = "disable dark mode";
          darkmodeIsActive = true;
        }
      });

