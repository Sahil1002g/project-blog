let creat=document.querySelector(".creataccount")
let popup=document.querySelector("#pop")
let Cancel=document.querySelector("#cancel")
// console.log(Cancel);

let Save=document.querySelector("#save")
let name1 = document.querySelector(".name")
let email = document.querySelector(".email")
let mobileno = document.querySelector(".mobileno")
let password = document.querySelector(".password")
let cpass  = document.querySelector(".cpass")

// login


let log= localStorage.getItem("log")
if (log !== null){
    window.location.replace("/home-page.html")
}

creat.addEventListener("click",()=>{
    popup.classList.remove("d-non")
});

Cancel.addEventListener("click",()=>{
    popup.classList.add("d-non")
});

Save.addEventListener("click",()=>{
    let newuser={name1:name1.value,
     email:email.value,
    mobileno:mobileno.value,
     password:password.value}

    let userdetail=localStorage.getItem("user");
    
    userdetail=userdetail=== null ? [] : JSON.parse (userdetail);

    let is_exist=userdetail.find((value)=>{
        return value.email === newuser.email;

    });
    
    if (is_exist===undefined){
        userdetail.push(newuser);
        localStorage.setItem("user",JSON.stringify(userdetail));
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Registration Successful",
            showConfirmButton: false,
            timer: 1500
            
          });popup.classList.add("d-non")
    }

   else {
   return Swal.fire({
    icon: "error",
    title: "",
    text: "Please Fill Form",
    
  });
    
   }

})

let user_name  = document.querySelector("#User-name")
let log_pass = document.querySelector("#Password")
let login =document.querySelector(".signin")

login.addEventListener("click",()=>{

    let UName= user_name.value
    
    let pas=log_pass.value;
    // console.log(name1.value ,password.value);
    let ulist=localStorage.getItem("user");
    ulist=ulist===null  ? [] :JSON.parse(ulist);

    let is = ulist.findIndex((value) => {
    return UName===value.email && pas===value.password;
    })
   
    if(is === -1 ){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "User and Password Doesn't Match ",
           
          });} 
    else {
    alert("Login sucessfull ") 
    localStorage.setItem("log",is)
    window.location.replace("/home-page.html")
}
});


