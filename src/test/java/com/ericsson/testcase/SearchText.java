package com.ericsson.testcase;

import com.ericsson.Util.WebConnector;

import cucumber.api.java.After;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class SearchText {
	


	//You can implement missing steps with the snippets below:
	WebConnector selenium = WebConnector.getInstance();
	@Given("^I go to \"(.*?)\" on \"(.*?)\"$")
	public void i_go_to_on(String URL, String browser) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	  
	  selenium.openBrowser(browser);
	  selenium.navigate(URL);
	   System.out.println("test case 1 passed");
	}

	@When("^I click on \"(.*?)\"$")
	public void i_click_on(String Links) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	selenium.click(Links);
		  System.out.println("test case 2 passed");
	}

	@Then("^I verify for \"(.*?)\" against \"(.*?)\"$")
	public void i_verify_for_against(String Search_Text, String Expected_Result) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	selenium.verify_text(Search_Text, Expected_Result);
		  System.out.println("test case 3 passed");
	}

	@Given("^I open \"(.*?)\"$")
	public void i_open(String browser) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	selenium.openBrowser(browser);
		System.out.println("test case 4 passed");
	}

	@Then("^I navigate to \"(.*?)\"$")
	public void i_navigate_to(String URL) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	selenium.navigate(URL);
		System.out.println("test case 5 passed");
	}

	@Then("^I search for \"(.*?)\" from the \"(.*?)\"$")
	public void i_search_for_from_the(String Footer_Text, String Footer_Box) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		selenium.verify_footer(Footer_Text, Footer_Box);
		System.out.println("test case 6 passed");
	}

	@After
	public void closeBrowser(){
		selenium.driverclose();
	
	}


}
