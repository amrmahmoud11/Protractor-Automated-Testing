var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;
var homepage = require('../PageObjects/HomePage.js');
browser.ignoreSynchronization = true;
var {Given} = require('cucumber');
var {When} = require('cucumber');
var {Then} = require('cucumber');
var {And} = require('cucumber');
var {setDefaultTimeout} = require('cucumber');
setDefaultTimeout(600 * 1000);

      Given('I click sign in on the homepage', function () {
        browser.get('http://www.netflix.com/');
        expect(browser.getCurrentUrl()).to.eventually.equal('https://www.netflix.com/eg-en/');
        homepage.clickSignIn();
        return expect(browser.getCurrentUrl()).to.eventually.equal('https://www.netflix.com/eg-en/login');


        });

      Then('I enter {string} as the username', function (string) {
        homepage.enterEmailOrPhoneNumber(string);
        return expect(homepage.getTextOfUsername()).to.eventually.equal('amr');
         });





// beforeEach(function () {
//   browser.ignoreSynchronization = true;
//   browser.get('http://www.netflix.com/');
//
// });
//
//   // afterEach(function (){
//   //   window.close();
//   // });
//
// });
