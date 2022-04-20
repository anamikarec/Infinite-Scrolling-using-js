// Default Bubbling Behaviour
// // * If we don't describe the boolean capture field, it will by default implement the bubbling behavior.
// document.querySelector('#grand-parent').addEventListener('click',()=>{
//     console.log('Grand parent clicked');
// })
// document.querySelector('#parent').addEventListener('click',()=>{
//     console.log('Parent clicked');
// })
// document.querySelector('#child').addEventListener('click',()=>{
//     console.log('Child clicked');
// })

// if we describe the boolean capture field as false, it will by default implement the bubbling behavior
// document.querySelector('#grand-parent').addEventListener('click',()=>{
//     console.log('Grand parent clicked');
// },false)
// document.querySelector('#parent').addEventListener('click',()=>{
//     console.log('Parent clicked');
// },false)
// document.querySelector('#child').addEventListener('click',()=>{
//     console.log('Child clicked');
// },false)
// if we describe the boolean capture field as true, it will by default implement the capturing behavior
// document.querySelector('#grand-parent').addEventListener('click',()=>{
//     console.log('Grand parent clicked');
// },true)
// document.querySelector('#parent').addEventListener('click',()=>{
//     console.log('Parent clicked');
// },true)
// document.querySelector('#child').addEventListener('click',()=>{
//     console.log('Child clicked');
// },true)
// IF capturing and bubbling both behavior are present, then capturing will be executing first then bubbling.
document.querySelector('#grand-parent').addEventListener('click',()=>{
    console.log('Grand parent clicked');
},true)
document.querySelector('#parent').addEventListener('click',()=>{
    console.log('Parent clicked');
},false)
document.querySelector('#child').addEventListener('click',()=>{
    console.log('Child clicked');
},true)