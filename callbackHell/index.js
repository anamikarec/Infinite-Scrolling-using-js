const creatingCallbackHell = () => {
    setTimeout(()=>{
        let rollNumber = [1,2,3,4,5,6,7,8,9];
        console.log(rollNumber);
        
    setTimeout(()=>{
        let student = {
            name:"Anamika"
        }
        console.log(student.name);
    },2000);

    },2000)
}
creatingCallbackHell()