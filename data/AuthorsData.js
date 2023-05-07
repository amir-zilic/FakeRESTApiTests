class AuthorsData { 

    postDataAuthors = {
        id: 0,
        idBook: 0,
        firstName: "string",
        lastName: "string"
       };
   
   putDataAuthors = {
    id: 0,
    idBook: 0,
    firstName: "changed name",
    lastName: "string"
   }
   
    putDataAuthorsCheck = {
       id: 0,
       idBook: 0,
       firstName: "changed name",
       lastName: "string"
     }   
   
   }
   
   module.exports = new AuthorsData;