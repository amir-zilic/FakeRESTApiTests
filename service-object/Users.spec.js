const axios = require('axios');


const instance = axios.create({
  baseURL: 'https://fakerestapi.azurewebsites.net',
});

async function getUsersEndpoint() {
    const response = await instance.get('/api/v1/Users');
    expect(response.status).toBe(200);
  }

  async function postUsersEndpoint(postData) {
    const response = await instance.post('/api/v1/Users', postData);
    expect(response.status).toEqual(200);
    expect(response.data).toEqual(postData);
  }

  async function getUsersByIdEndpoint() {
      const response = await instance.get('/api/v1/Users/9');
      expect(response.status).toBe(200);
      expect(response.data.id).toBe(9);
  }
  
  async function putUsersByIdEndpoint(requestBody, responseBody) {
    const response = await instance.put('/api/v1/Users/0', requestBody);
    expect(response.status).toEqual(200);
    expect(response.data).toEqual(responseBody);
  }

  async function deleteUsersByIdEndpoint() {
    const response = await instance.delete('/api/v1/Users/9');
    expect(response.status).toEqual(200);
  }
  
  module.exports = { getUsersEndpoint, postUsersEndpoint, getUsersByIdEndpoint, putUsersByIdEndpoint, deleteUsersByIdEndpoint };