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
        .set('Access-Control-Allow-Origin', '*')
        .send(userInfo)
        .end(function(err, response) {
          //console.log(response["redirects"]);
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
});
