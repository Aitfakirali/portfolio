# Setting up Robot Framework

- Make sure you have python installed.
- Install Robot Framework by running the following command:
  `pip install robotframework`
- Install the SeleniumLibrary for Robot Framework by running the following command:
  `pip install robotframework-seleniumlibrary`
- Install the appropriate WebDriver for the browser you intend to use for testing. for example installing geckodriver in Mac.
  `brew install geckodriver --cask`
- Run a Robot Framework test file by running the following command:
  `robot react_app_test.robot`
- Or run multiple Robot Framework test files sequentially by running the following command:
  `robot tests_folder`
