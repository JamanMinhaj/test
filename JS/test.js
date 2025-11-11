// console.log('hello');

// String Data type

// Number Data type

// Boolean Data type

// document.write("Minhaj <br/>"); 
// document.write("Minhaj <br/>");

// document.write("This is an example line");



/*
  Variables
*/

// const x = 20;
// const y = 20;
// let total = x + y;
// console.log(total);
// let person = "minhaj";

// let x = "2"+2+2;
// console.log(x);

// let y = 2+2+"2";
// console.log(y);

// {

//     let a = 20;
//     console.log(a);
//     a = 30;
//     let b = 30;
//     console.log(a);
    
// }

// c = 2.2;
// var c;
// console.log(c);


// const arr = ["BMW","AUDI"];
// arr[0] = "bmw";
// console.log(arr);

// const obj = {
//     fullName : "Minhaj",
//     age : 30,
//     from: "Bangladesh"
// }
// obj.fullName = "sajj";
// console.log(obj);

// JS Operators

 // = + * > - / =+ =- =* =/ 

//  let a = 1;
//  let b = 2
//  let c = a < b;
//  console.log(c);

// let a = 2;
// let b = a + 3;

// console.log(b);
// = means x=y;
// += means x = x+y;
// -= means x = x-y;
// *= means x = x*y;
// /= means x = x/y;
// %= means x = x%y;
// **= means x = x**y;




// JS Comparision Operators

// == equal to
// === equal value & equal type
// != not equal to
// !== not equal to value & not equal to type
// > greater than
// < less than
// >= greater than or equal to
// <= less than or equal to

// ? ternary Operator


// let a = "5";
// let b = "10";
// let res = a < b;
// console.log(res);
// let txt = "What a very ";
// txt += "nice day";
// console.log(txt); 

// let a = 2;
// let b = 3;
// console.log(c);


// Js Logical operators

// && logical and 
// || logical or
// ! logical not


// let x = 3.5;
// let y = 1;
// let z = x % y;

// console.log(z);

// let x = 20;
// let y = 7.2;
// let z = x % y;
// console.log(z);


// Js Data Types

// String 
// Number
// Bigint
// Boolean
// Undefined
// Null
// Symbol
// Object



// let str1 = 16 + 2 + "str";// 18str
// console.log(str1);

// let str2 = "str" + 2 + 2;// str22
// console.log(str2);

// let sentence = "This is 'a' single quotes string";

// let sentence2 = 'this is a "a"'

// const cars = ["bmw","audi","toyota"];
// const obj = {
//     fullName : "Md Haque",
//     age : 20,
//     place : Bangladeh
// };


// JS Function


//  let myFunction = function myFunction (a,b) {
//     return a+b;
//  }
//  console.log(myFunction(2,2));
 
// let x = myFunction(3,3);

// function myFunction(a,b){
//     return a*b;
// }
// console.log(`Result of Function is ${x}`);
// function myFunction(){
//     let car = "Volvo";
//     return car;
// }
// console.log(myFunction());

// function calcArea (length,width){

//     return length * width;
// }
// console.log(calcArea(3,5));


// function userName(name){
//     console.log(`Hello  ${name} 💛 for you`);
// }
// userName('Minhaj');
// userName('Sajj');
// userName('Moni');

// function multiplyedByTwo(a){
//     return a*2;
// }
// let result = multiplyedByTwo(2);
// console.log(result);

// function findDivisionLastNumber(a){
//     return a % 2;
// }
// let result = findDivisionLastNumber(15);
// console.log(result);

//   

// function functionName() {
//     console.log("Hello Function");
// }
// functionName();

// function callName(name,age = 50) {
//     console.log(`Name is ${name} I'm ${age} years old`);
    
// }
// callName("Minhaj",20);
// callName("Moni");

// function isSent(){
//     console.log('Request is sent');
// }
// document.querySelector('button').addEventListener('click',isSent);

// (function(message){ 
//     console.log('I am self invoking function',message);
// })('hello');  

// (function(x,y){
    
// })(2,2);

// function substraction(a,b) {
//     return a-b;
// }
// let result = substraction(10,5);
// console.log(result);

// function substraction(){
//     let a = 30;
//     let b = 20;
//     console.log(a - b);
// }
// document.querySelector('button').addEventListener('click',substraction); 


// let testFunction = function(a,b) {
//     return a + b;
// }
// console.log(testFunction(20,20));


// let numbers = [2, 5, 6, 8, 10];

// let sqNumbers = numbers.map(function(number){
//     return number*number;
// });
// console.log(sqNumbers);

// let arr = [2, 4, 5, 7];

// let sqNumbers = arr.map(arr => arr*arr);
// console.log(sqNumbers);

// let add = (x,y) => x + y;
// console.log(add(3,2));

// let add = (a,b) => a*b;
// console.log(add(3,3));

// nested function

// function greet(name) {
//     function sayHello(){
//         alert('Hello' + name);
//     }
//     return sayHello();
// }
// greet('Minhaj');

// function findEvenOdd(x){
//     if(x % 2 === 0){
//         return console.log(`Number ${x} is an Even Number`);
//     }else{
//         return console.log(`Number ${x} is an Odd Number`);
//     }
// }
// findEvenOdd(10);

// function maxNumber(a,b,c) {
//   if(a >= b && a >= c){
//     return console.log(`${a} is max Number`);
//   }else if(b >= a && b >= c){
//     return console.log(`${b} is max Number`);
//   }else {
//     return console.log(`${c} is max Number`);
//   }
// }
// maxNumber(20,30,40);

// function checkSign(a,b,c) {
//   if(a < 0){
//     return a;
//   }else if (b > a) {
//     return b;
//   }else {
//     return c;
//   }
// }
// let result = checkSign(20,30,0);
// console.log(result);

// function evenOdd(num) {
//   if(num % 2 === 0){
//     return console.log(`${num} is an Even Number`);
//   }else {
//     return console.log(`${num} is an Odd Number`);
//   }
// }
// evenOdd(4);


// function findBig(a,b,c) {
//   if(a > b && a > c){
//     return console.log(`${a} is the big number than ${c} ${b}`);
//   }else if(b > a && b > c){
//     return console.log(`${b} is the big number than ${a} ${c}`);
//   }else {
//     return console.log(`${c} is the big number than ${a} ${b}`);
//   }
// }
// findBig(20,30,40);


// const car = {
//   type:"Fiat",
//   color: "white",
//   model: "500",
// }


// JS Objects

// const person = {
//   fitstName: "Minhaj",
//   lastName: "Mazumder",
//   age: 30,
//   eyeColor: "Light Brown"
// }
// console.log(person);

// Create an Empty js Object

// function callPerson() {
  
// const person2 = {}
// person2.age = 50;
// person2.firstName = "Minhaj ";
// person2.lastName = "Mazumder";
// person2.eyeColor = " Light Brown";



//  let findPerson = document.getElementById('person').innerHTML = person2.firstName + person2.lastName + ' age ' + person2.age + person2.eyeColor;

// (function(a,b){
//   return a+b;
// })();

// const obj = {
//   fullName: "Md Minhaj",
//   from: "Bangladesh",
//   Current: "Saudi Arabia",
//   watchFor: function() {
//     return this.fullName +' from ' + this.from
    
//   }
// }
// document.getElementById('person').innerHTML = obj.watchFor(obj.fullName);

// document.getElementById('person2').innerHTML = obj.watchFor('Md Sazzad');

// let access = obj.fullName;
// console.log(access);
// let access_2 = obj['Current'];
// console.log(access_2);


// const book = {
//   title: 'The Alchemist by Paulo Coelho has 208 pages',
//   author: 'Md Minhaj',
//   page: 540,
//   summary: function(){
//     return this.title;
//   }
// }

// console.log(book.summary());


// const student = {
//   fullName: "Md Minhaj",
//   age: 30,
//   grades: [85, 90, 78, 92],
//   getAverage: function(){
//     const total = this.grades[0] + this.grades[1] + this.grades[2] + this.grades[3];
//     const average = total / 4;
//     return average;
//   }
// }
// console.log(student.getAverage());
  

// const obj = {
//   fullName: "Md Minhaj",
//   age: 30
// }
// const x = obj;
// x.age = 20;
// x.fullName = "Md Sazzad";
// x.from = "Bangladesh";
// console.log(obj);

// console.log(obj);

// delete obj.age;
// console.log(obj);


// const myObj = {
//   fullName: "Md Minhaj",
//   him: {
//     fullName: "Sazzad"
//   }
// }
// console.log(myObj.him.fullName);
// console.log(myObj["him"]["fullName"]);


// JS Object Methods

// const person = {
//   personName: "MD Minhaj",
//   age: 30,
//   from: "Bangladesh",
//   fullName: function() {
//     return this.firstName + " " + this.lastName;
//   }
// }
// delete person.fullName;
// let text = "";
// for(let x in person){
//   text += person[x] + " " + "<br/>";
// }
// document.querySelector('#person').innerHTML = text;

// const person = {
//   familyName: "Md",
//   surName: "Minhaj",
//   age: 30,
//   from: "Bangladesh",
//   fullName: function() {
//     return this.familyName + this.surName;
//   }
// }

// document.querySelector('#person').innerHTML = person.familyName + " " + person.surName;
// delete person.fullName;
// let text = "";

// for(let x in person) {
//   text += person[x];
// }
// document.querySelector('#person').innerHTML = text;

// document.querySelector('#person').innerHTML = Object.values(person);

// const fruits = {
//   Banana: 300,
//   Ornages: 200,
//   Apple: 500
// }

// let text = "";

// for(let [fruit, value] of Object.entries(fruits)){
//   text += fruit + ": " + value + "<br/>";
// }

// const myArray = JSON.stringify(fruits);

// document.querySelector('#fruits').innerHTML = myArray;

// alert("hello");


// Objects Constructor function

// function Person(first, last, age, eye) {
//   this.firstName = first;
//   this.lastName = last;
//   this.age = age;
//   this.eye = eye;
// }
// let x = person();
// console.log(x);

// const person1 = {
//   fullName: function() {
//     return this.firstName + " " + this.lastName;
//   }
// }
// const person2 = {
//   firstName: "Md",
//   lastName: "Minhaj"

// }
// let x = person1.fullName.bind(person2);
// console.log(person1.fullName());

// function Person(first, last, age, eye) {
//   this.firstName = first;
//   this.lastName = last;
//   this.age = age;
//   this.eye = eye;
// }
// Person.prototype.nationality = this.nationality;
// const myFather = new Person ("Md","Mizanur Rahman",55,"light gray");
// myFather.nationality = "Bangladesh"

// const myBrother = new Person("Md","Abdullah",24, "black", "Saudi Arabia");


// console.log(myBrother);
// console.log(myFather);

// function Person(first, last, age, nationality) {
//   this.fistName = first;
//   this.lastName = last;
//   this.age = age;
//   this.nationality = nationality;
// }

// const newObj = new Person('MD', "MINHAJ", 30, "Bangladesh");
// console.log(newObj);

// const monirObj = new Person("Md", "Monir", 25, "Bangladesh");
// console.log(monirObj);


// function Book(title, author, yrPub) {
//   this.title = title;
//   this.author = author,
//   this.yearPublished = yrPub;
// }
// Book.prototype.getSummery = function() {
//   return `${this.title} by ${this.author}, published in ${this.yrPub}`
// }

// const newBook = new Book('Title', 'MONIR', 1920, 'isBestSeller');
// newBook.isBestSeller = true;
// const newBook2 = new Book('Title--3', 'Sazzad', 2000);


// function Constructor (first, last, age, eyeColor) {
//   this.firstName = first;
//   this.lastName = last;
//   this.age = age;
//   this.eyeColor = eyeColor;
//   this.fullName = function() {
//     return this.firstName + " " + this.lastName;
//   };
// }

// const obj = new Constructor("MD", "MINHAJ", 30, "LightBlack");
// console.log(obj + 'fullName:' + obj.fullName());



// JS Events

// onclick
// onload
// onmouseover
// onmouseout

// JS String


// const arr = ["this is an array"];
// arr[0] = "T";
// console.log(arr);

// x[0] = "A"
// console.log(x);
// console.log(x.length);
// console.log(x.charAt(1));
// console.log(x.charCodeAt(0));
// console.log(x.at(-2));

// console.log(x.slice(0,8));

// const x = "Sentence and new";
// const y = "This is y";

// // console.log(y.repeat(50));

// const z = x.concat(" ",y);

// console.log(z);

// console.log(x.substring(2,3));

// console.log(x.toUpperCase());

// console.log(x.toLowerCase());
// console.log(y.replace("This is z"));


// let x = "hello";

// let result = x.split("");
// x = "";
// for(let i = 0; i < result.length; i++) {
//   x += result[i]
// }


// console.log(x);

// function takeWord(input) {
//   let words = input.trim().split(/\s+/);
//   return words.length;

// }

// let sentence = "Javascript is super fun";
// console.log(takeWord(sentence));

let text = "please help to locate where is help occurs!";

// let index = text.indexOf("h");
// console.log(index);

// let text2 = text.lastIndexOf("help",37);
// console.log(text2);

// let message = "Error: file not found. Error: system failure. Error: unknown issue.";

// let change = message.replaceAll("Error","Warning");
// console.log(change);

// let sentence = "She said she will go where she wants, because she can.";
// console.log(sentence.lastIndexOf("She",4));

// let text3 = "item1, item2, item3, item4, finalItem";

// console.log(text3.lastIndexOf(",",10));// ans is 5

// let sentence = "This is a sentence A";

// console.log(sentence.search("a"));

// console.log(sentence.indexOf("a",));

// console.log(sentence.matchAll(/a/gi));

// console.log(sentence.includes("this"));


// const prices = [20, 30, 40, 50, 60];

// let sum = 0;

// for(let i = 0; i < prices.length; i++){
//   let offer = prices[i] / 5;
//   prices[i] -= offer;
// }
// console.log(prices);

// let i = 0;
// for(let val of prices){
//   console.log(val);
//   let offer = val / 5;
//   prices[i] -= offer;
//   i++;
// }
// console.log(prices);

// let animals = ["cat", "dog", "elephant"];

// animals.forEach(function(animals){
//   console.log(animals.toUpperCase());
// });


// let nums = [1, 2, 3, 4, 5];

// let doubled = nums.map(n => n * 2); // [2, 4, 6, 8, 10]
// console.log(doubled);
// let even = nums.filter(n => n % 2 === 0); // [2, 4]
// let total = nums.reduce((sum, n) => sum + n, 0); // 15
// let found = nums.find(n => n > 3); // 4
// let hasThree = nums.includes(3); // true

// nums.forEach((num)=> {
//   let result = num*2;
//   console.log(result);
// });

// let check = nums.filter(num => num % 2 === 0);
// console.log(check);

// let check = nums.map((num) => num * 2);
// console.log(check);

// todos

// let todos = [];

// function addTask (task){
//   todos.push(task);
//   console.log("Task");
// }

// let items = ["item_one", "item_two", "item_three"];

// let result = items.filter(aa => aa.toLowerCase())


// let grades = [40, 20, 60, 66, 90, 100];

// function passMark(mark){
//   let result = grades.filter((mark) => )
// }

// let color = ["Red", "Green", "Yellow"]
// console.log(color[0],color[2]);
// color.push("Gray");
// console.log(color);
// color.shift();
// console.log(color);

// let fruits = ["Banana", "Apple", "Kiwi"]

// for(let i = 0; i < fruits.length; i++){
//   console.log(fruits[i]);
// }

// for(let x of fruits){
//   console.log(x);
// }

// fruits.forEach(function(x){
//   console.log(x);
// })
// fruits.forEach(x => 
// {console.log(x)}
// );
// let prices = [10, 20, 30];

// let reduce = prices.map(x => x-5 );

// console.log(reduce);

// const users = [
//   { name: "Alice", age: 25 },
//   { name: "Amin", age: 17 },
//   { name: "Arif", age: 30 }
// ];

// const adult = users.filter(x => x.name.startsWith("A") );
// console.log(adult);

// let reduce = prices.map(function(val){
//   return val - 5;
// });
// console.log(reduce);

// for(let animal of animals){
//   console.log(animal);
// }
// for(let i = 0; i < animals.length; i++){
//   console.log(animals[i]);
// }
// animals.forEach(function(x){
//   console.log(x);
// })
// animals.forEach((x) => {
//   console.log(x);
// });

// const students = [
//   { name: "Alice", score: 85, passed: true },
//   { name: "Bob", score: 42, passed: false },
//   { name: "Charlie", score: 91, passed: true },
//   { name: "Diana", score: 68, passed: true },
//   { name: "Evan", score: 35, passed: false }
// ];

// for(let i = 0; i < students.length; i++) {
//   if(students[i].passed === true){
//     console.log(`Congratulation ${students[i].name} you passed you score ${students[i].score}`);
//   }
// }

// let result = students
// .filter(x => x.passed)
// .map(x => `Congratulation ${x.name} you passed. your score is ${x.score}`);

// console.log(result);
// let faildStu = students.filter(student => !student.passed);
// console.log(faildStu);

// const students = [
//   { name: "Alice", score: 85 },
//   { name: "Bob", score: 42 },
//   { name: "Charlie", score: 91 },
//   { name: "Diana", score: 68 },
//   { name: "Evan", score: 35 }
// ];
// let updateStu = students.map(stu => {
//   return {
//     stu,
//     passed: stu.score >= 50
//   }
// });

// console.log(updateStu);

// let higherMark = students.filter(x => x.score >= 80);
// console.log(higherMark);

// const passedStudents = students.filter(student => student.passed);
// console.log(passedStudents);
// const failedStudents = students.filter(student => !student.passed);
// console.log(failedStudents);

// let passedStu = students.filter(student => student.passed);
// console.log(passedStu); 

// let failedStu = students.filter(student => !student.passed);
// console.log(failedStu);

// const updatedStudents = students.map(student => {
//   return {
//     student, // keep name and score
//     passed: student.score >= 50
//   };
// });

// console.log(updatedStudents);

// let highScore = students
// .filter(stu => stu.score >= 80)
// .map(stu => `Top Scorer ${stu.name} ${stu.score}`);
// console.log(highScore);

// const people = [
//   { name: "Alex", age: 30 },
//   { name: "Benjamin", age: 22 },
//   { name: "Christine", age: 28 },
//   { name: "Dan", age: 19 }
// ];

// let findBigName = people
// .filter(bigName => bigName.name.length > 5)
// .map(bigName => bigName.name.toUpperCase());
// console.log(findBigName);

// const users = [
//   { name: "Ava" },
//   { name: "Noah" },
//   { name: "Liam" },
//   { name: "Liams" },
//   { name: "Liamv" }
// ];

// let addingId = users.map((users, index) => {
//   return {
//     users,
//     id: index + 1
//   }
// });
// console.log(addingId);

// const people = [
//   { name: "Sam", age: 17 },
//   { name: "Lily", age: 22 },
//   { name: "John", age: 16 },
//   { name: "Ella", age: 30 }
// ];

// let adults = people
// .filter(adlt => adlt.age >= 18)
// .map(adlt => `${adlt.name} is ${adlt.age} years old`)
// console.log(adults);

// const players = [
//   { name: "Kai", score: 20, active: true },
//   { name: "Jin", score: 14, active: false },
//   { name: "Nia", score: 32, active: true }
// ];

// let activePlayers = players
// .filter(plyr => plyr.active)
// .map(plyr => `${plyr.name} score: ${plyr.score*2}`);
// console.log(activePlayers);

// const students = [
//   { name: "Ava", score: 88 },
//   { name: "Ben", score: 45 },
//   { name: "Cara", score: 73 },
//   { name: "Dan", score: 59 },
//   { name: "Ella", score: 91 },
//   { name: "Finn", score: 33 }
// ];

// let report = students
// .filter(student => student.score >= 60)
// .map((student) => `Congrats ${student.name}! You passed with ${student.score}.`);

// console.log(report);

//* Task #1

// const students = [
//   { name: "Liam", grade: 92 },
//   { name: "Olivia", grade: 78 },
//   { name: "Noah", grade: 85 },
//   { name: "Emma", grade: 98 },
//   { name: "Ava", grade: 60 }
// ];

// let rollStu = students
// .filter((student => student.grade >= 90))
// .map(student => `${student.name} made the honor roll with a ${student.grade}!`);
// console.log(rollStu);

// const users = [
//   { username: "tony", email: "tony@example.com" },
//   { username: "bruce" },
//   { username: "natasha", email: "natasha@example.com" },
//   { username: "steve" }
// ];

// let incompletePro = users 
// .filter((user) => !user.email)
// .map((user) => `User ${user.username} has no email on file.`);
// console.log(incompletePro);

// const customers = [
//   { name: "Alice", active: true, tier: "gold" },
//   { name: "Bob", active: false, tier: "silver" },
//   { name: "Charlie", active: true, tier: "silver" },
//   { name: "Diana", active: true, tier: "gold" }
// ];

// let  activeGoldTier = customers
// .filter((ctmr) => ctmr.active && ctmr.tier === "gold")
// .map((ctmr) => `Welcome back, ${ctmr.name} (GOLD member)!`);

// console.log(activeGoldTier);

// const users = [
//   { name: "Maya", subscribed: true, plan: "premium" },
//   { name: "Zane", subscribed: false, plan: "basic" },
//   { name: "Leo", subscribed: true, plan: "basic" },
//   { name: "Tara", subscribed: true, plan: "premium" },
//   { name: "Nico", subscribed: false, plan: "premium" }
// ];

// let activePremiums = users 
// .filter((acP) => acP.subscribed && acP.plan === "premium")
// .map((acp) => `Thanks ${acp.name}! Your premium subscription is active.`);

// console.log(activePremiums);

// const movies = [
//   { title: "Inception", rating: 8.8, watched: true, genre: "sci-fi" },
//   { title: "The Notebook", rating: 7.9, watched: false, genre: "romance" },
//   { title: "Interstellar", rating: 8.6, watched: true, genre: "sci-fi" },
//   { title: "Parasite", rating: 8.6, watched: true, genre: "thriller" },
//   { title: "Twilight", rating: 5.2, watched: false, genre: "romance" },
//   { title: "Arrival", rating: 7.9, watched: true, genre: "sci-fi" }
// ];

// let topRatingMovies = movies
// .filter((bmovi) => bmovi.watched && bmovi.rating >= 8 && bmovi.genre === "sci-fi")
// .map((bmovi) => `${bmovi.title} is a top-rated ${bmovi.genre} movie you watched!`);

// console.log(topRatingMovies);

// const movies = [
//   { title: "Inception", rating: 8.8, watched: true },
//   { title: "The Notebook", rating: 7.9, watched: false },
//   { title: "Interstellar", rating: 8.6, watched: true },
//   { title: "Parasite", rating: 8.6, watched: true },
//   { title: "Twilight", rating: 5.2, watched: false },
//   { title: "Arrival", rating: 7.9, watched: true }
// ];

// let mostWatchedMovie = movies
// .filter((wTrue) => wTrue.watched)
// .reduce((sum, wTrue) => sum + wTrue.rating , 0);

// console.log(`Total watched rating:`, mostWatchedMovie.toFixed(1

// ));

// const movies = [
//   { title: "Inception", rating: 8.8, watched: true },
//   { title: "The Notebook", rating: 7.9, watched: false },
//   { title: "Interstellar", rating: 8.6, watched: true },
//   { title: "Parasite", rating: 8.6, watched: true },
//   { title: "Twilight", rating: 5.2, watched: false },
//   { title: "Arrival", rating: 7.9, watched: true }
// ];
// let printAllTitles = movies
// .filter ((t) => t.title)
// .map((t) => {
//   return t.title;
// });
// console.log(printAllTitles);
// let count = movies
// .reduce((count, movie) => count + movie.watched,0);
// console.log(count);

// let filterWatched = movies.filter((wt) => wt.watched);

// let tRating = movies.reduce((total,wt) => total + wt.rating,0);

// let averageRating =  tRating / filterWatched.length ;

// console.log(averageRating.toFixed(1));

// const num = [10, 2, 3, 4];

// let sum = num.reduce((accu,curv) => {
//   return accu + curv;
// },0);
// console.log(sum);

// const sandwich = ["bread", "lettuce", "tomato", "ketchup", "hot sauce"];

// let ingrade = sandwich.reduce((accu,vari) => {
//   return accu + " + " + vari;
// });
// console.log(ingrade);

// let arr = [1, 2, 3, 4];

// let total = 0;

// for(let i = 0; i < arr.length; i++) {
//   total += arr[i];
// }
// console.log(total);

// let arr = [1, 2, 3, 4];

// let total = arr.reduce((prev, curr) => {
//   return prev + curr;
// },);

// console.log("Total = ",total);

// const cart = [
//   { name: 'Laptop', price: 1200, color: 'gray' },
//   { name: 'Laptop', price: 1000, color: 'white' },
//   { name: 'Mouse', price: 50 },
//   { name: 'Keyboard', price: 75 }
// ];

// let total = cart
// .filter((val)=> val.name ==="Laptop" && val.color === "gray")
// .reduce((acc, val) =>{
//  return  `${val.name} = ${acc + val.price}`
// },0);

// console.log(total);

// const fruitss = [
//   { name: 'Apple', type: 'red' },
//   { name: 'Banana', type: 'yellow' },
//   { name: 'Cherry', type: 'red' },
//   { name: 'Lemon', type: 'yellow' },
//   { name: 'Grape', type: 'purple' }
// ];

// const findType = fruitss.reduce((acc, fruit)=>{
//   const type = fruit[type];
//   acc[type] = (acc[type],0) + 1

//   return acc;
// },{});
// console.log(findType);

// const numbers = [10, 20, 30, 40];

// let sum = numbers.reduce((current, prev) => {
//   return current + prev;
// });
// console.log(sum);

// const words = ['dog', 'cat', 'elephant'];

// let totalChar = words.reduce((acc, char)=>{
//   acc[char] = (acc[char] + 1);
// },0);

// console.log(totalChar);

// const students = [
//   { name: 'Alice', score: 88 },
//   { name: 'Bob', score: 95 },
//   { name: 'Charlie', score: 72 },
//   { name: 'David', score: 99 },
//   { name: 'Eva', score: 85 }
// ];

// let highestScore = students.reduce((acc,student)=> {
//   return student.score > acc.score ? student : acc;
// });
// console.log(highestScore);

// const people = [
//   { name: 'Alice', city: 'Delhi' },
//   { name: 'Bob', city: 'Mumbai' },
//   { name: 'Charlie', city: 'Delhi' },
//   { name: 'David', city: 'Bangalore' },
//   { name: 'Eva', city: 'Mumbai' }
// ];


// 

// let x = null;

// console.log(x);

// let days = ["Saturday", "Sunday", "Monday", "Tuseday"];

// for(let val of days){
//   switch(val){
//     case "Saturday":
//       console.log("Saturday");
//       break;
//   }
// }

// let i = 1;
// do {
//   console.log(i);
//   i++;
// } while (i <= 0);

// let user = {
//   name: "Alice",
//   age: 25,
//   city: "London"
// };

// for (let key in user) {
//   console.log(key);
// }

// Print all numbers from 1 to 10 using a for loop.

// for(let i = 1; i <= 10; i++){
//   console.log(i);
// }

// Print all odd numbers from 1 to 20 using a while loop.

// let i = 1;

// while(i <= 20){
//   if(i % 2 !== 0){
//     console.log(i);
//   }
//   i++;
// }

// Loop through an array of 5 fruits and print each using for...of.

// let fruits = ["Banana", "Orange", "Apple", "Plum", "Kiwi"];

// for(let val of fruits) {
//   console.log(val);
// }

// Use for...in to print properties of an object with name, email, and age.

// const obj = {
//   name: "Minhaj",
//   email: "minhaj2md@gamil.com",
//   age: 31
// }

// for(let key in obj){
//   console.log(key + " = " + obj[key]);
// }

// let fruits = ["Apple", "Banana", "Cherry"];

// console.log(fruits.slice(1,3));

// Create an array of 5 colors. Print the first and last items. ** Done **

// Use .push() to add a new item and .pop() to remove one. ** Done **

// Check if "Blue" exists in your array using .includes().

// Loop through the array and print all values in uppercase.

// let colors = ["Black", "Blue", "Green", "red", "Yellow"]

// for(let i = 0; i < colors.length; i++){
//   console.log(colors[i].toUpperCase());
// }
// console.log(colors.map(color => color.toLowerCase()).includes("blue"));
// colors.push("Gray");
// console.log(colors);
// colors.pop();
// console.log(colors);

// console.log(`${colors[0]} & ${colors[colors.length -1]}`);



// Create an object named car with properties: brand, model, and year.

// Add a new property color and update the year.

// Print all key–value pairs using for...in.

// Use Object.keys() to list all property names.

// const car = {
//   brand: "BMW",
//   model: 555,
//   year: 2025
// }

// console.log(Object.keys(car));
// for(let val in car){
//   console.log(val + ":" + car[val]);
// }

// car["color"] = "Black";
// car["year"] = 2026;
// console.log(car);

// const student = {
//   name: "Minhaj",
//   rollNum: 20,
//   marks: [20, 39, 40],
//   isPassed: true,
// }
// console.log(student);

// let marks = student.marks;

// console.log(marks);

// let sum = 0;

// for(let mark of marks){
//   sum += mark;
// }
// console.log(sum);
// let average = sum / marks.length;

// console.log(average);

// student["address"] = {
//   city: "Cumilla",
//   zipCode: 3405,
//   country: "Bangladesh"
// }

// console.log(student);

// for (let key in student) {
//   if (typeof student[key] === "object" && !Array.isArray(student[key])) {
//     // nested object (e.g. address)
//     console.log(`${key}:`);
//     for (let subKey in student[key]) {
//       console.log(`  ${subKey}: ${student[key][subKey]}`);
//     }
//   } else {
//     console.log(`${key}: ${student[key]}`);
//   }
// }


// function isArray(val) {
//   return Array.isArray(val);
// }
// let resutl = isArray([1, 2, 3]);
// console.log(resutl);


// let colors = ["Red", "Green", "Blue"];

// colors.push("Yellow");
// colors.shift();
// console.log(colors);

// let nums = [1, 4, 7, 10, 13, 16];

// let evenNums = nums.filter((num => num % 2 === 0));
// console.log(evenNums);

// let nums = [2, 3, 4];

// let squreNums = nums.map((squ)=> squ *= squ);
// console.log(squreNums);

// let prices = [100, 200, 300];

// let sum = prices.map(r => {
//   return r + r;
// });
// console.log(sum);

let numbers = [2, 5, 8];

let double = numbers.map(num => num + num);

console.log(double);

let words = ["cat", "apple", "dog", "banana"];

let shortW = words.filter(word => word.length <= 3 );
console.log(shortW);


let nums = [1, 2, 3, 4, 5, 6];
let evenN = nums.filter(num => num %2 === 0)
console.log(evenN, evenN.length);