const { getActivitiesEndpoint, postActivitiesEndpoint, getActivitiesByIdEndpoint, putActivitiesByIdEndpoing, deleteActivitiesByIdEndpoint } = require('../service-object/Activities.spec.js');
const ActivitiesData = require ('../data/ActivitiesData.js');
const { RequestData, RequestDataBuilder } = require('../data/RequestData.js');

describe('Activities test suite', () => {
    it('should test the Activities API endpoints', async () => {

      await postActivitiesEndpoint(new RequestDataBuilder()
        .withId(0)
        .withTitle('string')
        .withDueDate('2023-04-28T07:19:21.534Z')
        .withCompleted(true)
        .build(),
        ActivitiesData.postDataActivities);
      await getActivitiesEndpoint();
      await putActivitiesByIdEndpoing(new RequestDataBuilder()
        .withTitle('Changed Title')
        .build(), 
        ActivitiesData.putDataActivitiesCheck);
      await getActivitiesByIdEndpoint();
      await deleteActivitiesByIdEndpoint();
    });  
  });