Feature: Running Cucumber with Protractor

Scenario: Protractor and Cucumber Test
      Given I click sign in on the homepage
      Then I enter 'amr@amr.com' as the username and 'amr1' as the password
      Then I click sign in
      Then It should say incorrect login
