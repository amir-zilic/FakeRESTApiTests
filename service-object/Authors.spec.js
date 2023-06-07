const axios = require('axios');


const instance = axios.create({
  baseURL: 'https://fakerestapi.azurewebsites.net',
});

const currentTime = new Date();

async function getAuthorsEndpoint() {
    const response = await instance.get('/api/v1/Authors');
    expect(response.status).toBe(200);
  }

  async function postAuthorsEndpoint(postData, expectedData) {
    console.log('');
    console.log('[' + currentTime.toLocaleTimeString() + ']' + ' Authors API Test started' )
    const response = await instance.post('/api/v1/Authors', JSON.stringify(postData), {
      headers: {
        'Content-Type': 'application/json', 
      },
    });
    expect(response.status).toEqual(200);
    expect(response.data).toEqual(expectedData);
  }

  async function getAuthorsByIdEndpoint() {
      const response = await instance.get('/api/v1/Authors/9');
      expect(response.status).toBe(200);
      expect(response.data.id).toBe(9);
  }
  
  async function putAuthorsByIdEndpoint(requestBody, responseBody) {
    const response = await instance.put('/api/v1/Authors/0', JSON.parse('{"firstName": "' + requestBody.firstName + '"}'), {
      headers: {
        'Content-Type': 'application/json', 
      },
    });
    expect(response.status).toEqual(200);
    expect(response.data).toEqual(responseBody);
  }

  async function deleteAuthorsByIdEndpoint() {
    const response = await instance.delete('/api/v1/Authors/9');
    expect(response.status).toEqual(200);
    console.log('[' + currentTime.toLocaleTimeString() + ']' + ' Authors API Test ended' )
  }
  
  module.exports = { getAuthorsEndpoint, postAuthorsEndpoint, getAuthorsByIdEndpoint, putAuthorsByIdEndpoint, deleteAuthorsByIdEndpoint};