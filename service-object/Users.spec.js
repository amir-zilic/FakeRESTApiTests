const axios = require('axios');


const instance = axios.create({
  baseURL: 'https://fakerestapi.azurewebsites.net',
});

const currentTime = new Date();

async function getUsersEndpoint() {
    const response = await instance.get('/api/v1/Users');
    expect(response.status).toBe(200);
  }

  async function postUsersEndpoint(postData, expectedData) {
    console.log('');
    console.log('[' + currentTime.toLocaleTimeString() + ']' + ' Users API Test started' )
    const response = await instance.post('/api/v1/Users', JSON.stringify(postData), {
      headers: {
        'Content-Type': 'application/json', 
      },
    });
    expect(response.status).toEqual(200);
    expect(response.data).toEqual(expectedData);
  }

  async function getUsersByIdEndpoint() {
      const response = await instance.get('/api/v1/Users/9');
      expect(response.status).toBe(200);
      expect(response.data.id).toBe(9);
  }
  
  async function putUsersByIdEndpoint(requestBody, responseBody) {
    const response = await instance.put('/api/v1/Users/0', JSON.parse('{"username": "' + requestBody.userName + '"}'), {
      headers: {
        'Content-Type': 'application/json', 
      },
    });
    expect(response.status).toEqual(200);
    expect(response.data).toEqual(responseBody);
  }

  async function deleteUsersByIdEndpoint() {
    const response = await instance.delete('/api/v1/Users/9');
    expect(response.status).toEqual(200);
    console.log('[' + currentTime.toLocaleTimeString() + ']' + ' Users API Test ended' )
  }
  
  module.exports = { getUsersEndpoint, postUsersEndpoint, getUsersByIdEndpoint, putUsersByIdEndpoint, deleteUsersByIdEndpoint };