'use strict';

/**
 * @ngdoc service
 * @name capstoneDevApp.roverData
 * @description
 * # roverData
 * Factory in the capstoneDevApp.
 */
angular.module('capstoneDevApp')
  .factory('roverData', function ($resource) {
    // Service logic
    // ...

    // Public API here
     return $resource('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=soma08IimfFaJ8eSYCZpnsQxLEr01sMJflVPLtZx', {}, {
       query: {
         method:'GET',
         params:{

        },
         isArray:false
       }
     });
  });
