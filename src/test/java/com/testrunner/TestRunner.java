package com.testrunner;
import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(features= {"C:\\Users\\Lenovo\\eclipse-workspace\\NewPratice\\src\\test\\resources\\login.feature"},glue= {"com.stepdefinition"},
tags= {"~@smaoke","~@Regression","@LoginWithDataTable"})
public class TestRunner {

}
