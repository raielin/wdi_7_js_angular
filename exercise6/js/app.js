angular.module('Demo', []);

angular.module('Demo').controller('MainCtrl', function($scope, $http) {
  'use strict';

  $http.get('http://localhost:3000/skills').success(function(response) {
    $scope.skills = response;
  });

  $scope.createSkills = function(skill) {
    var params = {
      skill: skill
    };

    if (skill.id) {
      $http.put('http://localhost:3000/skills/' + skill.id, params).success(function(response) {
        $scope.skill = response;
      });
    } else {
        $http.post('http://localhost:3000/skills', params).success(function(response) {
          $scope.skills.push(response)
        });
    }

    $scope.skill = {};

  };

  $scope.editSkill = function(skill) {
    // $scope.skill here is linked to ng-model="skill.name" in HTML
    // Angular watches for any changes, and automatically
    // updates the element that is linked to the relevant
    // controller
    $scope.skill = skill;
  };

  $scope.deleteSkill = function(skill) {
    $http.delete('http://localhost:3000/skills/' + skill.id).success(function(response) {
      // remove from skills array by id
      for (var i = 0; i < $scope.skills.length; i++) {
        if ($scope.skills[i].id == skill.id) {
          $scope.skills.splice(i, 1);

      // Another way to do this is to get the new array
      // $http.get('http://localhost:3000/users').success(function(response) {
        // $scope.users = response;
      // });

      // Can get index of the skill and then splice it without looping.

          break;
        }
      }
    });
  };
});

// $(".dropdown-menu li a").click(function(){
//   $(this).parents(".input-group-btn").find('.btn').text($(this).text());
//   $(this).parents(".input-group-btn").find('.btn').val($(this).data('value'));
// });
