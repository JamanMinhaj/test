// let userName = "Minhaj";

// let income = 50000;

// let expense = 30000;
// console.log(userName);
// console.log(income);
// console.log(expense);


// var num = 20;
// console.log(typeof(num));

// var num = 20;
// num = toString(num);
// console.log(typeof(num));

// var num = "20.2";
// console.log(num);

// num = parseFloat(num);
// console.log(num);


// var num = 2.5679;

// console.log(num);

// num = num.toPrecision(1);

// console.log(num);

// console.log(Number('12.2'));

// String 

// var text = prompt("Let me know where you from"); 

// console.log(text.length);
 
// var text = 'Bangladesh';

// var text2 = text.charAt(0)

// console.log(text2);

// var text = 'bangladesh';
// var text3 = ' is my favorite country'
// var text2 = text.toUpperCase();
// console.log(text2);

// var text4 = text.concat(text3);
// console.log(text4);
  

// var text = 'Bangladesh is a beautyful country'

// var text2 = text.slice(0,10);
// console.log(text2);

// toString
// toUpperCase
// toLowerCase
// Slice
// toFixed
// toPrecisioes
// charAt
// parseInt
// parseFloat
// Number

// var userInput = prompt("Enter your first name")

// var userInput2 = prompt("Enter your last name")

// var fullName = userInput + ' '+ userInput2;

// var lengthOfFullName = fullName.length;
// console.log(fullName.toUpperCase() , + lengthOfFullName);

// var positionFind = fullName.charAt(3);
// console.log(positionFind);


// const tracker = 'Personal Budget Tracker';

// const userName = "Md Minhaj";

// const income = "$ 3750.25";

// const expense = 2580.5;

// const result = tracker + <br/> +
// userName + income + expense
// console.log(result);


// Arithmetic & assignment Operator

// + - * / > < %
// <= >= -= += /= *= ** **= /= ++ -- 


// var x = 5;
// x *= 4;
// console.log(x);


// let x = 20;
// let y = 30;

// let z = x % y;

// console.log(z);



// Making own Calculator

// let num1 = 20;

// let num2 = 30;

// let sum = num1 + num2;

// let sub = num1 - num2;

// console.log("Sum = " + sum);
// console.log("Sub = " + sub);


// let num1 = parseFloat(prompt("Enter First Number : "));

// let num2 = parseFloat(prompt("Enter Second Number : "));

// let sum, sub;

// sum = num1 + num2;

// console.log(`${num1} + ${num2} = ${sum}`);

// sub = num1 - num2;

// console.log(`${num1} - ${num2} = ${sub}`);

// let userValue1 = parseFloat(prompt("Enter First Number"));

// let userValue2 = parseFloat(prompt("Enter Second Number"));

// let add, sub, mul, divi, modu;

// add = userValue1 + userValue2;
// console.log(`${userValue1} + ${userValue2} = ${add}`);

// sub = userValue1 - userValue2;
// console.log(`${userValue1} - ${userValue2} = ${sub}`);

// mul = userValue1 * userValue2;
// console.log(`${userValue1} * ${userValue2} = ${mul}`);

// divi = userValue1 / userValue2;
// console.log(`${userValue1} / ${userValue2} = ${divi}`);

// modu = userValue1 % userValue2;
// console.log(`${userValue1} % ${userValue2} = ${modu}`);


// Area & Shape


// var base = prompt("Enter Base = ");
// var height = prompt("Enter Height = ");

// var area = base*height;

// console.log("Area = " + area);

// Relational & Logical Operator

// let fineVowel = prompt("Enter a word so that I find if it's a vowel");

// fineVowel = fineVowel.toLowerCase();

// if(fineVowel == "a" || fineVowel == "e" || fineVowel == "i" || fineVowel == "o" || fineVowel == "u"){
//     console.log(`you Wrote ${fineVowel} & it's a vowel`);
// }else{
//     console.log(`you Wrote ${fineVowel} & it's a Consonant`);
// }

// let totalIncome = 2000;

// let totalExpense = 3000;

// let texOnIncome = totalIncome * 0.10;
 
// let remainingBalance = (totalIncome - texOnIncome) - totalExpense;
// console.log(remainingBalance);

// if(remainingBalance <= totalIncome){
//     alert("Red Alert");
// }else {
//     console.log("Exelent Saving");
// }


// const movie = {
//     title: "title",
//     director: "Md Minhaj",
//     ratings: [4.5, 5, 4, 5, 3.5],
//     getAverageRating: function(){
//         let avgT = this.ratings[0] + this.ratings[1] + this.ratings[2] + this.ratings[3] + this.ratings[4];
//         let finalAvg = avgT / this.ratings.length;
//         return finalAvg;

//     },
//     ge tDetails: function() {
//         return `"Inception directed by Christopher Nolan has an average rating of ${this.getAverageRating()}`
//     }
// }
// console.log(movie.getAverageRating());

// console.log(movie.getDetails());

// console.log("hello");



// let number = prompt("write a numbar");

// if(number < 0) {
//     console.log('Negative');
// }else {
//     console.log('Possitive');
// }
// let check = number > 0 ? "positive" : "Negative";
// console.log(check);

const student = {
    herName: "Amina",
    courses: [
        { courseName: "Math", score: 85 },
        { courseName: "English", score: 78 },
        { courseName: "Science", score: 92 }
    ],
    getHighestScore: function() {
        if(this.courses[0] >= this.courses[1] && this.courses[1] >= this.courses[2]) {
            return this.courses[0];
        }else if(this.courses[1] >= this.courses[0] && this.courses[1] >= this.courses[2]){
            return this.courses[1]
        }else {
            return this.courses[2]
        }
    },
    getSummary: function() {
        let topCourse = this.getHighestScore();
        return `${this.herName}'s highest score is ${this.topCourse.score} in ${topCourse.courseName}`
    }
}
console.log(student.getHighestScore());

console.log(student.getSummary());

