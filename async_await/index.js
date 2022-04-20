const getRollNumber = new Promise((resolve, reject) => {
    setTimeout(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then((res)=>resolve(res.json()))
        .catch((err) => reject('error',err))
        .finally(()=>{
            console.log('Success')
        })
    })
})

const displayData = (res) => {
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            const body = document.querySelector('body');
            const div = document.createElement('div');
            div.textContent = `${res.title}`
            body.appendChild(div);
    
        },2000)
    })
    
}
const printStudent = async () => {
    const res = await getRollNumber;
    console.log(res)
    await displayData(res);
}
printStudent()