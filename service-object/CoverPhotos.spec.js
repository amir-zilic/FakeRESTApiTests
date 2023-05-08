const axios = require('axios');


const instance = axios.create({
  baseURL: 'https://fakerestapi.azurewebsites.net',
});

async function getCoverPhotosEndpoint() {
    const response = await instance.get('/api/v1/CoverPhotos');
    expect(response.status).toBe(200);
  }

  async function postCoverPhotosEndpoint(postData) {
    const response = await instance.post('/api/v1/CoverPhotos', postData);
    expect(response.status).toEqual(200);
    expect(response.data).toEqual(postData);
  }

  async function getCoverPhotosByIdEndpoint() {
      const response = await instance.get('/api/v1/CoverPhotos/9');
      expect(response.status).toBe(200);
      expect(response.data.id).toBe(9);
  }
  
  async function putCoverPhotosByIdEndpoint(requestBody, responseBody) {
    const response = await instance.put('/api/v1/CoverPhotos/0', requestBody);
    expect(response.status).toEqual(200);
    expect(response.data).toEqual(responseBody);
  }

  async function deleteCoverPhotosByIdEndpoint() {
    const response = await instance.delete('/api/v1/CoverPhotos/9');
    expect(response.status).toEqual(200);
  }
  
  module.exports = { getCoverPhotosEndpoint, postCoverPhotosEndpoint, getCoverPhotosByIdEndpoint, putCoverPhotosByIdEndpoint, deleteCoverPhotosByIdEndpoint };