// initialize the app
angular.module('Demo', []);

// main controller
angular.module('Demo').controller('MainCtrl', function($scope) {
    'use strict';

    // Users is an array of objects.
    // Every user here is a javascript object.
    $scope.users = [{
        first_name: 'dan',
        last_name: 'johnson'
    }, {
        first_name: 'ella',
        last_name: 'johnson'
    }, {
        first_name: 'ava',
        last_name: 'johnson'
    }];
});
