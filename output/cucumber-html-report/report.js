$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("CucumberStory1.feature");
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
  "duration": 23966989392,
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
  "duration": 368006972,
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
  "duration": 12447436639,
  "status": "passed"
});
formatter.after({
  "duration": 8105476606,
  "status": "passed"
});
formatter.after({
  "duration": 361764,
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
  "duration": 17158568844,
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
  "duration": 576630863,
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
  "duration": 13648247528,
  "status": "passed"
});
formatter.after({
  "duration": 5182509459,
  "status": "passed"
});
formatter.after({
  "duration": 303449,
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
  "duration": 16367188415,
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
  "duration": 462065365,
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
  "duration": 9461770015,
  "status": "passed"
});
formatter.after({
  "duration": 5163654044,
  "status": "passed"
});
formatter.after({
  "duration": 277532,
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
  "duration": 18465833639,
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
  "duration": 494277934,
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
  "duration": 11252478752,
  "status": "passed"
});
formatter.after({
  "duration": 4889095327,
  "status": "passed"
});
formatter.after({
  "duration": 267812,
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
  "duration": 17177382682,
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
  "duration": 483749550,
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
  "duration": 17686524759,
  "status": "passed"
});
formatter.after({
  "duration": 4988662238,
  "status": "passed"
});
formatter.after({
  "duration": 268893,
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
  "duration": 7960409624,
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
  "duration": 9040681065,
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
  "duration": 303822108,
  "status": "passed"
});
formatter.after({
  "duration": 4987730833,
  "status": "passed"
});
formatter.after({
  "duration": 255934,
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
  "duration": 7740602395,
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
  "duration": 10883633245,
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
  "duration": 330158998,
  "status": "passed"
});
formatter.after({
  "duration": 4976954074,
  "status": "passed"
});
formatter.after({
  "duration": 295350,
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
  "duration": 7875839141,
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
  "duration": 10002606854,
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
  "duration": 285702099,
  "status": "passed"
});
formatter.after({
  "duration": 5545111043,
  "status": "passed"
});
formatter.after({
  "duration": 249455,
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
  "duration": 8247857904,
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
  "duration": 9643939848,
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
  "duration": 396741217,
  "status": "passed"
});
formatter.after({
  "duration": 4969591386,
  "status": "passed"
});
formatter.after({
  "duration": 246754,
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
  "duration": 7648222691,
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
  "duration": 9110768606,
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
  "duration": 407571971,
  "status": "passed"
});
formatter.after({
  "duration": 5021079987,
  "status": "passed"
});
formatter.after({
  "duration": 244595,
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
  "duration": 16904873057,
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
  "duration": 521194725,
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
  "duration": 4127411326,
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
  "duration": 387184733,
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
  "duration": 13470580294,
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
  "duration": 155016547,
  "status": "passed"
});
formatter.after({
  "duration": 5351309718,
  "status": "passed"
});
formatter.after({
  "duration": 171702,
  "status": "passed"
});
});