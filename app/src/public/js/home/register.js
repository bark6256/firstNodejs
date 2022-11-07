"use strict";

const username = document.querySelector("#username"),
    password = document.querySelector("#password"),
    confirmPassword = document.querySelector("#confirm-password"),
    name = document.querySelector("#name"),
    registerBtn = document.querySelector("#button");

registerBtn.addEventListener("click",register);

function register(){
    if (!username.value) { return alert("아이디를 입력하여 주십시오.") }
    if (password.value !== confirmPassword.value ) {
        return alert("비밀번호가 일치하지 않습니다.");
    }
    const req = {
        username : username.value,
        password : password.value,
        name : name.value
    };
    
    fetch("/register", {
        method : "POST",
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(req),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.success) {
            location.href = "/login";
        } else {
            alert(res.msg);
        }
      })
      .catch((err) => {
        console.error(new Error("회원가입 중 에러 발생"));
      });
}
