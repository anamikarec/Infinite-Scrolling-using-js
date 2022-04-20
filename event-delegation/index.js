let parent = document.querySelector("#parent");
parent.addEventListener("click",(e)=>{
    // console.log(e.target)
    window.location.href = "/"+e.target.id
})

let  input = document.querySelector("#input");
input.addEventListener("keyup",(e)=>{
    // console.log("input");
    if(e.target.dataset.uppercase !=="undefined"){
        e.target.value = e.target.value.toUpperCase() 
    }
})