const { postUsersEndpoint, getUsersEndpoint, putUsersByIdEndpoint, getUsersByIdEndpoint, deleteUsersByIdEndpoint } = require('../service-object/Users.spec.js');
const UsersData = require('../data/CheckData/UsersData.js');
const { RequestData, RequestDataBuilder } = require('../data/RequestData/RequestData.js');

describe('Users test suite', () => {
    it('should test the Users API endpoints', async () => {
       await postUsersEndpoint(new RequestDataBuilder()
         .withId(0)
         .withUserName('string')
         .withPassword('string')
         .build(),
         UsersData.postDataUsers);
       await getUsersEndpoint();
       await putUsersByIdEndpoint(new RequestDataBuilder()
         .withUserName('changed username')
         .build(),
         UsersData.putDataUsersCheck);
       await getUsersByIdEndpoint();
       await deleteUsersByIdEndpoint();
    });  
  });