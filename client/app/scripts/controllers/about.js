'use strict';

/**
 * @ngdoc function
 * @name angrailsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angrailsApp
 */
angular.module('angrailsApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
