// Difference between call,apply and bind

const data = {
    b : 10
}

function add(a){
    console.log(this.b+a);
}
add.call(data,10);

// Difference between call,apply and bind

const addWithArrow = (a) => {
    console.log(this.b+a);
}
addWithArrow.call(data,10);


function printMyAddresses(year,name){
console.log(`{${address.street} ${address.village} ${year} ${name}}`)
}

const address = {
    street: "143",
    village : "ABC Complex"
}

printMyAddresses.call(address,22,"Anamika");
printMyAddresses.apply(address,[22,"Anamika"]);

let printAddress = printMyAddresses.bind(address,22,"Anamika");
printAddress();

const obj = {
    name:"Anamika Gupta",
    newFunc:function(){
        console.log(this.name);
    }
}
obj.newFunc()
const obj2 = {
    name:"Akanksha Gupta"
}
// This will refer to the same obj, no benifit to pass obj2 as an argument 
obj.newFunc(obj2)
obj.newFunc.call(obj2)