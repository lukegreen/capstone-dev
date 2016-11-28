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
    'ngTouch',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/curiosity', {
        templateUrl: 'views/curiosity.html',
        controller: 'CuriosityCtrl',
        controllerAs: 'curiosity'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/roverView', {
        templateUrl: 'views/roverview.html',
        controller: 'RoverviewCtrl',
        controllerAs: 'roverView'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
