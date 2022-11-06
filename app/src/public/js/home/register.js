"use strict";

const username = document.querySelector("#username"),
    password = document.querySelector("#password"),
    confirmPassword = document.querySelector("#confirm-password"),
    name = document.querySelector("#name"),
    registerBtn = document.querySelector("#button");

registerBtn.addEventListener("click",register);

function register(){
    const req = {
        username : username.value,
        password : password.value,
        confirmPassword : confirmPassword.value,
        name : name.value
    };
    
    // fetch("/register", {
    //     method : "POST",
    //     headers : {
    //         "Content-Type" : "application/json"
    //     },
    //     body : JSON.stringify(req),
    // })
    //   .then((res) => res.json())
    //   .then((res) => {
    //     if (res.success) {
    //         location.href = "/login";
    //     } else {
    //         alert(res.msg);
    //     }
    //   })
    //   .catch((err) => {
    //     console.error(new Error("회원가입 중 에러 발생"));
    //   });
}
