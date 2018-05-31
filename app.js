"use strict";
var myapp = angular.module('myapp',['ngRoute','controller']);
myapp.config(function($routeProvider){	
	$routeProvider
	.when('/',{		
		templateUrl:'templete/home.html'
	})
	.when('/home',{		
	templateUrl:'templete/home.html'
	})
	.otherwise({
		redirectTo:'/'
	});
});