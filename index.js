// var images = [
//     { height: 10, width: 30 },
//     { height: 20, width: 90 },
//     { height: 54, width: 32 }
//   ];
//     images.forEach((img)=>
//     areas.push(img.height*img.width);
//   );
//   console.log(areas);

// function addd(n=1,m=8)
// {
//   console.log(n+m);
// }
// addd();
// addd(1,2);
// addd(4);

// let fruits = ["orange","apple","banana"];
// fruits.forEach(item => console.log(item));
// fruits.forEach(function(item){
//   console.log(item);
// });

// (function f(){
// for(var i = 0 ;i<fruits.length;i++){
//   console.log(fruits[i]);
// }
// console.log(i);
// })();  //IIFE

// function f(){
//   for(let i = 0 ;i<fruits.length;i++){
//     console.log(fruits[i]);
//   }
//   console.log(i);
//   }
// f();

// (function(){
//   var n1 = 10;
//   if(n1 === 10){
//     var s = 'ten';
//   }
//   console.log(n1);
//   console.log(s);
// })();

// (function(){
//   let n1 = 10;
//   if(n1 === 10){
//     let s = 'ten';
//     console.log(s);
//   }
//   console.log(n1);
//   // console.log(s);

// })();

  // console.log('Hello\nMe');
  // console.log(`Hello
  // Me`);

  // var s = "asha";
  // var h = "sheeba";
  // var f1=function f(s){  
  //   return s;
  //   }
  // console.log(s+h);
  // console.log(`Hi ${s} `);
  // console.log(`The value is ${f1(7)}`);

  // console.log(90<10?"illa":"aama");

  // function c(s){
  //   const v=['a','e','i','o','u'];
  //   let ct=0;
  //   for(let i=0;i<s.length;i++){
  //     if(v.includes(s[i])){
  //       ct++;
  //     }
  //   }
  //   return ct;
  // }
  // console.log(c('asha'));

  // pi = Math.PI;
  // console.log(pi);

  // a=90;
  // console.log(`post ${a++} , pre ${++a}`);


// // console.log(vowel.length);
// let [a,b,c,d,f]=vowel;
// console.log(f);


// function oe(n){
//   let r=[[],[]];
//   n.forEach(function(n){
//   if(n % 2 === 0){
//     r[0].push(n);}
//   else{
//     r[1].push(n);
//   }});
//   console.log(r);
// }
// oe([1,2,3,5]);

// let p = {
//   fname:"aa",
//   lname:"bb",
//   skills:["js","rb","py"]
// }
// console.log(typeof p);
// console.log(p.fname);
// console.log(p.lname);

// function oe(){
//   return arguments;
// }
// vowel= ['a','e','i','o','u']
// console.log(oe(...vowel));

// console.log("Hi Shrey");

// var fruits = ['a','b','c'];
// fruits.forEach((i)=>console.log(i));

// n=[1,2,3,4];
// console.log(n.filter(n => n %2==0));

// var add=(n1,n2)=>{
//   console.log(`output : ${n1+n2}`);
// }
// add(2,3);

// s=['n','t','a'];
// let[f1, ,...rest]=s;
// console.log(...rest);

// let n=[1,4,3,7];
// console.log(Math.max(...n));

// let food = {
//   fname:'idli',
//   sidedish:'sambar',
//   eat:false,
//   start()
//   {
//     this.eat=true;
//     console.log(`started eating idli :${this.eat}`);
//   },
//   stop()
//   {
//     this.eat=false;
//     console.log(`stoped eating idli :${this.eat}`);
//   },
//   putsambar()
//   {
//     this.eat=false;
//     console.log(`stoped eating without sambar:${this.eat}`);
//   }
// }
// console.log(food.putsambar());
// console.log(food.start());
// console.log(food.stop());

// class Food{
//   constructor(name)
//   {
//     this.name=name;
//     this.isCompleted=false;
//   }
//   details()
//   {
//     return `${this.name}`;
//   }
// }

// let c=new Food('idli');
// console.log(c.details());
// console.log(c.isCompleted);

// class Task {
//   constructor(name) {
//       // instance properties
//       this.name = name;
//       this.isCompleted  = false; 
//       Task.data.push(this);            // pushing all objects into an array, which becomes accessible
//   }
//   // instance method
//   details() {
//       return `${this.name} - ${this.isCompleted}`
//   }
//   // class method
//   static all() {
//       return Task.data;
//   }
//   // class method
//   static info() {
//       return `Im a class method`;
//   }
// }
// // static / class property                  // should be defined outside the class
// Task.data = [];
// let t1 = new Task('go for walk');
// // properties and methods are instances of the object 
// console.log(t1.name);
// console.log(t1.isCompleted);
// console.log(t1.details());
// properties and methods can not be called on the class! 
// console.log(Task.name);             // undefined
// console.log(Task.isCompleted);      // undefined
// console.log(Task.details());        // ERROR
// static methods and properties should be called on the class
// console.log(Task.all());
// console.log(Task.info());
// console.log(Task.data)
// static methods and properties can not be called on the objects / instances!
// console.log(t1.all());              // ERROR
// console.log(t1.info());             // ERROR
// console.log(t1.data);               // undefined
// let t2 = new Task('get groceries');
// console.log(t1.name);
// console.log(t1.isCompleted);
// console.log(t1.details());


class Person
{
  constructor(name,email,phn){
    this.name = name
    this.email = email
    this.phn = phn
  }
  static display(){
    console.log(Person.data)
  }
  save(){
   Person.data.push({
     "Name":this.name,
     "Email":this.email,
     "Phn":this.phn
   })
  }
  remove(){
    this.Person.splice(this);
  }
}

Person.data = []
let h1 = new Person("VIVEK" , "vivek@gmail.com" , "7899577910")
let h2 = new Person("NAGA" , "naga@gmail.com" , "8959577911")
let h3 = new Person("Test" , "test@gmail.com" , "9359577946")
h1.save()
h2.save()
h3.save()
h3.remove()
Person.display()
