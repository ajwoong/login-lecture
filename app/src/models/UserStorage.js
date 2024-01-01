'use strict'

class UserStorage {
    
    static #users = {
    id : ['jewoong', 'cbum', 'alright'],
    psword : ['1234', '12333', '242424'],
    name: ['제웅이', '씨범', '박재훈'],
 }

    static getUsers(...fields) {
        const users = this.#users;
        const newUsers =  fields.reduce((newUsers, field)=>{
            if(users.hasOwnProperty(field)){
                newUsers[field] = users[field]
            }
            return newUsers;
        }, {});
        return newUsers;
    } 

};

module.exports = UserStorage