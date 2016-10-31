"use strict";angular.module("capstoneDevApp",["ngAnimate","ngAria","ngCookies","ngMessages","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).otherwise({redirectTo:"/"})}]),angular.module("capstoneDevApp").controller("MainCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("capstoneDevApp").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("capstoneDevApp").run(["$templateCache",function(a){a.put("views/about.html",'<h2 class="light-body">About RoverTrak</h2> <p class="light-body">RoverTrak is a mobile application completed as the capstone project for WATS 4030, the final course in the Seattle University Web Development Certificate program.</p> <p class="light-body">This is a \'beta\' version of RoverTrak. The fully developed app will be mobile-only and available via the Google Store.</p>'),a.put("views/main.html",'<div class="jumbotron"> <h1>RoverTrak</h1> <p class="lead"> Welcome to the RoverTrak development site. This is where we will wire up the functionality of the RoverTrak mobile app! </p> <p><a class="btn btn-lg btn-success" ng-href="https://api.nasa.gov/">NASA Open APIs</a></p> </div> <div class="row marketing"> <div class="light-body"> <h4>Mission View</h4> <p> The mission view will show current mission-related data for your rover of choice. </p> <h4>History View</h4> <p> The history view will show background information about each rover. </p> <h4>Camera View</h4> <p>The camera view will allow you to see the most recent photo imagery from any rover camera.</p> </div> </div>')}]);