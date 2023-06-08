const axios = require('axios');


const instance = axios.create({
  baseURL: 'https://fakerestapi.azurewebsites.net',
});

const currentTime = new Date();

async function getActivitiesEndpoint() {
    const response = await instance.get('/api/v1/Activities');
    expect(response.status).toBe(200);
    expect(response.data.length).toBe(30);
  }

  async function postActivitiesEndpoint(postData, expectedData) {
    console.log('');
    console.log('[' + currentTime.toLocaleTimeString() + ']' + ' Activities API Test started' )
    const response = await instance.post('/api/v1/Activities', JSON.stringify(postData),{
      headers: {
        'Content-Type': 'application/json', 
      },
    });
    expect(response.status).toEqual(200);
    expect(response.data).toEqual(expectedData);
  }

  async function getActivitiesByIdEndpoint() {
      const response = await instance.get('/api/v1/Activities/9');
      expect(response.status).toBe(200);
      expect(response.data.id).toBe(9);
  }
  
  async function putActivitiesByIdEndpoing(requestBody, responseBody) {
    const response = await instance.put('/api/v1/Activities/0', JSON.parse('{"title": "' + requestBody.title + '"}'), {
      headers: {
        'Content-Type': 'application/json', 
      },
    });
    expect(response.status).toEqual(200)
    expect(response.data).toEqual(responseBody);
  }

  async function deleteActivitiesByIdEndpoint() {
    const response = await instance.delete('/api/v1/Activities/9');
    expect(response.status).toEqual(200)
    console.log('[' + currentTime.toLocaleTimeString() + ']' + ' Activities API Test ended' )
  }
  
  module.exports = { getActivitiesEndpoint, postActivitiesEndpoint, getActivitiesByIdEndpoint, putActivitiesByIdEndpoing,deleteActivitiesByIdEndpoint};