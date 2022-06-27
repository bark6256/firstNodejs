"use strict";

const username = document.querySelector("#username"),
    password = document.querySelector("#password"),
    loginBtn = document.querySelector("#login");

loginBtn.addEventListener("click",login);

function login(){
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
    });
}
