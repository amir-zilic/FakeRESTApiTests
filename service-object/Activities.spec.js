const axios = require('axios');


const instance = axios.create({
  baseURL: 'https://fakerestapi.azurewebsites.net',
});

async function getActivitiesEndpoint() {
    const response = await instance.get('/api/v1/Activities');
    expect(response.status).toBe(200);
    expect(response.data.length).toBe(30);
  }

  async function postActivitiesEndpoint(postData) {
    const response = await instance.post('/api/v1/Activities', postData);
    expect(response.status).toEqual(200);
    expect(response.data).toEqual(postData);
  }

  async function getActivitiesByIdEndpoint() {
      const response = await instance.get('/api/v1/Activities/9');
      expect(response.status).toBe(200);
      expect(response.data.id).toBe(9);
  }
  
  async function putActivitiesByIdEndpoing(requestBody, responseBody) {
    const response = await instance.put('/api/v1/Activities/0', requestBody);
    expect(response.status).toEqual(200);
    expect(response.data).toEqual(responseBody);
  }

  async function deleteActivitiesByIdEndpoint() {
    const response = await instance.delete('/api/v1/Activities/9');
    expect(response.status).toEqual(200);
  }
  
  module.exports = { getActivitiesEndpoint, postActivitiesEndpoint, getActivitiesByIdEndpoint, putActivitiesByIdEndpoing,deleteActivitiesByIdEndpoint};