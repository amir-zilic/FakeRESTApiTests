const { getAuthorsEndpoint, postAuthorsEndpoint, putAuthorsByIdEndpoint, getAuthorsByIdEndpoint, deleteAuthorsByIdEndpoint } = require('../service-object/Authors.spec.js');
const AuthorsData = require ('../data/CheckData/AuthorsData.js');
const { RequestData, RequestDataBuilder } = require('../data/RequestData/RequestData.js');

describe('Authors test suite', () => {
    it('should test the Authors API endpoints', async () => {
       await postAuthorsEndpoint(new RequestDataBuilder()
         .withId(0)
         .withIdBook(0)
         .withFirstName('string')
         .withLastName('string')
         .build(), 
         AuthorsData.postDataAuthors);
       await getAuthorsEndpoint();
       await putAuthorsByIdEndpoint(new RequestDataBuilder()
         .withFirstName('changed name')
         .build(),
         AuthorsData.putDataAuthorsCheck);
       await getAuthorsByIdEndpoint();
       await deleteAuthorsByIdEndpoint();
    });  
  });