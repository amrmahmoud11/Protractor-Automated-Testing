var homepage = function() {
  var signUpUsername = element(by.name('usrLoginId'));
  var signUpPassword = element(by.name('password'));
  browser.ignoreUncaughtExceptions = true;


  this.clickSignIn = function() {
    element(by.xpath('//a[contains(text(), "Sign In")]')).click();
  };

  this.enterEmailOrPhoneNumber = function(username, password){

      signUpUsername.sendKeys(username);
      signUpPassword.sendKeys(password);
  };

  this.getTextOfUser = function(){
    var enteredUsername = signUpUsername.getAttribute('value');
    return enteredUsername;

  };
  this.getPasswordOfUser = function(){
    var enteredPassword = signUpPassword.getAttribute('value');
    return enteredPassword;
};
  this.clickSignIn2 = function(){
    element(by.xpath('//button[contains(text(), "Sign In")]')).click();
};
  this.isElementAvailable = function(){
    var incorrect = element(by.xpath('//b[contains(text(), "Incorrect")]'));
    return incorrect.isPresent();
  }

};

module.exports = new homepage();
