const axios = require('axios');


const instance = axios.create({
  baseURL: 'https://fakerestapi.azurewebsites.net',
});

async function getAuthorsEndpoint() {
    const response = await instance.get('/api/v1/Authors');
    expect(response.status).toBe(200);
  }

  async function postAuthorsEndpoint(postData) {
    const response = await instance.post('/api/v1/Authors', postData);
    expect(response.status).toEqual(200);
    expect(response.data).toEqual(postData);
  }

  async function getAuthorsByIdEndpoint() {
      const response = await instance.get('/api/v1/Authors/9');
      expect(response.status).toBe(200);
      expect(response.data.id).toBe(9);
  }
  
  async function putAuthorsByIdEndpoint(requestBody, responseBody) {
    const response = await instance.put('/api/v1/Authors/0', requestBody);
    expect(response.status).toEqual(200);
    expect(response.data).toEqual(responseBody);
  }

  async function deleteAuthorsByIdEndpoint() {
    const response = await instance.delete('/api/v1/Authors/9');
    expect(response.status).toEqual(200);
  }
  
  module.exports = { getAuthorsEndpoint, postAuthorsEndpoint, getAuthorsByIdEndpoint, putAuthorsByIdEndpoint, deleteAuthorsByIdEndpoint};