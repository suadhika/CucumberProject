Feature: Navigating into ericsson.com and verify Header/Footer text
  
  In order to verify header/footer text
  I open browser
  and I navigate to ericsson.com
  I verify the search text.

  @HeaderText_Search
  Scenario Outline: Searching for header text
    Given I go to "URL" on "<Browser>"
    When I click on "<Links>"
    Then I verify for "<Search_Text>" against "<Expected_Result>"

    Examples: 
      | Browser | Links  | Search_Text  | Expected_Result |
      | Mozilla | links1 | search_text1 | The Company     |
      | Mozilla | links2 | search_text2 | Thinking Ahead  |
      | Mozilla | links3 | search_text3 | Spotlight       |
      | Mozilla | links4 | search_text4 | Our Portfolio   |
      | Mozilla | links5 | search_text5 | Careers         |

  @FooterText_Search
  Scenario Outline: Searching for footer text
    Given I open "<Browser>"
    Then I navigate to "URL"
    Then I search for "<Footer_Text>" from the "Footer_Box"

     Examples: 
      | Browser |  Footer_Text      |
      | Mozilla |  This is Ericsson | 
      | Mozilla | Ericsson for      | 
      | Mozilla |  What's on        | 
      | Mozilla |  General          | 
      | Mozilla |  Related sites    | 
     