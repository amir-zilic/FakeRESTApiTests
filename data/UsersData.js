class Users { 

    postDataUsers = {
        id: 0,
        userName: "string",
        password: "string"
    };
   
    putDataUsers = {
        id: 0,
        userName: "changed username",
        password: "string"
    }
   
    putDataUsersCheck = {
        id: 0,
        userName: "changed username",
        password: "string"
    }   
   }
   
   module.exports = new Users;