$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:/C:/Users/Lenovo/eclipse-workspace/NewPratice/src/test/resources/login.feature");
formatter.feature({
  "name": "Validate the facebook functionality",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Login"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Validate the login detail",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "user is on facebook page",
  "keyword": "Given "
});
formatter.step({
  "name": "user enters userName \"\u003cuserName\u003e\"and password\"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user click login button",
  "keyword": "And "
});
formatter.step({
  "name": "user successfully displayed",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "userName",
        "password"
      ]
    },
    {
      "cells": [
        "arun@gmail.com",
        "0000"
      ]
    }
  ]
});
formatter.background({
  "name": "Given user is on facebook page",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the login detail",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "user is on facebook page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.user_is_on_facebook_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters userName \"arun@gmail.com\"and password\"0000\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.user_enters_userName_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_click_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user successfully displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_successfully_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Given user is on facebook page",
  "description": "",
  "keyword": "Background"
});
formatter.scenario({
  "name": "Validate the single login detail",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "user enters userName and password",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.user_enters_useerNameand_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_click_login_button()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchSessionException: Session ID is null. Using WebDriver after calling quit()?\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-B0FE53H\u0027, ip: \u0027192.168.239.43\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.9\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:125)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElements(RemoteWebDriver.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementsByName(RemoteWebDriver.java:408)\r\n\tat org.openqa.selenium.By$ByName.findElements(By.java:276)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElements(RemoteWebDriver.java:311)\r\n\tat org.openqa.selenium.support.pagefactory.ByAll.findElement(ByAll.java:53)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat jdk.proxy2/jdk.proxy2.$Proxy21.click(Unknown Source)\r\n\tat New.pratices.BaseClass.textClick(BaseClass.java:56)\r\n\tat com.stepdefinition.StepDefinition.user_click_login_button(StepDefinition.java:31)\r\n\tat ✽.user click login button(file:/C:/Users/Lenovo/eclipse-workspace/NewPratice/src/test/resources/login.feature:17)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
});