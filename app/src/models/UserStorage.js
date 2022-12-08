"use strict";

const db = require("../config/db");

class UserStorage {
    static getUserInfo(username) {
        return new Promise((resolve, reject) => {
            const query = "SELECT * FROM users WHERE username = ?;";
            db.query(query, [username], (err, data) => {
                if(err) reject(err);
                else resolve(data[0]);
            })
        })
    }

    static async save(userInfo) {
        return new Promise((resolve, reject) => {
            const query = "INSERT INTO users(username, password, name) VALUES(?,?,?);";
            db.query(query, [userInfo.username, userInfo.password, userInfo.name], (err) => {
                if(err) reject(err);
                else resolve({ success: true });
            })
        })
    }
}

module.exports = UserStorage;