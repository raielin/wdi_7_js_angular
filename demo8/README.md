- Run `bower install` in this directory to install required JS libraries.
- Run `ruby -run -e httpd -- -p 5000 .` and then open [http://localhost:5000](http://localhost:5000) in your browser to see the contents of this folder. Press `control-c` to stop the server.

To run tests

- Run `npm install -g karma karma-cli` from anywhere
- Run `npm install` in this directory
    > Looks at package.json and installs all the dependencies for Karma
    > We will write our tests in Jasmine and run them in Karma
    > Now we have node_modules and bower_components
- Run `karma start` in the test directory

