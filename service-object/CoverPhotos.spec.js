const axios = require('axios');


const instance = axios.create({
  baseURL: 'https://fakerestapi.azurewebsites.net',
});

const currentTime = new Date();

async function getCoverPhotosEndpoint() {
    const response = await instance.get('/api/v1/CoverPhotos');
    expect(response.status).toBe(200);
  }

  async function postCoverPhotosEndpoint(postData, expectedData) {
    console.log('');
    console.log('[' + currentTime.toLocaleTimeString() + ']' + ' CoverPhotos API Test started' )
    const response = await instance.post('/api/v1/CoverPhotos', JSON.stringify(postData), {
      headers: {
        'Content-Type': 'application/json', 
      },
    });
    expect(response.status).toEqual(200);
    expect(response.data).toEqual(expectedData);
  }

  async function getCoverPhotosByIdEndpoint() {
      const response = await instance.get('/api/v1/CoverPhotos/9');
      expect(response.status).toBe(200);
      expect(response.data.id).toBe(9);
  }
  
  async function putCoverPhotosByIdEndpoint(requestBody, responseBody) {
    const response = await instance.put('/api/v1/CoverPhotos/0', JSON.parse('{"url": "' + requestBody.url + '"}'), {
      headers: {
        'Content-Type': 'application/json', 
      },
    });
    expect(response.status).toEqual(200);
    expect(response.data).toEqual(responseBody);
  }

  async function deleteCoverPhotosByIdEndpoint() {
    const response = await instance.delete('/api/v1/CoverPhotos/9');
    expect(response.status).toEqual(200);
    console.log('[' + currentTime.toLocaleTimeString() + ']' + ' CoverPhotos API Test ended' )
  }
  
  module.exports = { getCoverPhotosEndpoint, postCoverPhotosEndpoint, getCoverPhotosByIdEndpoint, putCoverPhotosByIdEndpoint, deleteCoverPhotosByIdEndpoint };