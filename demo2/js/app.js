// initialize the app
// Modules in Angular are a way to organize code.
// We define demo as our module and it has no dependencies '[]'
// If there were dependencies, it would list the name of the other modules in single quotes with comma separation.
angular.module('Demo', []);

// main controller
// First param is what the controller is called
// The second param is what the controller does
// Applies only to the tag this controller attribute is associated with
angular.module('Demo').controller('MainCtrl', function($scope) {
    'use strict';

    // basic scope properties
    // This is taking the place of ng-init in Demo/Ex. 1
    // $scope comes from angular. Anytime you want to use it you have to pass it as a parameter in the controller def.
    // Let's Angular know that this controller function needs to use $scope.
    // Scope is a bridge b/t template/view and your controller - can now call these values in HTML
    $scope.greeting = 'Hello';

    $scope.person = {
        firstName: 'Dan',
        lastName: 'Johnson'
    };

    // update scope properties using $watch
    // these are not accessible in template. kind of like private variables.
    // can only access variables definied with $scope
    var redFruits = ['apple', 'cherry', 'strawberry'];
    var greenFruits = ['kiwi', 'avocado', 'honeydew'];

    // The way scope works, if something isn't there, it'll create it for you.
    // If we don't define it here, it'll just assume it's null initially and then will evaluate everything else
    // Would still work without this. Just helps to understand the code better.
    $scope.favFruits = [];

    // We're watching for the value
    // Every time favorite color changes, it will run this function
    // Every time you type a letter it will run this function
    $scope.$watch('favColor', function(newValue, oldValue) {
        // switch statement can take place of certain if-else logic. is often cleaner.
    	switch (newValue) {
    		case 'red':
    			$scope.favFruits = redFruits;
    			break;

    		case 'green':
    			$scope.favFruits = greenFruits;
    			break;

    		default:
    			$scope.favFruits = [];
    			break;
    	}
    });
});
