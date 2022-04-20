// let sum = function(a){
//     return function(b){
//         if(b){
//             return sum(a+b)
//         }
//         return a;
//     }
// }

// Above code in one line
let sum = a => b => b ? sum(a+b) : a;

console.log(sum(1)())
console.log(sum(1)(2)())
console.log(sum(1)(2)(3)())
console.log(sum(1)(2)(3)(4)())
console.log(sum(1)(2)(3)(4)(5)())