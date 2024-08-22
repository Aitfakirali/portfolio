*** Settings ***
Library           SeleniumLibrary
Test Setup        Open Browser    ${APP_URL}    ${BROWSER}
Test Teardown     Close Browser

*** Variables ***
${APP_URL}        http://localhost:3000/sinister
${BROWSER}        chrome

*** Keywords ***
Scroll Element Into View
  [Arguments]    ${locator}
  Execute JavaScript    document.querySelector("${locator}").scrollIntoView(true);

*** Test Cases ***
Verify Sinister Form
  [Documentation]    Testing the Sinister Form
  Maximize Browser Window
  Scroll Element Into View    locator=.firstRadioGroup
  Click Button    css=.firstToggle
  Scroll Element Into View    locator=.nextButton
  Click Element   css=.firstRadioGroup label
  Scroll Element Into View    locator=.nextButton
  Input Text    css=#lieu   Casablanca
  Input Text    css=#date   22 février 2023
  Input Text    css=#heure   9h34
  Click Element    css=.nextButton
# maybe add sleep to showcase
  BuiltIn.Sleep   1s
  Click Element    css=.validerButton
# maybe add sleep to showcase
  BuiltIn.Sleep   1s
  Scroll Element Into View    locator=.endButton
  Click Element   css=.endButton
  Wait Until Element Is Visible   css=.finalPopup