const axios = require('axios');


const instance = axios.create({
  baseURL: 'https://fakerestapi.azurewebsites.net',
});

async function getBooksEndpoint() {
    const response = await instance.get('/api/v1/Books');
    expect(response.status).toBe(200);
  }

  async function postBooksEndpoint(postData) {
    const response = await instance.post('/api/v1/Books', postData);
    expect(response.status).toEqual(200);
    expect(response.data).toEqual(postData);
  }

  async function getBooksByIdEndpoint() {
      const response = await instance.get('/api/v1/Books/9');
      expect(response.status).toBe(200);
      expect(response.data.id).toBe(9);
  }
  
  async function putBooksByIdEndpoint(requestBody, responseBody) {
    const response = await instance.put('/api/v1/Books/0', requestBody);
    expect(response.status).toEqual(200);
    expect(response.data).toEqual(responseBody);
  }

  async function deleteBooksByIdEndpoint() {
    const response = await instance.delete('/api/v1/Books/9');
    expect(response.status).toEqual(200);
  }
  
  module.exports = { getBooksEndpoint, postBooksEndpoint, getBooksByIdEndpoint, putBooksByIdEndpoint, deleteBooksByIdEndpoint };