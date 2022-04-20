const name = {
    1 : 'Anamika'
}
// console.log(name.1) // It will throw an error, since we can't access a object value by dot(Since it's a index value pair, how we can access by array)
console.log(name)
console.log(name[1])

const name2 = {
    name:"Anamika"
}
console.log(name2.name)
// here we can use dor operator

function funtoos(params1, params2) {
console.log(arguments)
console.log(arguments[0])
}
funtoos("xyz","abc");
// [Arguments] { '0': 'xyz', '1': 'abc' }
// xyz
// abc
function funtoos(params1, params2,params3) {
console.log(arguments)
console.log(arguments[0])
console.log(arguments[1])
console.log(arguments[2])
}
funtoos("xyz","abc");
// [Arguments] { '0': 'xyz', '1': 'abc' }
// xyz
// abc
// undefined

// Operators Precedence

console.log(2||3)
console.log(2&&3)