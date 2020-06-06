// Add promise support if this does not exist natively.
if (!global.Promise) {
  global.Promise = require('q');
}
var chai = require('chai');
var sinon = require('sinon');
var chaiHttp = require('chai-http');
const expect = chai.expect;

//var expect = chai.expect;
var userController = require('../../controllers/userController');

const users = require('../../models/users');
var app = 'https://shelteroinf.herokuapp.com/user';

chai.use(chaiHttp);

describe("POST User Login", function(done) {
  //a positive unit test case
  it("User should login with correct username and password", function(done) {
    this.timeout(3000);
    //send login data
    let userInfo = {};
    userInfo.email = 'test@test.test';
    userInfo.password = 'test';
    chai.request(app)
        .post('/login')
        .set('content-type', 'application/x-www-form-urlencoded')
        .send(userInfo)
        .end(function(err, response) {
          //console.log(response);
          expect(response).to.has.status(200);
          expect(response["redirects"][0]).to.equal(app+'/successlogin');
          done();
        });
  });

  //a negative unit test case
  it("User should not login with wrong password", function(done) {
    this.timeout(3000);
    //send login data
    let userInfo = {};
    userInfo.email = 'test@test.test';
    userInfo.password = 'wrongpsw';
    chai.request(app)
        .post('/login')
        .set('content-type', 'application/x-www-form-urlencoded')
        .send(userInfo)
        .end(function(err, response) {
          //console.log(response["redirects"]);
          expect(response).to.has.status(200);
          expect(response["redirects"][0]).to.equal(app+'/failurelogin');
          done();
        });
  });

  //a negative unit test
  it("User should not login if not sign up", function(done) {
    this.timeout(3000);
    //send login data
    let userInfo = {};
    userInfo.email = 'wrongusername@test.test';
    userInfo.password = 'test';
    chai.request(app)
        .post('/login')
        .set('content-type', 'application/x-www-form-urlencoded')
        .send(userInfo)
        .end(function(err, response) {
          expect(response).to.has.status(200);
          expect(response["redirects"][0]).to.equal(app+'/failurelogin');
          done();
        });
  });

  it("User should not able to perform noSQL injection", function(done) {
    this.timeout(10000);

    let userInfo = {};
    userInfo.email = 'POST /login HTTP/1.1\r\nHost: example.org\r\nContent-Type: application/x-www-form-urlencoded\r\nContent-Length: 28\r\nuser=test&password[%24ne]='
    userInfo.password = '';
    chai.request(app)
        .post('/login')
        .set('content-type', 'application/x-www-form-urlencoded')
        .send(userInfo)
        .end(function(err, response) {
          expect(response).to.has.status(200);
          expect(response["redirects"][0]).to.equal(app+'/failurelogin');
          done();
        });
  });
});
