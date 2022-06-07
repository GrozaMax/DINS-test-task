"use strict";

var chai = require('chai');
var testCase = require('mocha').describe;
var chaiHttp = require('chai-http');
var should = chai.should();

chai.use(chaiHttp);

// test for GET	/posts
testCase('/GET posts', function(){
      it('it should GET second post', (done) => {
        chai.request('https://jsonplaceholder.typicode.com')
            .get('/posts/?userId=1&title=qui est esse')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');                  // удостоверяемся что это массив
                res.body[0].should.have.property('userId');     // проверяем наличие всех элементов, так как они обязательные
                res.body[0].should.have.property('id').eql(2);  // так же проверяем что это пост номер 2
                res.body[0].should.have.property('title');
                res.body[0].should.have.property('body');
                res.body.length.should.be.eql(1);               // проверяем что выведен только один пост
                done();
            });
      });
  });

testCase('/GET posts', function(){
      it('it should GET empty array: invalid userId and title', (done) => {
        chai.request('https://jsonplaceholder.typicode.com')
            .get('/posts/?userId=3&title=aut amet sed')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');                   // удостоверяемся что это массив
                res.body.length.should.be.eql(0);                // длина массива должна быть 0
                done();
            });
      });
  });

testCase('/GET posts', function(){
      it('it should GET empty array: invalid title', (done) => {
        chai.request('https://jsonplaceholder.typicode.com')
            .get('/posts/?userId=1&title=sunt aut facere')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');                    // удостоверяемся что это массив
                res.body.length.should.be.eql(0);                 // длина массива должна быть 0
                done();
            });
      });
  });

testCase('/GET posts', function(){
      it('it should GET empty array: invalid userId', (done) => {
        chai.request('https://jsonplaceholder.typicode.com')
            .get('/posts/?userId=3&title=qui est esse')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');                    // удостоверяемся что это массив
                res.body.length.should.be.eql(0);                 // длина массива должна быть 0
                done();
            });
      });
  });

testCase('/GET posts', function(){
      it('it should GET post id=2: empty userId and correct title', (done) => {
        chai.request('https://jsonplaceholder.typicode.com')
            .get('/posts/?title=qui est esse')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');                  // удостоверяемся что это массив
                res.body[0].should.have.property('userId');     // проверяем наличие всех элементов, так как они обязательные
                res.body[0].should.have.property('id').eql(2);  // проверяем что это пост номер 2
                res.body[0].should.have.property('title');
                res.body[0].should.have.property('body');
                res.body.length.should.be.eql(1);               //проверяем что выведен только один пост
                done();
            });
      });
  });

////////////////////////////////////////////////////////////

testCase('/GET posts', function(){
      it('it should GET 10 elements array: userId=1 and empty title', (done) => {
        chai.request('https://jsonplaceholder.typicode.com')
            .get('/posts/?userId=1')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');                  // удостоверяемся что это массив
                res.body.length.should.be.eql(10);              // длина массива должна быть 10
                done();
            });
      });
  });
