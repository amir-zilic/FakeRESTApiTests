const { postCoverPhotosEndpoint, getCoverPhotosEndpoint, putCoverPhotosByIdEndpoint, getCoverPhotosByIdEndpoint, deleteCoverPhotosByIdEndpoint } = require('../service-object/CoverPhotos.spec.js');
const CoverPhotosData = require('../data/CheckData/CoverPhotosData.js');
const { RequestData, RequestDataBuilder } = require('../data/RequestData/RequestData.js');

describe('CoverPhotos test suite', () => {
    it('should test the CoverPhotos API endpoints', async () => {
       await postCoverPhotosEndpoint(new RequestDataBuilder()
         .withId(0)
         .withIdBook(0)
         .withUrl('string'),
         CoverPhotosData.postDataCoverPhotos);
       await getCoverPhotosEndpoint();
       await putCoverPhotosByIdEndpoint(new RequestDataBuilder()
         .withUrl('changed url')
         .build(),
         CoverPhotosData.putDataCoverPhotosCheck);
       await getCoverPhotosByIdEndpoint();
       await deleteCoverPhotosByIdEndpoint();
    });  
  });