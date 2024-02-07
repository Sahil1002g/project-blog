let blog=localStorage.getItem("blog")
let bloglist=document.querySelector(".bac")
blog = JSON.parse(blog);

let list=blog.map((value)=>{
    return`  
    <section class="content">
        <section class="left">
            <h1>${value.title}</h1>
            <p>${value.para}</p>
            <h5>~${value.author}</h5>
        </section >
       
        <section class="right">
            <img src="${value.link}" alt="">
        </section>
    </section>`

})
bloglist.innerHTML=list.join("");
console.log(blog);



let logout=document.querySelector("#lbtn")
logout.addEventListener("click",()=>{
    let is_confirm=confirm("are you sure to logout ?")
    if(is_confirm===true){
        localStorage.removeItem("log")
   
    window.location.replace("/login.html") }
})