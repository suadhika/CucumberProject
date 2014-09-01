$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("CucumberStory.feature");
formatter.feature({
  "id": "navigating-into-ericsson.com-and-verify-header/footer-text",
  "description": "\r\nIn order to verify header/footer text\r\nI open browser\r\nand I navigate to ericsson.com\r\nI verify the search text.",
  "name": "Navigating into ericsson.com and verify Header/Footer text",
  "keyword": "Feature",
  "line": 1
});
formatter.scenario({
  "id": "navigating-into-ericsson.com-and-verify-header/footer-text;searching-for-header-text;;2",
  "tags": [
    {
      "name": "@HeaderText_Search",
      "line": 8
    }
  ],
  "description": "",
  "name": "Searching for header text",
  "keyword": "Scenario Outline",
  "line": 16,
  "type": "scenario"
});
formatter.step({
  "name": "I go to \"URL\" on \"Mozilla\"",
  "keyword": "Given ",
  "line": 10,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "I click on \"links1\"",
  "keyword": "When ",
  "line": 11,
  "matchedColumns": [
    1
  ]
});
formatter.step({
  "name": "I verify for \"search_text1\" against \"The Company\"",
  "keyword": "Then ",
  "line": 12,
  "matchedColumns": [
    2,
    3
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "URL",
      "offset": 9
    },
    {
      "val": "Mozilla",
      "offset": 18
    }
  ],
  "location": "SearchText.i_go_to_on(String,String)"
});
formatter.result({
  "duration": 13409553146,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "links1",
      "offset": 12
    }
  ],
  "location": "SearchText.i_click_on(String)"
});
formatter.result({
  "duration": 319506927,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "search_text1",
      "offset": 14
    },
    {
      "val": "The Company",
      "offset": 37
    }
  ],
  "location": "SearchText.i_verify_for_against(String,String)"
});
formatter.result({
  "duration": 6097496841,
  "status": "passed"
});
formatter.after({
  "duration": 6449407687,
  "status": "passed"
});
formatter.after({
  "duration": 338002,
  "status": "passed"
});
formatter.scenario({
  "id": "navigating-into-ericsson.com-and-verify-header/footer-text;searching-for-header-text;;3",
  "tags": [
    {
      "name": "@HeaderText_Search",
      "line": 8
    }
  ],
  "description": "",
  "name": "Searching for header text",
  "keyword": "Scenario Outline",
  "line": 17,
  "type": "scenario"
});
formatter.step({
  "name": "I go to \"URL\" on \"Mozilla\"",
  "keyword": "Given ",
  "line": 10,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "I click on \"links2\"",
  "keyword": "When ",
  "line": 11,
  "matchedColumns": [
    1
  ]
});
formatter.step({
  "name": "I verify for \"search_text2\" against \"Thinking Ahead\"",
  "keyword": "Then ",
  "line": 12,
  "matchedColumns": [
    2,
    3
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "URL",
      "offset": 9
    },
    {
      "val": "Mozilla",
      "offset": 18
    }
  ],
  "location": "SearchText.i_go_to_on(String,String)"
});
formatter.result({
  "duration": 12760805265,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "links2",
      "offset": 12
    }
  ],
  "location": "SearchText.i_click_on(String)"
});
formatter.result({
  "duration": 283240284,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "search_text2",
      "offset": 14
    },
    {
      "val": "Thinking Ahead",
      "offset": 37
    }
  ],
  "location": "SearchText.i_verify_for_against(String,String)"
});
formatter.result({
  "duration": 6810958069,
  "status": "passed"
});
formatter.after({
  "duration": 4770016630,
  "status": "passed"
});
formatter.after({
  "duration": 232174,
  "status": "passed"
});
formatter.scenario({
  "id": "navigating-into-ericsson.com-and-verify-header/footer-text;searching-for-header-text;;4",
  "tags": [
    {
      "name": "@HeaderText_Search",
      "line": 8
    }
  ],
  "description": "",
  "name": "Searching for header text",
  "keyword": "Scenario Outline",
  "line": 18,
  "type": "scenario"
});
formatter.step({
  "name": "I go to \"URL\" on \"Mozilla\"",
  "keyword": "Given ",
  "line": 10,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "I click on \"links3\"",
  "keyword": "When ",
  "line": 11,
  "matchedColumns": [
    1
  ]
});
formatter.step({
  "name": "I verify for \"search_text3\" against \"Spotlight\"",
  "keyword": "Then ",
  "line": 12,
  "matchedColumns": [
    2,
    3
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "URL",
      "offset": 9
    },
    {
      "val": "Mozilla",
      "offset": 18
    }
  ],
  "location": "SearchText.i_go_to_on(String,String)"
});
formatter.result({
  "duration": 11089444186,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "links3",
      "offset": 12
    }
  ],
  "location": "SearchText.i_click_on(String)"
});
formatter.result({
  "duration": 276086628,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "search_text3",
      "offset": 14
    },
    {
      "val": "Spotlight",
      "offset": 37
    }
  ],
  "location": "SearchText.i_verify_for_against(String,String)"
});
formatter.result({
  "duration": 5924499747,
  "status": "passed"
});
formatter.after({
  "duration": 4847121044,
  "status": "passed"
});
formatter.after({
  "duration": 257011,
  "status": "passed"
});
formatter.scenario({
  "id": "navigating-into-ericsson.com-and-verify-header/footer-text;searching-for-header-text;;5",
  "tags": [
    {
      "name": "@HeaderText_Search",
      "line": 8
    }
  ],
  "description": "",
  "name": "Searching for header text",
  "keyword": "Scenario Outline",
  "line": 19,
  "type": "scenario"
});
formatter.step({
  "name": "I go to \"URL\" on \"Mozilla\"",
  "keyword": "Given ",
  "line": 10,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "I click on \"links4\"",
  "keyword": "When ",
  "line": 11,
  "matchedColumns": [
    1
  ]
});
formatter.step({
  "name": "I verify for \"search_text4\" against \"Our Portfolio\"",
  "keyword": "Then ",
  "line": 12,
  "matchedColumns": [
    2,
    3
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "URL",
      "offset": 9
    },
    {
      "val": "Mozilla",
      "offset": 18
    }
  ],
  "location": "SearchText.i_go_to_on(String,String)"
});
formatter.result({
  "duration": 11376587152,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "links4",
      "offset": 12
    }
  ],
  "location": "SearchText.i_click_on(String)"
});
formatter.result({
  "duration": 278038509,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "search_text4",
      "offset": 14
    },
    {
      "val": "Our Portfolio",
      "offset": 37
    }
  ],
  "location": "SearchText.i_verify_for_against(String,String)"
});
formatter.result({
  "duration": 5685580381,
  "status": "passed"
});
formatter.after({
  "duration": 4675377688,
  "status": "passed"
});
formatter.after({
  "duration": 212736,
  "status": "passed"
});
formatter.scenario({
  "id": "navigating-into-ericsson.com-and-verify-header/footer-text;searching-for-header-text;;6",
  "tags": [
    {
      "name": "@HeaderText_Search",
      "line": 8
    }
  ],
  "description": "",
  "name": "Searching for header text",
  "keyword": "Scenario Outline",
  "line": 20,
  "type": "scenario"
});
formatter.step({
  "name": "I go to \"URL\" on \"Mozilla\"",
  "keyword": "Given ",
  "line": 10,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "I click on \"links5\"",
  "keyword": "When ",
  "line": 11,
  "matchedColumns": [
    1
  ]
});
formatter.step({
  "name": "I verify for \"search_text5\" against \"Careers\"",
  "keyword": "Then ",
  "line": 12,
  "matchedColumns": [
    2,
    3
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "URL",
      "offset": 9
    },
    {
      "val": "Mozilla",
      "offset": 18
    }
  ],
  "location": "SearchText.i_go_to_on(String,String)"
});
formatter.result({
  "duration": 10923340497,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "links5",
      "offset": 12
    }
  ],
  "location": "SearchText.i_click_on(String)"
});
formatter.result({
  "duration": 389533277,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "search_text5",
      "offset": 14
    },
    {
      "val": "Careers",
      "offset": 37
    }
  ],
  "location": "SearchText.i_verify_for_against(String,String)"
});
formatter.result({
  "duration": 6195092492,
  "status": "passed"
});
formatter.after({
  "duration": 4710162738,
  "status": "passed"
});
formatter.after({
  "duration": 214356,
  "status": "passed"
});
formatter.scenario({
  "id": "navigating-into-ericsson.com-and-verify-header/footer-text;searching-for-footer-text;;2",
  "tags": [
    {
      "name": "@FooterText_Search",
      "line": 22
    }
  ],
  "description": "",
  "name": "Searching for footer text",
  "keyword": "Scenario Outline",
  "line": 30,
  "type": "scenario"
});
formatter.step({
  "name": "I open \"Mozilla\"",
  "keyword": "Given ",
  "line": 24,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "I navigate to \"URL\"",
  "keyword": "Then ",
  "line": 25
});
formatter.step({
  "name": "I search for \"This is Ericsson\" from the \"Footer_Box\"",
  "keyword": "Then ",
  "line": 26,
  "matchedColumns": [
    1
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "Mozilla",
      "offset": 8
    }
  ],
  "location": "SearchText.i_open(String)"
});
formatter.result({
  "duration": 6352104143,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "URL",
      "offset": 15
    }
  ],
  "location": "SearchText.i_navigate_to(String)"
});
formatter.result({
  "duration": 4421513882,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "This is Ericsson",
      "offset": 14
    },
    {
      "val": "Footer_Box",
      "offset": 42
    }
  ],
  "location": "SearchText.i_search_for_from_the(String,String)"
});
formatter.result({
  "duration": 184422211,
  "status": "passed"
});
formatter.after({
  "duration": 4881261406,
  "status": "passed"
});
formatter.after({
  "duration": 197618,
  "status": "passed"
});
formatter.scenario({
  "id": "navigating-into-ericsson.com-and-verify-header/footer-text;searching-for-footer-text;;3",
  "tags": [
    {
      "name": "@FooterText_Search",
      "line": 22
    }
  ],
  "description": "",
  "name": "Searching for footer text",
  "keyword": "Scenario Outline",
  "line": 31,
  "type": "scenario"
});
formatter.step({
  "name": "I open \"Mozilla\"",
  "keyword": "Given ",
  "line": 24,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "I navigate to \"URL\"",
  "keyword": "Then ",
  "line": 25
});
formatter.step({
  "name": "I search for \"Ericsson for\" from the \"Footer_Box\"",
  "keyword": "Then ",
  "line": 26,
  "matchedColumns": [
    1
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "Mozilla",
      "offset": 8
    }
  ],
  "location": "SearchText.i_open(String)"
});
formatter.result({
  "duration": 6604702872,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "URL",
      "offset": 15
    }
  ],
  "location": "SearchText.i_navigate_to(String)"
});
formatter.result({
  "duration": 5866159844,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ericsson for",
      "offset": 14
    },
    {
      "val": "Footer_Box",
      "offset": 38
    }
  ],
  "location": "SearchText.i_search_for_from_the(String,String)"
});
formatter.result({
  "duration": 176588772,
  "status": "passed"
});
formatter.after({
  "duration": 5134629007,
  "status": "passed"
});
formatter.after({
  "duration": 204637,
  "status": "passed"
});
formatter.scenario({
  "id": "navigating-into-ericsson.com-and-verify-header/footer-text;searching-for-footer-text;;4",
  "tags": [
    {
      "name": "@FooterText_Search",
      "line": 22
    }
  ],
  "description": "",
  "name": "Searching for footer text",
  "keyword": "Scenario Outline",
  "line": 32,
  "type": "scenario"
});
formatter.step({
  "name": "I open \"Mozilla\"",
  "keyword": "Given ",
  "line": 24,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "I navigate to \"URL\"",
  "keyword": "Then ",
  "line": 25
});
formatter.step({
  "name": "I search for \"What\u0027s on\" from the \"Footer_Box\"",
  "keyword": "Then ",
  "line": 26,
  "matchedColumns": [
    1
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "Mozilla",
      "offset": 8
    }
  ],
  "location": "SearchText.i_open(String)"
});
formatter.result({
  "duration": 6393001307,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "URL",
      "offset": 15
    }
  ],
  "location": "SearchText.i_navigate_to(String)"
});
formatter.result({
  "duration": 4675437081,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "What\u0027s on",
      "offset": 14
    },
    {
      "val": "Footer_Box",
      "offset": 35
    }
  ],
  "location": "SearchText.i_search_for_from_the(String,String)"
});
formatter.result({
  "duration": 291312376,
  "status": "passed"
});
formatter.after({
  "duration": 4817300196,
  "status": "passed"
});
formatter.after({
  "duration": 203557,
  "status": "passed"
});
formatter.scenario({
  "id": "navigating-into-ericsson.com-and-verify-header/footer-text;searching-for-footer-text;;5",
  "tags": [
    {
      "name": "@FooterText_Search",
      "line": 22
    }
  ],
  "description": "",
  "name": "Searching for footer text",
  "keyword": "Scenario Outline",
  "line": 33,
  "type": "scenario"
});
formatter.step({
  "name": "I open \"Mozilla\"",
  "keyword": "Given ",
  "line": 24,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "I navigate to \"URL\"",
  "keyword": "Then ",
  "line": 25
});
formatter.step({
  "name": "I search for \"General\" from the \"Footer_Box\"",
  "keyword": "Then ",
  "line": 26,
  "matchedColumns": [
    1
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "Mozilla",
      "offset": 8
    }
  ],
  "location": "SearchText.i_open(String)"
});
formatter.result({
  "duration": 6210820384,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "URL",
      "offset": 15
    }
  ],
  "location": "SearchText.i_navigate_to(String)"
});
formatter.result({
  "duration": 4943320951,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "General",
      "offset": 14
    },
    {
      "val": "Footer_Box",
      "offset": 33
    }
  ],
  "location": "SearchText.i_search_for_from_the(String,String)"
});
formatter.result({
  "duration": 240552682,
  "status": "passed"
});
formatter.after({
  "duration": 4823187694,
  "status": "passed"
});
formatter.after({
  "duration": 224075,
  "status": "passed"
});
formatter.scenario({
  "id": "navigating-into-ericsson.com-and-verify-header/footer-text;searching-for-footer-text;;6",
  "tags": [
    {
      "name": "@FooterText_Search",
      "line": 22
    }
  ],
  "description": "",
  "name": "Searching for footer text",
  "keyword": "Scenario Outline",
  "line": 34,
  "type": "scenario"
});
formatter.step({
  "name": "I open \"Mozilla\"",
  "keyword": "Given ",
  "line": 24,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "I navigate to \"URL\"",
  "keyword": "Then ",
  "line": 25
});
formatter.step({
  "name": "I search for \"Related sites\" from the \"Footer_Box\"",
  "keyword": "Then ",
  "line": 26,
  "matchedColumns": [
    1
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "Mozilla",
      "offset": 8
    }
  ],
  "location": "SearchText.i_open(String)"
});
formatter.result({
  "duration": 6537176442,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "URL",
      "offset": 15
    }
  ],
  "location": "SearchText.i_navigate_to(String)"
});
formatter.result({
  "duration": 5016135546,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Related sites",
      "offset": 14
    },
    {
      "val": "Footer_Box",
      "offset": 39
    }
  ],
  "location": "SearchText.i_search_for_from_the(String,String)"
});
formatter.result({
  "duration": 237526861,
  "status": "passed"
});
formatter.after({
  "duration": 4801093377,
  "status": "passed"
});
formatter.after({
  "duration": 328283,
  "status": "passed"
});
formatter.uri("CucumberStory2.feature");
formatter.feature({
  "id": "navigating-into-ericsson.com-and-verify-login",
  "description": "\r\nIn order to verify login in ericsson.com\r\nI open browser\r\nand I navigate to ericsson.com\r\nthen I click on login\nwhen I select requiresite\nand enter username and password\nand click on login\nthen I see welcome message for my name.",
  "name": "Navigating into ericsson.com and verify login",
  "keyword": "Feature",
  "line": 1
});
formatter.scenario({
  "id": "navigating-into-ericsson.com-and-verify-login;verify-login;;2",
  "tags": [
    {
      "name": "@login",
      "line": 12
    }
  ],
  "description": "",
  "name": "Verify login",
  "keyword": "Scenario Outline",
  "line": 23,
  "type": "scenario"
});
formatter.step({
  "name": "I go to \"URL\" for \"Mozilla\"",
  "keyword": "Given ",
  "line": 14,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "I clicks on \"Login\"",
  "keyword": "Then ",
  "line": 15
});
formatter.step({
  "name": "I select \"RequireSite\" for \"drpDwn\"",
  "keyword": "When ",
  "line": 16
});
formatter.step({
  "name": "I select for \"esusadh\" and \"Puki@1627\" in respective \"UsernameF\" and \"PasswordF\"",
  "keyword": "Then ",
  "line": 17,
  "matchedColumns": [
    1,
    2
  ]
});
formatter.step({
  "name": "I clicks again on \"LoginButton\"",
  "keyword": "When ",
  "line": 18
});
formatter.step({
  "name": "I verify \"WelcomeMsg1\" for \"Susanta Adhikary\"",
  "keyword": "Then ",
  "line": 19,
  "matchedColumns": [
    3,
    4
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "URL",
      "offset": 9
    },
    {
      "val": "Mozilla",
      "offset": 19
    }
  ],
  "location": "Login.i_go_to_for(String,String)"
});
formatter.result({
  "duration": 10704692612,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 13
    }
  ],
  "location": "Login.i_clicks_on(String)"
});
formatter.result({
  "duration": 296753345,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "RequireSite",
      "offset": 10
    },
    {
      "val": "drpDwn",
      "offset": 28
    }
  ],
  "location": "Login.i_select(String,String)"
});
formatter.result({
  "duration": 2633607983,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "esusadh",
      "offset": 14
    },
    {
      "val": "Puki@1627",
      "offset": 28
    },
    {
      "val": "UsernameF",
      "offset": 54
    },
    {
      "val": "PasswordF",
      "offset": 70
    }
  ],
  "location": "Login.i_select_for_and_in_respective_and(String,String,String,String)"
});
formatter.result({
  "duration": 208008920,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "LoginButton",
      "offset": 19
    }
  ],
  "location": "Login.i_clicks_again_on(String)"
});
formatter.result({
  "duration": 11601730506,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "WelcomeMsg1",
      "offset": 10
    },
    {
      "val": "Susanta Adhikary",
      "offset": 28
    }
  ],
  "location": "Login.i_verify_for(String,String)"
});
formatter.result({
  "duration": 87811950,
  "status": "passed"
});
formatter.after({
  "duration": 4878782005,
  "status": "passed"
});
formatter.after({
  "duration": 124726,
  "status": "passed"
});
});