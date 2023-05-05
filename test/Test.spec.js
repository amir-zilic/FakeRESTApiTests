// TEST FILE

const { getActivitiesEndpoint, postActivitiesEndpoint, getActivitiesByIdEndpoint, putActivitiesByIdEndpoing, deleteActivitiesByIdEndpoint } = require('../service-object/Activities.spec.js');
const Data = require ('../data/ActivitiesData.js');

describe('Activities test suite', () => {
  it('should test the Activities API endpoints', async () => {
    await postActivitiesEndpoint(Data.postDataActivities);
    await getActivitiesEndpoint();
    await putActivitiesByIdEndpoing(Data.putDataActivities, Data.putDataActivitiesCheck);
    await getActivitiesByIdEndpoint();
    await deleteActivitiesByIdEndpoint();
  });
});
