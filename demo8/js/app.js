// initialize the app
angular.module('Demo', []);

// custom filter
// filter is a function in Angular
// 'capitalize' happens to be the name we have given to this filter
// Filters always must return a function
// The parameter is whatever comes before the pipe in HTML
//
angular.module('Demo').filter('capitalize', function() {
  return function(param) {
    // Checking if we have a parameter to work with
    if (param) {
        return param[0].toUpperCase() + param.slice(1);
    }
    // The function itself then returns the value of what we want
  };
});

angular.module('Demo').filter('elmer', function() {
  return function(param) {
    if (param) {
        return param.replace(/r/g, 'w');
    }
  };
});

angular.module('Demo').filter('daffy', function() {
  return function(param) {
    // Checking if we have a parameter to work with
    if (param) {
        return param.replace(/s/g, 'th');
    }
  };
});

angular.module('Demo').filter('reverseDaffy', function() {
  return function(param) {
    // Checking if we have a parameter to work with
    if (param) {
      var daffified = param.replace(/s/g, 'th');
      return daffified.split('').reverse().join('');
    }
  };
});

angular.module('Demo').controller('DafCtrl', function($scope){
  $scope.AngString = "";
});

angular.module('Demo').filter('reverseDaffy', function() {
  return function(param) {
    // Checking if we have a parameter to work with
    if (param) {
      var daffified = param.replace(/s/g, 'th');
      return daffified.split('').reverse().join('');
    }
  };
});

angular.module('Demo').filter('reverseElmer', function() {
  return function(param) {
    // Checking if we have a parameter to work with
    if (param) {
      var elmerfied = param.replace(/r/g, 'w');
      return elmerfied.split('').reverse().join('');
    }
  };
});
