Feature: User Login

  Scenario: Successful login
    Given user open the login page
    When user enter valid credentials
    Then user should be redirected to the dashboard
