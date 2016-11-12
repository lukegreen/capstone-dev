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
      .when('/opportunity', {
        templateUrl: 'views/opportunity.html',
        controller: 'OpportunityCtrl',
        controllerAs: 'opportunity'
      })
      .when('/spirit', {
        templateUrl: 'views/spirit.html',
        controller: 'SpiritCtrl',
        controllerAs: 'spirit'
      })

      //other views
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
      .when('/cameras', {
        templateUrl: 'views/cameras.html',
        controller: 'CamerasCtrl',
        controllerAs: 'cameras'
      })
      .when('/history', {
        templateUrl: 'views/history.html',
        controller: 'HistoryCtrl',
        controllerAs: 'history'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
