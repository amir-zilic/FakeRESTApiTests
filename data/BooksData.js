class BooksData { 

    postDataBooks = {
        id: 0,
        title: "string",
        description: "string",
        pageCount: 0,
        excerpt: "string",
        publishDate: "2023-05-07T21:07:59.038Z"
    };
   
    putDataBooksCheck = {
        id: 0,
        title: null,
        description: "changed desc",
        pageCount: 0,
        excerpt: null,
        publishDate: "0001-01-01T00:00:00"
    }   
   }
   
   module.exports = new BooksData;