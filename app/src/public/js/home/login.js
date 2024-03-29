"use strict";

const username = document.querySelector("#username"),
    password = document.querySelector("#password"),
    loginBtn = document.querySelector("#button");

loginBtn.addEventListener("click",login);

function login(){
    if (!username.value) { return alert("아이디를 입력하여 주십시오.") }
    if (!password.value) { return alert("비밀번호를 입력하여 주십시오."); }

    const req = {
        username : username.value,
        password : password.value
    };
    
    fetch("/login", {
        method : "POST",
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(req),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.success) {
            location.href = "/";
        } else {
            if(res.err) return alert(res.err);
            alert(res.msg);
        }
      })
      .catch((err) => {
        console.error(new Error("로그인 중 에러 발생"));
      });
}
