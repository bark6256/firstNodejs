"use strict";

const UserStorage = require("./UserStorage");

class User {
    constructor(body) {
        this.body = body;
    }

    async login() {
        try{
            const user = await UserStorage.getUserInfo(this.body.username);
            
            if (user) {
                if (user.username === this.body.username && user.password === this.body.password) {
                    return { success: true }
                }
                return { success: false, msg: "비밀번호가 틀렸습니다."};
            }
            return { success: false, msg: "존재하지 않는 아이디입니다."};
        }
        catch (err) {
            return {success: false, err };
        }
    }
    
    async register() {
        try{
            const response = await UserStorage.save(this.body);
            return response;
        } catch (err) {
            return { success: false, err };
        }
    }
}

module.exports = User; 