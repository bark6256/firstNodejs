"use strict";


const output = {
    home : (req, res) => {
        res.render("home/index");
    },
    
    login : (req, res) => {
        res.render("home/login");
    }
};

const users = {
    username: ["1010", "2020", "3030"],
    password: ["1q2w3e", "1q2w3e","1q2w3e4r"]
};

const process = {
    login : (req, res) => {
        const username = req.body.username,
          password = req.body.password;
        
        if (users.username.includes(username)){
            const idx = users.username.indexOf(username);
            if(users.password[idx] === password){
                return res.json({
                    success: true,
                });
            }
        }

        return res.json({
            success: false,
            msg: "로그인에 실패하였습니다.",
        });
    }
};

module.exports = {
    output,
    process
};