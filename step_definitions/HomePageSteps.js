var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;
var homepage = require('../PageObjects/HomePage.js');
browser.ignoreSynchronization = true;
browser.ignoreUncaughtExceptions = true;
var {Given} = require('cucumber');
var {When} = require('cucumber');
var {Then} = require('cucumber');
var {And} = require('cucumber');
var {setDefaultTimeout} = require('cucumber');
setDefaultTimeout(600 * 1000);
var {After, Before, AfterAll, BeforeAll, Status} = require('cucumber');

      Before(function () {
        browser.get('http://www.netflix.com/');
      });


      After(function(scenario) {
        if (scenario.result.status === Status.FAILED) {
          var attach = this.attach;
              return browser.takeScreenshot().then(function(png) {
          var decodedImage = new Buffer(png, "base64");
              return attach(decodedImage, "image/png");
          });
          }
        browser.close();
      });

      Given('I click sign in on the homepage', function () {
        expect(browser.getCurrentUrl()).to.eventually.equal('https://www.netflix.com/eg-en/');
        homepage.clickSignIn();
        browser.sleep(2000);
        return expect(browser.getCurrentUrl()).to.eventually.equal('https://www.netflix.com/eg-en/login');

        });

      Then('I enter {string} as the username and {string} as the password', function (string, string2) {
        homepage.enterEmailOrPhoneNumber(string, string2);
        expect(homepage.getTextOfUser()).to.eventually.equal('amr@amr.com');
        return  expect(homepage.getPasswordOfUser()).to.eventually.equal('amr1');

         });

      Then('I click sign in', function(){
        return homepage.clickSignIn2();

      });

      Then('It should say incorrect login', function(){
        browser.sleep(2000);
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
