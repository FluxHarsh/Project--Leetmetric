// console.log("Hello World!");

// var age=25;

// console.log(age);   



// function greet(name) {
//     var name="Harsh";
//     console.log("Hello " + name);
// }

// greet();

// {
//     let a="123 Main St";
// }
// console.log(a);

// let marks=21231242344742378962396623562356582358583458346583486834453453453454352353121232434556870098998765342212343545656678879980997878789866544343564765767977807856865743232143546789087654332142536475890876543211314253647586970865432114345676897721;
// console.log(marks);

// let marks=false;
// console.log(typeof marks);

// let a = 5;
// let b = 3;
// console.log(--a + ++b );   


// console.log(++a);
// console.log(--a);


// a+=10;
// console.log(a);

// a-=10;
// console.log(a);

// a**=2;
// console.log(a);

// console.log(5<=5)

// console.log( "5" !== 5 )

// let ans=(true && true && true)

// let ans=(true && 0);
// let ans = (false || true || false && false);
// console.log(ans);


// console.log(2 ^ 2);

//            


// let string1 = 3;
// let srting2=2;

// let sum = string1 + string2;

// console.log(`The sum of ${string1} + ${string2} is equal to ${sum}`);

// for (let i = 10; i >= 1; --i) {
//     console.log(i);
// }

// let i=10;
// while(i>=1){
//     console.log(i);
//     i--;
// }

// Break

// for(let i=1; i<=4;i++){
//     if(i==3)
//         break;

//     else
//         console.log(i)

// }

// continue

// for(let i=1; i<=4;i++){
//     if(i==3)
//         continue;

//     else
//         console.log(i)
// }


// let i = 1;
// while (i < 5) {
//     console.log("Inside the loop");
//     if (i == 3) {
//         i++;
//         continue;
//     }

//     else
//         console.log(i);
//     i++;
// }


// let i=1;
// do{

//     console.log(i)
//     i++;

// }
// while(i<=5);

// let name =`Harsh
// Raghunath
// Jagtap i have
// used backtics 
// used for 

// lines creation and
// spacing`

// console.log(name);


// let firstName= new String("Harsh Jagtap");
// console.log(firstName);


// let opt1 = 'Harsh';
// let opt2 = 'Jagtap ';


// let ans = opt1 + opt2;
// console.log(ans);
// console.log(opt1.toLowerCase());
// console.log(opt1.toUpperCase());

// console.log(opt1.substring(2,4));

// let sentence = "Hello Jee Kaise ho saare";

// let words=sentence.split(" ");

// console.log(words);

// console.log(words.join(','))

// function myfunction() {
//     for (let i = 1; i <= 100; i++) {
//         console.log(i);
//     }
// }

// myfunction();

// function printNumber(num) {
//     console.log("Printing Number:", num)
// }

// printNumber(5);

// function getAverage(num1, num2) {
//     let avg = (num1 + num2) / 2;
//     console.log("Average:", avg)
// }

// getAverage(8, 7);

// function getSum(a, b, c) {
//     let sum = a + b + c;
//     return sum;
// }

// let ans = getSum(1, 2, 3);
// console.log("Answer:", ans)


// function getMyName(firstName,lastName){
//     let fullName = firstName + " " + lastName;
//     return fullName;
// }

// let fullName=getMyName("Harsh", "Jagtap");
// console.log("My FullName is:", fullName);







//Very very important method please revsie these


// AltMethod-1 of writing functions
// function getMultiplicaton(a,b){
//     return a*b;
// }

// console.log(getMultiplicaton(5,2));


//AltMethod-2 for writing functions It's function expression method
// const getMultiplication=function(a,b){
//     return a*b;
// }
// let ans=getMultiplication(5,8);
// console.log(ans);


// function squareNumber(num){
//     let getSquare= num**2;
//     return getSquare;
// }
// console.log(squareNumber(5));

// const squareNumber=function(num){
//     let ans = num**2;
//     return ans;
// }

// console.log(squareNumber(6));

//Arrow Function

// function getExp(x,y){
//     let ans=x**y;
//     return ans;
// }

// console.log(getExp(3,4));


//alt way in var function writing method just using arrow in place of function 

// let getExp=(x,y) => {
//     let ans=x**y;
//     return ans;
// }

// console.log(getExp(3,6));

// let obj={
//     name: "Harsh Jagtap",
//     class: "Sophomore",
//     weigth: 75,
//     height: "5ft 10in",
//     greet: function(){
//         console.log("Heloo i am not 6ft");
//     }
// };
// //important it is so  for in object
// for(let key in obj) { 
//     console.log(key," ",obj[key]);
// }

// console.log(obj)
// obj.greet();

// let obj2=obj;

// ARRAYS
// Array creation
// let arr = [10,20,30];


// let ansArray = arr.map((num) => {
//     return num * num;
// })
// console.log(ansArray);

// array constructor
// let brr = Array('Harsh', 5, true);
// brr.push('Jagtap');
// brr.pop();
// brr.unshift('Webdev')
// brr.shift();
// brr.splice(0, 0, 'Jagtap')
// console.log(brr);


// arr.map((number,index) =>{
//     console.log(number+1);
//     console.log(index);
// })
// console.log(arr);


// Filter
// let arr = [20, 42, 33, 26, 14, 97, 53];

// let evenArray = arr.filter((num) => {
//     if (num % 2 == 0) {
//         return true;
//     }
//     else {
//         return false;
//     }
// })

// console.log(evenArray); 


// let arr=[1,2,'Harsh','Jagtap',null];

// let ansArray= arr.filter((value)=>{
//     if(typeof(value)== 'number'){
//         return true;
//     }
//     else{
//         return false;
//     }
// })

// console.log(ansArray);

// reduce

// let arr=[10,20,30,40];

// let ans=arr.reduce((acc,curr)=>{
//     return acc+curr;
// }, 0 );

// console.log(ans);

// let arr=[1,5,2,7,4,9,1,0,4,8,5,9,5]
// arr.sort();

// console.log(arr);
// console.log(arr.sort().reverse())

// let arr=[10,20,30,40,50];

// let length=arr.length;
// console.log("Length:",length);

// traditional loop
// for(let index=0;index<length;index++){
//     console.log(arr[index]);
// }

// arr.forEach((value,index)=>{
//     console.log("Number:",value,"Index:",index);
// });

// for of arrays
// let arr=[10,20,30,40];

// for(let value of arr){
//     console.log(value);
// }

// let fullName="Harsh";

// for(let value of fullName){
//     console.log(value);
// }

// let arr = [10, 20, 30, 40, 50];

// function getSum(arr) {
//     let len = arr.length;
//     let sum = 0;
//     for (let index = 0; index < len; index++) {
//         sum = sum + arr[index];
//     }
//     return sum;
// }

// let totalSum = getSum(arr);
// console.log(totalSum);

//alt method using for each
// function getSum(arr){
//     let sum=0;
//     arr.forEach((value)=>{
//         sum= sum + value;
//     }) 
//     return sum;
// }

// let totalSum= getSum(arr);
// console.log(totalSum);






//Call stack and hoisting

// console.log(age); //as only var age; shofts to the top and not the initiliazed

// var age=25;



// myName("Harsh Jagtap");

// function myName(Name){
//     console.log(Name);
// }


//Why function is called first class citizen
//reason 1 we can assign it a variable

// function greetMe(greet, fullName){
//     console.log("hello",fullName);
//     greet();
// }


// let greet=function() {
//     console.log("Greetings for the day")
// }

// greetMe(greet,"Harsh"); 
// greet();

//reason 2 return function

// function solve(number){
//     return function(number){
//         return number*number;
//     }
// }
// let ans =solve(5);
// console.log(ans);

// let finalAns=ans(10);
// console.log(finalAns);

//reason 3 function in array
// let arr=[
//     function(a,b){
//         return a+b
//     },
//     function(a,b){
//         return a-b
//     },
//     function(a,b){
//         return a*b
//     }
// ];

// let first=arr[0];
// let ans=first(2,3);  //this value is assigned to first which is 0 index element of arr array which is actually a function returning addition
// console.log(ans);

//reason 4 using function in object(collection of key value pairs)

// let obj={
//     name:"harsh",
//     age:18,
//     greet: () => {
//         console.log("Hello World i am function");
//     }
// }

// console.log(obj);
// obj.greet();

// console.log(greet);

// var greet=function(){
//     console.log("Hello ram ram  bhai sariyane")
// };

// greet();


//new lecture 
//variable scoping


// var name="Harsh Jagtap";

// console.log(name);

// {
//     console.log("block",name);
// }

// if(true){
//         console.log("if",name);

// }

// for(i=0;i<2;i++){
//         console.log("for",name);

// }

// function getName(){
//     console.log("function",name)
// }

// getName()


// function getName(){
//     var fullName="Harsh";
// console.log(fullName)
// }


// getName()

// {
//    let name="Harsh Jagtap"
//     console.log(name)
// }

// console.log(name)

//temporal dead zone is form line 531 to 532 anything valuable between this is even dead out

// console.log(name);
// console.log("Harsh");
// let name="Harsh";
// console.log(name);








//New Topic CLASSES
// class Human{
//     //Properties
//     age;           //public
//     #grade="first yr";//private
//     ht=178;

//     constructor(newAge,newHeight,newGrade){
//         this.age=newAge;
//         this.ht=newHeight;
//         this.#grade=newGrade;

//     }

//     //Behaviour
//     walking(){
//         console.log("I am walking",this.#grade)
//     }

//     running(){
//         console.log("I am running")
//     }

//     get fetchWeight(){
//         return this.#grade;
//     }

//     set modifyWeight(val){
//         this.#grade;
//     }

// }

// let obj=new Human(20,180,"second year");
// console.log(obj.fetchWeight)
// console.log(this.#grade); //SyntaxError: Private field '#grade' must be declared in an enclosing class ok sir

// obj.walking();


//default parameters
// function sayName(fName="Rahul",lName=fName.toUpperCase()){
//     console.log("My Name is",fName," ",lName)
// }

// sayName("Harsh");

// function solve(value=[age=18,wt=75,ht=178]){
//     console.log("Hello JEE",value)
// }

// solve();


// function getAge(){
//     return 19;
// }

// function utility(name,age=getAge()){
//     console.log(name," ",age)
// }

// utility("Harsh")









//new lecture
//Math,date objects

// console.log(Math.E)
// console.log(Math.LN10)
// console.log(Math.LN2)
// console.log(Math.LOG10E)
// console.log(Math.LOG2E)
// console.log(Math.PI)



// console.log(Math.SQRT1_2)
// console.log(Math.floor(1.9))
// console.log(Math.random())






// let curr =Date();

// let date=new Date('October 28 2006 9:20');

// let newDate=new Date(2006,9,28,9);

// console.log(newDate.getFullYear())




// let src={
//     age:18,
//     wt:75,
//     ht:178,
// };
//spread operator 
// let dest={...src};  

// console.log("dest:", dest );

// src.name="harsh";

// console.log("src:", src );

//assign operator 
// let dest=Object.assign({},src);
// console.log("Dest;",dest)

// src.age=90;
// console.log("src:",src);


//iteration method
// let dest={};

// for (let key in src) {
//     let newKey = key;
//     let newValue = src[key];
//     //insert newKey and value in dest and create a clone
//     dest[newKey]=newValue;
// }

// console.log("src:",src);
// console.log("dest:",dest);

// try {
//     console.log("try block starts here")
//     console.log(x);
//     console.log("try block ends here")

// } catch (err) {
//     console.log("I am inside catch block")
//     console.log("Your error is here:", err)
// }
// finally{
//     console.log("I will run everytime , as i am finally block")
// }






// creating a custom error

// try {
//     console.log(x)
// } catch (err) {
//     throw new Error("Bhai phele declare toh kar le");

// }




//DOM Manipulation

// let mydiv=document.querySelector('#mydiv');

// let newElement=document.createElement('span');
// newElement.textContent="This a new created span"

// mydiv.insertAdjacentElement('afterend',newElement)

// let parent=document.querySelector('#mydiv');
// let child=document.querySelector('#fpara');

// parent.removeChild(child);




//EVENT TARGET


// function changeText() {
//     let fpara = document.getElementById('fpara');

//     fpara.textContent = "Hello Harsh Jagtap"
// }

// let fpara = document.getElementById('fpara');

// fpara.addEventListener('click', changeText);


// fpara.removeEventListener('click',changeText);

// function newF(event) {
//     event.preventDefault();
//     anchorElement.textContent = "Click done bhai"
// }

// let anchorElement = document.getElementById('Fanchor');
// anchorElement.addEventListener('click', newF)


// function nameF(event){
//     alert("You have clicked on para:" +event.target.textContent);
// }

// let paras = document.querySelectorAll('p');

// for (let i = 0; i < paras.length; i++) {
//     let para = paras[i];
//     para.addEventListener('click',nameF)
// }

// let mydiv=document.getElementById('wrapper')

// document.addEventListener('click',nameF)









//Performance Improvement


//code1

// const t1=performance.now();

// for (let i = 0; i <=100; i++) {
//     let para=document.createElement('p')
//     para.textContent="I am para number" + i;
//     document.body.appendChild(para)

// }

// const t2=performance.now();
// console.log("time taken by code1:" +(t2-t1) );

// //code2

// const t3=performance.now();

// let mydiv=document.createElement('div');

// for (let i = 0; i <=100; i++) {
//     let para=document.createElement('p');
//     para.textContent="I am para number" + i;
//     mydiv.appendChild(para);

// }

// document.body.appendChild(mydiv);

// const t4=performance.now();

// console.log("time taken by code2:" +(t4-t3) );


//best code

// let fragment=document.createDocumentFragment();

// for (let i = 0; i <=100; i++) {
//     let para=document.createElement('p');
//     para.textContent="This is para"+" "+i; 
//     //No reflow and no repaint for the below line
//     fragment.appendChild(para);  
// }

//the below line takes 1 reflow and. repaint
// document.body.appendChild(fragment);




//PROMISES

// let firstpromise=new Promise((resolve,reject)=>{

//     setTimeout(function sayMyName(){
//         console.log("My Name is harsh jagtap");
//     },5000);
//     resolve(1);

// });

// let promise1=new Promise((resolve,reject) => {
//     let success=true;
//     if(success){
//         resolve("Promise Fulfilled");
//     }
//     else{
//         reject("Promise rejected");
//     }
// });
// promise1.then((message)=>{
//     console.log("Then ka messsage is " + message);
// }).catch((error)=>{
//     console.log("Error:"+error);
// })


// let promise1= new Promise((resolve,reject)=>{
//     setTimeout(resolve,1000,"First");
// })

// let promise2= new Promise((resolve,reject)=>{
//     setTimeout(resolve,2000,"Second");
// })

// let promise3= new Promise((resolve,reject)=>{
//     setTimeout(resolve,4000,"Third");
// })
// Promise.all([promise1,promise2,promise3])
// .then((values)=>{
//     console.log(values);
// })
// .catch((error)=>{
//     console.log("Error:"+error);
// })
















//ASYNC AWAIT HAHAHAHAHAH

// async function getData() {
//     setTimeout(function(){
//         console.log("Hello moto i am inside set timeout block")
//     },3000)   
// }

// let output=getData();


//fetch api

// async function getData() {
//     //get request-async
//     let response = await fetch('https://jsonplaceholder.typicode.com/posts/1/comments');
//     //parse json - async
//     let data=await response.json();
//     console.log(data);
// }

// getData();













//CLOSURE DONE  

// function outerFunction() {
//     let name = "Harsh";
//     function innerFunction() {
//         let name = "Jagtap";
//         console.log(name)
//     }
//     innerFunction();
// }
// outerFunction();
