// function toggle(...list){
//     let cur = -1;
//     const length = list.length;
//     return function(){
//         cur = (cur +1)%length;
//         return list[cur];
//     }
// }
// const hello = toggle("1","2","3");
// console.log(hello());
// console.log(hello());
// console.log(hello());
// console.log(hello());

// function printName(name) {
//     console.log(name);
// }

// printName("Anamika")

(
    function printName(name) {
        console.log(name);
    }
) ("Anamika")