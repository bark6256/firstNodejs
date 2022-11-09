"use strict";

const fs = require("fs").promises;

class UserStorage {
    static #getUserInfo(data, username) {
        const users = JSON.parse(data);
        const idx = users.username.indexOf(username);
        const usersKeys = Object.keys(users);
        const userInfo = usersKeys.reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
        }, {});
        return userInfo;
    }

    static #getUsers(data, isAll, fields) {
        const users = JSON.parse(data);
        if(isAll) return users;

        const newUsers = fields.reduce((newUsers, field) => {
            if(users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }
    static getUsers(isAll, ...fields) {
        return fs
            .readFile("./src/databases/users.json")
            .then(data => {
                return this.#getUsers(data, isAll, fields);
            })
            .catch(console.error);
    }

    static getUserInfo(username) {
        return fs
            .readFile("./src/databases/users.json")
            .then(data => {
                return this.#getUserInfo(data, username);
            })
            .catch(console.error);
    }

    static async save(userInfo) {
        const users = await this.getUsers(true);
        if (users.username.includes(userInfo.username)){
            throw "이미 존재하는 아이디입니다.";
        }
        users.username.push(userInfo.username);
        users.password.push(userInfo.password);
        users.name.push(userInfo.name);
        fs.writeFile("./src/databases/users.json", JSON.stringify(users));
        return { success: true };
    }
}

module.exports = UserStorage;