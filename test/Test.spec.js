// TEST FILE

const { getActivitiesEndpoint, postActivitiesEndpoint, getActivitiesByIdEndpoint, putActivitiesByIdEndpoing, deleteActivitiesByIdEndpoint } = require('../service-object/Activities.spec.js');
const { getAuthorsEndpoint, postAuthorsEndpoint, putAuthorsByIdEndpoint, getAuthorsByIdEndpoint, deleteAuthorsByIdEndpoint } = require('../service-object/Authors.spec.js');
const ActivitiesData = require ('../data/ActivitiesData.js');
const AuthorsData = require ('../data/AuthorsData.js');

describe('Activities test suite', () => {
  it('should test the Activities API endpoints', async () => {
    await postActivitiesEndpoint(ActivitiesData.postDataActivities);
    await getActivitiesEndpoint();
    await putActivitiesByIdEndpoing(ActivitiesData.putDataActivities, ActivitiesData.putDataActivitiesCheck);
    await getActivitiesByIdEndpoint();
    await deleteActivitiesByIdEndpoint();
  });  
});

describe('Authors test suite', () => {
  it('should test the Authors API endpoints', async () => {
     await postAuthorsEndpoint(AuthorsData.postDataAuthors);
     await getAuthorsEndpoint();
     await putAuthorsByIdEndpoint(AuthorsData.putDataAuthors, AuthorsData.putDataAuthorsCheck);
     await getAuthorsByIdEndpoint();
     await deleteAuthorsByIdEndpoint();
  });  
});
