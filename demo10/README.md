- Run `bower install` in this directory to install required JS libraries.
- Run `ruby -run -e httpd -- -p 5000 .` and then open [http://localhost:5000](http://localhost:5000) in your browser to see the contents of this folder. Press `control-c` to stop the server.

## To run the tests

- Run `npm install -g protractor` from anywhere
- Run `webdriver-manager update` from anywhere
- Run `webdriver-manager start` from anywhere
- Run `protractor conf.js` in the test directory

Protractor is an Angular testing tool built on WebDriverJS which is a layer on top of Selenium - a tool to automate browsers - that allows us to run tests from a user's point of view.

Only tests if the functionality correct
