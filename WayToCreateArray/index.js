// Index pair values in js.

// const arr = [];
// console.log(arr);

// let size = 3;
// const arr2 = new Array(size).fill(0);
// console.log(arr2);

// const arr3 = new Array(1,2,3,4,5);
// console.log(arr3);

// Hoisting
// let x = 100;

// function fun(){
//     x = i = 10;
// }
// fun();
// console.log(x,i);
// 10 10


/// It will first search for the var i in inside function
// then check in global space, if not
// It will declare it of var type in global space
// let x = 100;

// function fun(){
//    var x = i = 10;
// }
// fun();
// console.log(x,i);

// res = 10;
// console.log(res,"res");
// Note: It will automatically define to res as var type in global space.


// for(var i=1;i<=5;i++){
//    setTimeout(function(){
//       console.log(i);
//    },i*1000)
// }
// 6
// 6
// 6
// 6
// 6
// for(let i=1;i<=5;i++){
//    setTimeout(function(){
//       console.log(i);
//    },i*1000)
// }

// 1
// 2
// 3
// 4
// 5

// function sum(a){
//    return function(b){
//       return function(c){
//          return a+b+c;
//       }
//    }
// }
// console.log(sum(2)(3)(4))


// 'use strict';
// function test(){
//    console.log(this);
// }
// test();


// var str = 'key,value,pair,js';
// var arr = str.split(',');
// var obj = {};
// obj[arr[arr.length-1]] = {};

// for(var i=arr.length-2; i>=0; i--){
//    obj[arr[i]] = {...obj}
//    delete obj[arr[i+1]]
// }
// console.log(obj)

// Method:~2


// function rec(arr,i=0,obj={}){
//    if(i===arr.length){
//       return obj;
//    }
//    else{
//     obj[arr[i]] = rec(arr,i+1);
//       return obj;
//    }
// }
// console.log(rec(arr));

let str = 'key,value,pair,js'
const arr = str.split(',');

// const rec = (arr,i=0,obj={}) => {
//    return !arr[i] ? obj : {[arr[i]] : rec(arr, i+1)}
// }
// console.log(rec(arr));

const rec = (arr,i=0,obj={}) => {
   if(!arr[i]){
      return obj;
   }
   else{
      obj[arr[i]] = rec(arr,i+1);
      return obj;
   }
}
console.log(rec(arr));