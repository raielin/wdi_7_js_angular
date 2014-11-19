// Include "angular-route"; "~1.3.2" in bower.json
// lots of other angular dependencies you can bring in when you
// need them. Makes the app leaner.
// initialize the app
// Declare Angular routes as a dependency so that Angular knows to pull in the
// code we installed with bower.
angular.module('Demo', [
    'ngRoute'
]);

angular.module('Demo').config(function($routeProvider) {
    'use strict';

    // Similar to backbone router. Angular routes gives us $routeProvider.
    // .when maps up to routes.
    // Don't need to put in the hash - Angular assumes that, can
    // see it in the browser address bar. Routing starts after the hash.
    // Templates are JUST HTML files. Go to HTML file - look for ng-view.
    $routeProvider
        .when('/', {
            templateUrl: 'templates/home.html'
        })
        .when('/about', {
            templateUrl: 'templates/about.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});

// Gives us the animation to make the current page 'active'
// $location gives us the current location
angular.module('Demo').controller('NavbarCtrl', function($scope, $location) {
    'use strict';

    $scope.isActive = function(viewLocation) {
        return viewLocation === $location.path();
    };
});
