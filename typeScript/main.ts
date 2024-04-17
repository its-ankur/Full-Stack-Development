// console.log("hello");
// // let a=10;
// // a="hello";
// let a:number;
// a=10;
// let b=a.toString();
// console.log(b);

// let arr:number[]=[];
// arr.push(10);

// tuple is a fixed length array

// let tuple:[number,string]=[10,"hello"];

// // enum is a set of named constants

// enum Color{
//     Red=0,
//     Green=8,
//     Blue
// }

// let myColor:Color=Color.Blue;
// console.log(myColor);

// type Point={
//     x:number,
//     y:number
// }
// function drawPoint(point:Point){
//     console.log(point.x,point.y);
// }
// function getDistance(point1:Point,point2:Point){
//     console.log(point1.x,point1.y);
// }
// let myPoint:Point={
//     x:20,
//     y:30
// }
// let myPoint1:Point={
//     x:10,
//     y:20
// }
// let myPoint2:Point={
//     x:30,
//     y:40
// }
// drawPoint(myPoint);
// getDistance(myPoint1,myPoint2);

// type Employee={
//     name:string,
//     age:number
// }

// let Ravi:Employee={
//     name:"Test",
//     age:20,
// }
// let Rajesh:Employee={
//     name:"Test",
//     city:"Hyderabad",
// }

// let data:number|string; //union type
// data=10;
// data="hello";
// data=true;

//let data:number & string; //intersection type

// function test(message:string){
//     console.log(message);

// }

// function sum(x:number,y:number){
//     return x+y;
// }

// function getData(id:number|null){  //narrowing
//     let results:string[]=["zero","one","two","three"];
//     // if(id==null){
//     //     return "No data found";
//     // }
//     // return results[id];
//     return id==null?"No data found":results[id];
// }
// let a=getData(null);
// console.log(a);

// function with default argument

// function sum(x:number,y:number=0){
//     if(y==undefined){
//         return x;
//     }
//     return x+y;
// }
// console.log(sum(10));

//Intersection

// type Personal={
//     name:string;
//     getName:()=>void;
// }
// type Professional={
//     code:number;
//     getCode:()=>number;
// }
// let emp:Personal & Professional={
//     name:"Test",
//     getName(){
//         return this.name;
//     },
//     code:10,
//     getCode(){
//         return this.code;
//     }
// }

//Handling null

// type Customer = {
//   name: string;
// };
// function getCustomer(id: number): Customer | null {
//   if (id == 0) {
//     return null;
//   }
//   return { name: "YourName" };
// }
// let customer = getCustomer(1);
// // if (customer != null) {
// //   console.log(customer.name);
// // }
// console.log(customer?.name);

// interface Point {
//   x: number;
//   y: number;
// }
// function drawPoint(point: Point) {
//   console.log(point.x, point.y);
// }
// function getDistance(point1: Point, point2: Point) {
//   console.log(point1.x, point1.y);
// }
// class CPoint implements Point {
//   x: number;
//   y: number;
//   constructor(x: number, y: number) {
//     this.x = x;
//     this.y = y;
//   }
// }
// let myPoint: Point = {
//   x: 20,
//   y: 30,
// };
// let myPoint1: Point = {
//   x: 10,
//   y: 20,
// };
// let myPoint2: Point = {
//   x: 30,
//   y: 40,
// };
// drawPoint(myPoint);

// class Point {
//     private x:number=10;
//     private y:number=20;
//     constructor(x?:number,y?:number){
//         if(x!=undefined){
//             this.x=x;
//         }
//         if(y!=undefined){
//             this.y=y;
//         }
//     }
//     drawPoint(){
//         console.log(this.x,this.y);
//     }
//     getDistance(point:Point){
//         console.log(this.x,point.x);
//     }
// }
// let myPoint=new Point(10,20);
// myPoint.drawPoint();
// let myPoint1=new Point(30,40);
// myPoint.getDistance(myPoint1);

//Generics

// type NStack = {
//   data: [];
// };
// type SStack = {
//   data: [];
// };
type Stack<T> = {
  data: T[];
};
let stack1: Stack<number> = {
  data: [10, 20, 30]
};
