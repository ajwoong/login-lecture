'use strict'

const fs = require('fs').promises;


class UserStorage {

    static #getUserInfo(data, id){
        const users = JSON.parse(data);
        const idx = users.id.indexOf(id);
        const userInfo = Object.keys(users).reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser
        }, {})
        return userInfo;                  
    }

    static #getUsers(data, isAll, ...fields){
        const users = JSON.parse(data);
        if(isAll) return users;
        const newUsers =  fields.reduce((newUsers, field)=>{
            if(users.hasOwnProperty(field)){
                newUsers[field] = users[field]
            }
            return newUsers;
        }, {});
        return newUsers;
    }

    static getUsers(isAll, ...fields) {
        // const users = this.#users;

        return fs.readFile("./src/databases/users.json") //app.js위치를 기준으로 readfile 한다.
            .then((data)=>{
                return this.#getUsers(data, isAll, fields);
            })
            .catch(console.error);

        
    } 

    static getUserInfo(id) {
        // const users = this.#users;
        return fs.readFile("./src/databases/users.json") //app.js위치를 기준으로 readfile 한다.
            .then((data)=>{
                return this.#getUserInfo(data, id);
            })
            .catch(console.error);
    }
    
    
    

    static async save(userInfo){
        // const users = this.#users;
        // users.id.push(userInfo.id);
        // users.name.push(userInfo.name);
        // users.psword.push(userInfo.psword);
        // return {success  : true}

        const users = await this.getUsers(true);
        if(users.id.includes(userInfo.id)){
          throw '이미 존재하는 아이디입니다.';
        }
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.psword.push(userInfo.psword);
        fs.writeFile("./src/databases/users.json", JSON.stringify(users));
        return {success:true};
        
    } 
};

module.exports = UserStorage