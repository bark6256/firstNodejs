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

    static getUsers(...fields) {
        // const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if(users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }

    static getUserInfo(username) {
        return fs.readFile("./src/databases/users.json")
            .then(data => {
                return this.#getUserInfo(data, username);
            })
            .catch(console.error);
    }

    static save(userInfo) {
        // const users = this.#users
        users.username.push(userInfo.username);
        users.password.push(userInfo.password);
        users.name.push(userInfo.name);
        return { success: true };
    }
}

module.exports = UserStorage;