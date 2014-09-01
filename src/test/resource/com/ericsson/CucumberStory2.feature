Feature: Navigating into ericsson.com and verify login
  
  In order to verify login in ericsson.com
  I open browser
  and I navigate to ericsson.com
  then I click on login
  when I select requiresite
  and enter username and password
  and click on login
  then I see welcome message for my name.

  @login
  Scenario Outline: Verify login
    Given I go to "URL" for "<Browser>"
    Then I clicks on "Login"
    When I select "RequireSite" for "drpDwn"
    Then I select for "<Username>" and "<Password>" in respective "UsernameF" and "PasswordF"
    When I clicks again on "LoginButton"
    Then I verify "<Welcome Message>" for "<MyName>"

       Examples: 
      | Browser | Username  | Password  | Welcome Message | MyName            |
      | Mozilla | esusadh   | Puki@1627 | WelcomeMsg1     | Susanta Adhikary  |