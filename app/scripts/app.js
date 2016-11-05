'use strict';

/**
 * @ngdoc overview
 * @name capstoneDevApp
 * @description
 * # capstoneDevApp
 *
 * Main module of the application.
 */
angular
  .module('capstoneDevApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngStorage',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/manifest', {
        templateUrl: 'views/manifest.html',
        controller: 'ManifestCtrl',
        controllerAs: 'manifest'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
