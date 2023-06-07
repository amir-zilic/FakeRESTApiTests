class AuthorsData { 

    postDataAuthors = {
        id: 0,
        idBook: 0,
        firstName: "string",
        lastName: "string"
    };
   
    putDataAuthorsCheck = {
       id: 0,
       idBook: 0,
       firstName: "changed name",
       lastName: null
    }   
   }
   
   module.exports = new AuthorsData;