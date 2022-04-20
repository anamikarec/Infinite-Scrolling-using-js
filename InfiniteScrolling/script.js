const container = document.querySelector('.container');
let limit = 4;
let pageCount = 1;
let postCount = 1;
const getPost = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}$_page=${pageCount}`)
    const posts = await res.json();
    console.log(posts);

    posts.map((curElem,index)=>{
        const htmlData = `
        <div class="posts">
        <p class="post-id">${postCount++}</p>
        <h2 class="title">${curElem.title}</h2>
        <p class="post-info">${curElem.body}</p>
        </div>
        `
        container.insertAdjacentHTML('beforeend', htmlData);
    })
}
getPost();

const showData = () => {
    setTimeout(() =>{
       pageCount++;
       getPost(); 
    },300)
}
window.addEventListener('scroll', ()=>{
    // const {scrollHeight,clientHeight,scrollTop} = document.documentElement;
    // if(scrollHeight - scrollTop <= clientHeight + 50){
    // // if(scrollHeight-scrollTop < clientHeight-0.3*clientHeight  ){
    //     console.log('I am at bottom');
    if(window.scrollY+window.innerHeight+1>=document.documentElement.scrollHeight){
        showData();
    }
        
})