const personName = function(dis) {
    console.log(this.firstName+" "+this.lastName + " " + dis);
}

let name = {
    firstName:"Jaswant",
    lastName:"Chaudhary"
}
// personName.apply(name,["Siddhartha Nagar"])
personName.call(name,"Siddhartha Nagar")

const person = personName.bind(name);
person("Siddhartha Nagar")