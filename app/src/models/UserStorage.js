"use strict";

class UserStorage {
    static #users = {
        username: ["1010", "2020", "3030"],
        password: ["1q2w3e", "1q2w3e","1q2w3e4r"],
        name: ["김일번", "김이번", "김삼번"]
    };

    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if(users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }

    static getUserInfo(username) {
        const users = this.#users;
        const idx = users.username.indexOf(username);
        const usersKeys = Object.keys(users);
        const userInfo = usersKeys.reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
        }, {});
        return userInfo;
    }
}

module.exports = UserStorage;