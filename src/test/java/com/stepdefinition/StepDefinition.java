package com.stepdefinition;

import java.util.List;
import java.util.Map;

import org.openqa.selenium.WebElement;

import New.pratices.BaseClass;
import New.pratices.POM;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;



public class StepDefinition extends BaseClass {
	public POM pom;
	@Given("user is on facebook page")
	public void user_is_on_facebook_page() {
System.out.println("Starting browser");
getDriver("Chrome");
url("https://www.facebook.com/");
	}

	@When("user enters userName and password")
	public void user_enters_useerNameand_password() {
	 
	    
	}

	@And("user click login button")
	public void user_click_login_button() {
	   pom=new POM();
	   WebElement login=pom.getLogin();
	   textClick(login);
	}
	@When("user enters userName {string}and password{string}")
	public void user_enters_userName_and_password(String userName1, String pwd1) {
		 pom=new POM();
		    WebElement userrName =pom.getuserName();
		    textSend(userrName, userName1);
		    WebElement pwd=pom.getPwd();
		    textSend(pwd, pwd1);
	}

	@Then("user successfully displayed")
	public void user_successfully_displayed() {
	  System.out.println("Login successful");
	  quitBrowser();
	}
	@When("user enters userName and password with database")
	public void user_enters_userName_and_password_with_database(io.cucumber.datatable.DataTable dataTable) {
		List<Map<String,String>>asMaps=dataTable.asMaps();
		 pom=new POM();
		    WebElement userrName =pom.getuserName();
		    textSend(userrName, asMaps.get(1).get("email"));
		    WebElement pwd=pom.getPwd();
		    textSend(pwd, asMaps.get(0).get("password"));
	}





}
