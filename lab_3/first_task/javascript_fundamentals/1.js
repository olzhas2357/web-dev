// alert('Hello')
// [1, 2].forEach(alert)
//
// (function (){
//     'use strict';
// })()
//
// let admin, name;
// name = "John";
// admin = name;
// alert( admin );
//
// const BIRTHDAY = '18.04.1982'; // make birthday uppercase?
//
// const AGE = someCode(BIRTHDAY); // make age uppercase?
//
// let name = "Ilya";
//
// alert( `hello ${1}` ); // hello 1
//
// alert( `hello ${"name"}` ); // hello name
//
// alert( `hello ${name}` ); // hello Ilya
//
// let age = prompt('How old are you?', 100);
// alert(`You are ${age} years old!`); //
//
// let name = prompt("What is your name?", "");
// alert(name);
//
//
// "" + 1 + 0 = "10" // (1)
// "" - 1 + 0 = -1 // (2)
// true + false = 1
// 6 / "3" = 2
// "2" * "3" = 6
// 4 + 5 + "px" = "9px"
// "$" + 4 + 5 = "$45"
// "4" - 2 = 2
// "4px" - 2 = NaN
// "  -9  " + 5 = "  -9  5" // (3)
// "  -9  " - 5 = -14 // (4)
// null + 1 = 1 // (5)
// undefined + 1 = NaN // (6)
// " \t \n" - 2 = -2 // (7)
//
// let a = "1"; // prompt("First number?", 1);
// let b = "2"; // prompt("Second number?", 2);
//
// alert(a + b); // 12
//
// let a = +prompt("First number?", 1);
// let b = +prompt("Second number?", 2);
//
// alert(a + b); // 3
//
// let a = prompt("First number?", 1);
// let b = prompt("Second number?", 2);
//
// alert(+a + +b); // 3
//
// 5 > 4 → true
// "apple" > "pineapple" → false
// "2" > "12" → true
// undefined == null → true
// undefined === null → false
// null == "\n0\n" → false
// null === +"\n0\n" → false
//
// let year = prompt('In which year was ECMAScript-2015 specification published?', '');
// if (year == 2015) alert( 'You are right!' );
//
// let year = prompt('In which year was the ECMAScript-2015 specification published?', '');
//
// if (year < 2015) {
//     alert( 'Too early...' );
// } else if (year > 2015) {
//     alert( 'Too late' );
// } else {
//     alert( 'Exactly!' );
//
// let accessAllowed;
// let age = prompt('How old are you?', '');
//
// if (age > 18) {
//     accessAllowed = true;
// } else {
//     accessAllowed = false;
// }
//
// alert(accessAllowed)
//
// let value = prompt('Type a number', 0);
//
// if (value > 0) {
//     alert( 1 );
// } else if (value < 0) {
//     alert( -1 );
// } else {
//     alert( 0 );
// }
//
//
//
// let value = prompt('What is the "official" name of JavaScript?', '');
//
// if (value == 'ECMAScript') {
//     alert('Right!');
// } else {
//     alert("You don't know? ECMAScript!");
// }
//
// let result;
//
// if (a + b < 4) {
//     result = 'Below';
// } else {
//     result = 'Over';
// }
//
// let login;
//
// let message = (login == 'Employee') ? 'Hello' :
//     (login == 'Director') ? 'Greetings' :
//         (login == '') ? 'No login' :
//             '';
//
// alert(message)
//
//
// let userName = prompt("Who's there?", '');
//
// if (userName === 'Admin') {
//
//     let pass = prompt('Password?', '');
//
//     if (pass === 'TheMaster') {
//         alert( 'Welcome!' );
//     } else if (pass === '' || pass === null) {
//         alert( 'Canceled' );
//     } else {
//         alert( 'Wrong password' );
//     }
//
// } else if (userName === '' || userName === null) {
//     alert( 'Canceled' );
// } else {
//     alert( "I don't know you" );
// }
//
// let i = 3;
// while (i) { // when i becomes 0, the condition becomes falsy, and the loop stops
//     alert( i );
//     i--;
// }
//
// let i = 3;
//
// alert(i--); // shows 3, decreases i to 2
//
// alert(i--) // shows 2, decreases i to 1
//
// alert(i--) // shows 1, decreases i to 0
//
// // done, while(i) check stops the loop
//
// let i = 0;
// while (++i < 5) alert( i );
//
// let i = 0;
// while (i++ < 5) alert( i );
//
// let num;
//
// do {
//     num = prompt("Enter a number greater than 100?", 0);
// } while (num <= 100 && num);
//
//
// let n = 10;
//
// nextPrime:
//     for (let i = 2; i <= n; i++) { // for each i...
//
//         for (let j = 2; j < i; j++) { // look for a divisor..
//             if (i % j == 0) continue nextPrime; // not a prime, go next i
//         }
//
//         alert( i ); // a prime
//     }
//
// let a = +prompt('a?', '');
//
// switch (a) {
//     case 0:
//         alert( 0 );
//         break;
//
//     case 1:
//         alert( 1 );
//         break;
//
//     case 2:
//     case 3:
//         alert( '2,3' );
//         break;
// }
//
// function showMessage() {
//     alert( 'Hello everyone!' );
// }
//
// showMessage();
// showMessage();
//
//
// function min(a, b) {
//     return a < b ? a : b;
// }alert(min(4,5));
//
//
// function pow(x, n) {
//     let result = x;
//
//     for (let i = 1; i < n; i++) {
//         result *= x;
//     }
//
//     return result;
// }
//
// let x = prompt("x?", '');
// let n = prompt("n?", '');
//
// if (n < 1) {
//     alert(`Power ${n} is not supported, use a positive integer`);
// } else {
//     alert( pow(x, n) );
// }
//
// let age = prompt("What is your age?", 18);
//
// let welcome;
//
// if (age < 18) {
//
//     welcome = function() {
//         alert("Hello!");
//     };
//
// } else {
//
//     welcome = function() {
//         alert("Greetings!");
//     };
//
// }
//
// welcome(); // ok now
//
// let sum = (a, b) => {  // the curly brace opens a multiline function
//     let result = a + b;
//     return result; // if we use curly braces, then we need an explicit "return"
// };
//
// alert( sum(1, 2) ); // 3
//
//
// function ask(question, yes, no) {
//     if (confirm(question)) yes();
//     else no();
// }
//
// ask(
//     "Do you agree?",
//     () => alert("You agreed."),
//     () => alert("You canceled the execution.")
// );
//
// let userName = prompt("Your name?", "Alice");
// let isTeaWanted = confirm("Do you want some tea?");
//
// alert( "Visitor: " + userName ); // Alice
// alert( "Tea wanted: " + isTeaWanted ); // true


function showPrimes(n) {
    nextPrime:
        for (let i = 2; i < n; i++) {

            // check if i is a prime number
            for (let j = 2; j < i; j++) {
                if (i % j == 0) continue nextPrime;
            }

            alert(i);
        }
}

showPrimes(11)