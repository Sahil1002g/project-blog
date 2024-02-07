let login=localStorage.getItem("log");
let userdetail=null;

if(login===null){
 window.location.replace("/login.html");
}
else{
    userdetail=localStorage.getItem("user")
    userdetail=JSON.parse(userdetail);
    userdetail=userdetail[login]
    document.querySelector(".welcome").innerHTML=`Welcome, <b>${userdetail.name1}</b>`;
}
console.log(userdetail);
let logout=document.querySelector("#lbtn")
logout.addEventListener("click",()=>{
    
    let is_confirm=confirm("are you sure to logout ?")
    if(is_confirm===true){
        localStorage.removeItem("log")
   
    window.location.replace("/login.html") }
})

let title=document.querySelector(".title")
let para=document.querySelector(".para")
let link=document.querySelector("#link")
let savebutton=document.querySelector("#sbtn")
let img_pre=document.querySelector(".img-pre")

savebutton.addEventListener("click",()=>{
    let newblog ={
        title:title.value ,   
    para:para.value,
    link:link.value,
    id:login,
    author:userdetail.name1
    }
    let blog=localStorage.getItem("blog")
    blog=blog === null ? [] : JSON.parse(blog)
    
    blog.unshift(newblog)
    localStorage.setItem("blog",JSON.stringify(blog))
    alert("blog is saved successful")
    
  
    
})