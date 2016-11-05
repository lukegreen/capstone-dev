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

    //get data from API
    $scope.roverData = roverData.query();
    $scope.roverData.$promise.then(function(data){
    console.log(data);
    console.log(data.photos[0]);

    $scope.roverName = data.photos[0].rover.name;
    $scope.roverLaunchDate = data.photos[0].rover.launch_date;
    $scope.roverLandingDate = data.photos[0].rover.landing_date;
    $scope.roverStatus = data.photos[0].rover.status;
    $scope.roverTotalPhotos = data.photos[0].rover.total_photos;
    console.log($scope.roverStatus);
  });

});
