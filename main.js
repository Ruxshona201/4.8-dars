// let user = {
//     age:25,
//     walk: function () {
//         console.log("I'm walking...");
//     },
// }
// user.age(); 

// console.log(Math);
// yaxlitlash uchun 4.5 = 5

// Math.floor();
// Math.round();
// Math.ceil();
// Math.trunc();
// Math.random();
// Math.sqrt(100);
// Math.max();
// Math.min();

// let x = Math.floor(1.9);
// console.log(x);
// let x = Math.round(3.7);
// console.log(x);
// let x = Math.ceil(1.1);
// console.log(x);
// let x = Math.trunc(1.4);
// console.log(x);

// function ownFloor(x) {
//     const num = (x * 10) % 10;
//  x = (x * 10 - num) / 10;
//  return x;
// }
// console.log(ownFloor(2.9));

// // 1.
// function sqrt (x) {
//   return x ** 1/2;
// }

// const number = parseInt(prompt('Enter an integer: '));
// const range = parseInt(prompt('Enter a range: '));
// for(let i = 1; i <= range; i++) {
//     const result = i * number;
//     console.log(`${number} x ${i} = ${result}`);
// }

// console.log("1 x 7 = 7\n2 x 7 = 14\n3 x 7 = 21\n4 x 7 = 28");

// let karra = "";
// for(let i = 1; 1 < 10; i++) {
//     karra += i + "x 7 =" + i * 7 + "\n";
// }
// console.log(karra);


// Uyga vazifa
// program where the user has to guess a number generated by a program

function guessNumber() {
    const random = Math.floor(Math.random() * 10) + 1;
    let number = parseInt(prompt('Guess a number from 1 to 30: '));
    if(number < random) {
        alert("was a smaller guess");
    } else if(number > random) {
        alert("was a bigger guess")
    }
    while(number !== random) {
        number = parseInt(prompt('Guess a number from 1 to 30: '));
    }

    // check if the guess is correct
    if(number == random) {
        console.log("You guessed the correct number.");
  }
}
// call the function
guessNumber();
