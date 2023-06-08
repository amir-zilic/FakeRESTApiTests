const { postBooksEndpoint, getBooksByIdEndpoint, getBooksEndpoint, putBooksByIdEndpoint, deleteBooksByIdEndpoint, parseBooks, validateBook } = require('../service-object/Books.spec.js');
const BooksData = require ('../data/CheckData/BooksData.js');
const { RequestData, RequestDataBuilder } = require('../data/RequestData/RequestData.js');
const currentTime = new Date();

describe('Books test suite', () => {
    it('should test the Books API endpoints', async () => {
      
       await postBooksEndpoint(new RequestDataBuilder()
         .withId(0)
         .withTitle('string')
         .withDescription('string')
         .withPageCount(0)
         .withExcerpt('string')
         .withPublishDate('2023-05-07T21:07:59.038Z')
         .build(), 
         BooksData.postDataBooks);
       await getBooksEndpoint();
       await putBooksByIdEndpoint(new RequestDataBuilder()
        .withDescription('changed desc')
        .build(),
         BooksData.putDataBooksCheck);
       await getBooksByIdEndpoint();
       await deleteBooksByIdEndpoint();
    });  
  });

  describe('Book validation', () => {
    it('Parses each book individually', async () => {
      console.log('');
      console.log('[' + currentTime.toLocaleTimeString() + ']' + ' Invidual book ID and Title validation started' )
       booksList = await parseBooks();
       for(var i = 0; i < booksList.length; i++){
        await validateBook(booksList[i]);
       }
       console.log('[' + currentTime.toLocaleTimeString() + ']' + ' Individual book ID and Title validation ended' )
    });  
  });