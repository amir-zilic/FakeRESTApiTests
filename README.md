# FakeRESTApiTests
## Technologies used: 
 1. Javascript 
 2. Jasmine
 3. Axios Library

## Description:

https://fakerestapi.azurewebsites.net/index.html  app designed as an online bookstore. Test uses Jasmine with Axios library to automate API calls. It tests end to end flow for each API service, using Service Object Model pattern to include tests that validate user creation. Using implementation of builder pattern to create unique users, books, authors etc. for request bodies, it compares returned responses with expected JSON values.

## Running the test:
- make sure to have Jasmine and nodeJS installed
- comamands to run:
`npm install`
`npm install --save-dev jasmine`
` jasmine test/*`
