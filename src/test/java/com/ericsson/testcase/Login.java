package com.ericsson.testcase;

import com.ericsson.Util.WebConnector;

import cucumber.api.java.After;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Login {
	

	//You can implement missing steps with the snippets below:
	WebConnector selenium = WebConnector.getInstance();	
	@Given("^I go to \"(.*?)\" for \"(.*?)\"$")
	public void i_go_to_for(String URL, String Browser) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		selenium.openBrowser(Browser);
		selenium.navigate(URL);
		System.out.println("test case 7 passed");
	}

	@Then("^I clicks on \"(.*?)\"$")
	public void i_clicks_on(String Login) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		selenium.click(Login);
		System.out.println("test case 8 passed");
	}

	@When("^I select \"(.*?)\" for \"(.*?)\"$")
	public void i_select(String RequireSite,String drpDwn) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		selenium.selectDropDown(RequireSite, drpDwn);
		System.out.println("test case 9 passed");
	}

	@Then("^I select for \"(.*?)\" and \"(.*?)\" in respective \"(.*?)\" and \"(.*?)\"$")
	public void i_select_for_and_in_respective_and(String UserName, String Password, String UsernameF, String PasswordF) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		selenium.enter(UsernameF, UserName);
		selenium.enter(PasswordF, Password);
		System.out.println("test case 10 passed");
	}

	@When("^I clicks again on \"(.*?)\"$")
	public void i_clicks_again_on(String login_btn) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		selenium.click(login_btn);
		System.out.println("test case 11 passed"); 
	}

	@Then("^I verify \"(.*?)\" for \"(.*?)\"$")
	public void i_verify_for(String WelcomeMsg1, String MyName) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		selenium.verify_login_msg(WelcomeMsg1, MyName);
		System.out.println("test case 12 passed");
	}

	@After
	public void closeBrowser(){
		selenium.driverclose();
	
	}

}
