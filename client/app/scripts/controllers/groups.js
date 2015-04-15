'use strict';

angular.module('angrailsApp')
  .controller('GroupsCtrl', ['$scope', 'Group', function($scope, Group) {
    $scope.groups = Group.query();
    console.info($scope.groups);
  }]);