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
        browser.sleep(5000);
        return expect(browser.getCurrentUrl()).to.eventually.equal('https://www.netflix.com/eg-en/login');


        });

      Then('I enter {string} as the username and {string} as the password', function (string, string2) {
        homepage.enterEmailOrPhoneNumber(string, string2);
        expect(homepage.getTextOfUser()).to.eventually.equal('amr@amr.com');
        return  expect(homepage.getPasswordOfUser()).to.eventually.equal('amr1');

         });

      Then('I click sign in', function(){
        browser.sleep(5000);
        return homepage.clickSignIn2();

      });

      Then('It should say incorrect login', function(){
        return  expect(homepage.isElementAvailable()).to.be.eventually.true;
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
