// initialize the app
angular.module('Demo', []);

// main controller
angular.module('Demo').controller('MainCtrl', function($scope) {
    'use strict';

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

    $scope.createUser = function(user) {
        $scope.users.push(user);

<<<<<<< HEAD
        // Once we've added a user, we will set $scope.user to an empty object to reset it.
=======
>>>>>>> 3a821d7380c0c1e54619cc13524c113a2fd04aeb
        $scope.user = {};
    };

    // NOTHING PERSISTS HERE. Reloading page resets all the values.
});
