'use strict';

/**
 * @ngdoc function
 * @name angrailsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angrailsApp
 */
angular.module('angrailsApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
