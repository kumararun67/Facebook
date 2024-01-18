@Login
Feature:Validate the facebook functionality
@Regression
Scenario Outline:Validate the login detail
Given user is on facebook page
When user enters userName "<userName>"and password"<password>"
And user click login button
Then user successfully displayed
Examples:
|userName|password|
|arun@gmail.com|0000|

@Smoke
Scenario:Validate the single login detail
Given user is on facebook page
When user enters userName and password
And user click login button
@LoginWithDataTable
Scenario: Validate the login detail with data base concept
Given user is on facebook page
When user enters userName and password with database
#2D without header
|email|password|name|
|Test1@gmail.com|9099|Arun|
|Test2@gmail.com|9099|Kumar|
And user click login button
Then user successfully displayed


