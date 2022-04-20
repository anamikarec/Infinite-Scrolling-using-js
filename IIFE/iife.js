// Normal Function
function add(a,b){
console.log(a+b);
}
console.log(window.add)
// IIFE FUNCTIONS
(function addI(a,b){
    console.log(a + b);
})(12,13)

// console.log(add(2,3))