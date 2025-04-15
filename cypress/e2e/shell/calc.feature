Feature: Calc testing

  Scenario: Calc creation
    Given user open the calc page
    When user creates a parent with name "Testing Parent"
    When user creates a category with name "Testing Category" under "Testing Parent"
    When user creates a new calc with name "Test Calc" description "Test Calc description" type "Excel" and category "Testing Category"
    When user clicks on "save" 
    When user clicks on "edit"
    When user uploads the calc file "calc.xlsx"
