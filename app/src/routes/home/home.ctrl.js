"use strict";

const UserStorage = require("../../models/UserStorage");

const output = {
    home : (req, res) => {
        res.render("home/index");
    },
    
    login : (req, res) => {
        res.render("home/login");
    }
};


const process = {
    login : (req, res) => {
        const username = req.body.username,
          password = req.body.password;
        
        const users = UserStorage.getUsers("username", "password");
        
        const response = {};
        if (users.username.includes(username)){
            const idx = users.username.indexOf(username);
            if(users.password[idx] === password){
                response.success = true;
                return res.json(response);
            }
        }

        response.success = false;
        response.msg = "로그인에 실패하였습니다.";
        return res.json(response);
    }
};

module.exports = {
    output,
    process
};