class RequestData {
    constructor(builder) {
      this.title = builder.title;
      this.dueDate = builder.dueDate;
      this.firstName = builder.firstName;
      this.lastName = builder.lastName;
      this.description = builder.description;
      this.excerpt = builder.excerpt;
      this.publishDate = builder.publishDate;
      this.url = builder.url;
      this.userName = builder.userName;
      this.password = builder.password;
      this.completed = builder.completed;
      this.id = builder.id;
      this.idBook = builder.idBook;
      this.pageCount = builder.pageCount;
    }
  }
  
  class RequestDataBuilder {
    constructor() {
      this.title = '';
      this.dueDate = '';
      this.firstName = '';
      this.lastName = '';
      this.description = '';
      this.excerpt = '';
      this.publishDate = '';
      this.url = '';
      this.userName = '';
      this.password = '';
      this.completed = true;
      this.id = 0;
      this.idBook = 0;
      this.pageCount = 0;
    }
  
    withTitle(title) {
      this.title = title;
      return this;
    }
  
    withDueDate(dueDate) {
      this.dueDate = dueDate;
      return this;
    }
  
    withFirstName(firstName) {
      this.firstName = firstName;
      return this;
    }
  
    withLastName(lastName) {
      this.lastName = lastName;
      return this;
    }
  
    withDescription(description) {
      this.description = description;
      return this;
    }
  
    withExcerpt(excerpt) {
      this.excerpt = excerpt;
      return this;
    }
  
    withPublishDate(publishDate) {
      this.publishDate = publishDate;
      return this;
    }
  
    withUrl(url) {
      this.url = url;
      return this;
    }
  
    withUserName(userName) {
      this.userName = userName;
      return this;
    }
  
    withPassword(password) {
      this.password = password;
      return this;
    }
  
    withCompleted(completed) {
      this.completed = completed;
      return this;
    }
  
    withId(id) {
      this.id = id;
      return this;
    }
  
    withIdBook(idBook) {
      this.idBook = idBook;
      return this;
    }
  
    withPageCount(pageCount) {
      this.pageCount = pageCount;
      return this;
    }
  
    build() {
      return new RequestData(this);
    }
  }
  

  module.exports = { RequestData, RequestDataBuilder };