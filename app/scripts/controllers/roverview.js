'use strict';

/**
 * @ngdoc function
 * @name capstoneDevApp.controller:RoverviewCtrl
 * @description
 * # RoverviewCtrl
 * Controller of the capstoneDevApp
 */
angular.module('capstoneDevApp')
  .controller('RoverviewCtrl', function ($scope, roverData) {


    $scope.setName = function(clickEvent) {
      $scope.roverName = clickEvent.currentTarget.name;
      console.log($scope.roverName);

      //get data from API
      function init(){
        $scope.roverData = roverData.query({roverName: $scope.roverName});
        $scope.roverData.$promise.then(function(data){
          $scope.maxSol = data.photos[0].rover.max_sol;
          $scope.roverDataTwo = roverData.query({
            maxSol: $scope.maxSol
          });
          $scope.roverDataTwo.$promise.then(function(data){

          //Manifest
          //$scope.roverName = data.photos[0].rover.name;
          $scope.roverLaunchDate = data.photos[0].rover.launch_date;
          $scope.roverLandingDate = data.photos[0].rover.landing_date;
          $scope.roverStatus = data.photos[0].rover.status;
          $scope.roverTotalPhotos = data.photos[0].rover.total_photos;
          console.log(data.photos[0].sol);
          //Most recent photo
          $scope.mostRecent = data.photos[0].img_src;
          console.log($scope.mostRecent);
        });
      });
    }

    init();

  };
});
