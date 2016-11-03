'use strict';

/**
 * @ngdoc function
 * @name capstoneDevApp.controller:ManifestCtrl
 * @description
 * # ManifestCtrl
 * Controller of the capstoneDevApp
 */
angular.module('capstoneDevApp')
  .controller('ManifestCtrl', function ($scope, roverData) {

    console.log('hello');

    //get data from API
    $scope.roverVariable = roverData.query();
    var roverVariable = $scope.roverVariable;
    var problemTest = roverVariable.photos;
    console.log(problemTest);


  });
