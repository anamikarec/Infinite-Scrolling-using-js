const getTodos = new Promise((resolve, reject) => {
    setTimeout(()=>{
        fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then((res)=>resolve(res.json()))
        .catch(err => reject('Some error occured'));
    },2000);
    
})

const showData = (todos) =>{
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            const cont = document.getElementById('cont');
            const div = document.createElement('div');
            div.textContent = `Title : ${todos.id} title:${todos.title}`;
            cont.append(div);
        },2000,todos)
    })
}
getTodos.then((todos) =>{
    return todos;
}).then((todos) =>{
    showData(todos);
})
.catch((err)=>{
    console.log(err)
})


