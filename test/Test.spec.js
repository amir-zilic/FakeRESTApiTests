// TEST FILE

const { getActivitiesEndpoint, postActivitiesEndpoint, getActivitiesByIdEndpoint, putActivitiesByIdEndpoing, deleteActivitiesByIdEndpoint } = require('../service-object/Activities.spec.js');
const { getAuthorsEndpoint, postAuthorsEndpoint, putAuthorsByIdEndpoint, getAuthorsByIdEndpoint, deleteAuthorsByIdEndpoint } = require('../service-object/Authors.spec.js');
const { postBooksEndpoint, getBooksByIdEndpoint, getBooksEndpoint, putBooksByIdEndpoint, deleteBooksByIdEndpoint } = require('../service-object/Books.spec.js');
const { postCoverPhotosEndpoint, getCoverPhotosEndpoint, putCoverPhotosByIdEndpoint, getCoverPhotosByIdEndpoint, deleteCoverPhotosByIdEndpoint } = require('../service-object/CoverPhotos.spec.js');
const ActivitiesData = require ('../data/ActivitiesData.js');
const AuthorsData = require ('../data/AuthorsData.js');
const BooksData = require ('../data/BooksData.js');
const CoverPhotosData = require('../data/CoverPhotosData.js');

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


describe('Books test suite', () => {
  it('should test the Books API endpoints', async () => {
     await postBooksEndpoint(BooksData.postDataBooks);
     await getBooksEndpoint();
     await putBooksByIdEndpoint(BooksData.putDataBooks, BooksData.putDataBooksCheck);
     await getBooksByIdEndpoint();
     await deleteBooksByIdEndpoint();
  });  
});

describe('CoverPhotos test suite', () => {
  it('should test the CoverPhotos API endpoints', async () => {
     await postCoverPhotosEndpoint(CoverPhotosData.postDataCoverPhotos);
     await getCoverPhotosEndpoint();
     await putCoverPhotosByIdEndpoint(CoverPhotosData.putDataCoverPhotos, CoverPhotosData.putDataCoverPhotosCheck);
     await getCoverPhotosByIdEndpoint();
     await deleteCoverPhotosByIdEndpoint();
  });  
});
