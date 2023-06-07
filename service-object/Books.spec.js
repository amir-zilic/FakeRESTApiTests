const axios = require('axios');
const { RequestData, RequestDataBuilder } = require('../data/RequestData.js');
jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;

const instance = axios.create({
  baseURL: 'https://fakerestapi.azurewebsites.net',
});

const currentTime = new Date();

async function getBooksEndpoint() {
    const response = await instance.get('/api/v1/Books');
    expect(response.status).toBe(200);
  }

  async function postBooksEndpoint(postData, expectedData) {
    console.log('');
    console.log('[' + currentTime.toLocaleTimeString() + ']' + ' Books API Test started' )
    const response = await instance.post('/api/v1/Books', JSON.stringify(postData), {
      headers: {
        'Content-Type': 'application/json', 
      },
    });
    expect(response.status).toEqual(200);
    expect(response.data).toEqual(expectedData);
  }

  async function getBooksByIdEndpoint() {
      const response = await instance.get('/api/v1/Books/9');
      expect(response.status).toBe(200);
      expect(response.data.id).toBe(9);
  }
  
  async function putBooksByIdEndpoint(requestBody, responseBody) {
    const response = await instance.put('/api/v1/Books/0', JSON.parse('{"description": "' + requestBody.description + '"}'), {
      headers: {
        'Content-Type': 'application/json', 
      },
    });
    expect(response.status).toEqual(200);
    expect(response.data).toEqual(responseBody);
  }

  async function deleteBooksByIdEndpoint() {
    const response = await instance.delete('/api/v1/Books/9');
    expect(response.status).toEqual(200);
    console.log('[' + currentTime.toLocaleTimeString() + ']' + ' Books API Test ended' )
  }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

async function parseBooks() {
  const response = await instance.get('/api/v1/Books');
  expect(response.status).toBe(200);
  var booksList = [];
  for (var i = 0; i < response.data.length; i++) {
    booksList.push(new RequestDataBuilder()
    .withId(response.data[i].id)
    .withTitle(response.data[i].title)
    .build());
  }
  return booksList;
}

async function validateBook(book) {
  const response = await instance.get('/api/v1/Books/' + book.id.toString());
  expect(response.status).toBe(200);
  expect(response.data.id).toBe(book.id);
  expect(response.data.title).toBe(book.title);
  console.log('Book ' + book.id + ' validated!');
}
  
  module.exports = { getBooksEndpoint, postBooksEndpoint, getBooksByIdEndpoint, putBooksByIdEndpoint, deleteBooksByIdEndpoint, parseBooks, validateBook };