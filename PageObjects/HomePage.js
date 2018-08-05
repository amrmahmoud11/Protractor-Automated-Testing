var homepage = function() {
  var signUpUsername = element(by.id('id_userLoginId'));

  this.clickSignIn = function() {
    element(by.xpath('//a[contains(text(), "Sign In")]')).click();
  };

  this.enterEmailOrPhoneNumber = function(username){
    if(signUpUsername.isPresent()){
      signUpUsername.sendKeys(username);

    }else{
      console.log('username field not found!');
    }
  };

  this.getTextOfUsername = function(){
    var enteredUsername = signUpUsername.getAttribute('value');
    return enteredUsername;
  };


};

module.exports = new homepage();
