
//$(document).ready(function(){
    
    var ContentApp = angular.module("ContentApp", ["ngRoute"]);
    
    ContentApp.config(function($routeProvider){
        $routeProvider.
            when("/home",{
                template: '<p>hi</p>',
                controller: 'CountryDetailCtrl'
                //templateURL: "contentPage/homePage.html"             
            }).
            when("/discover",{
                templateURL: "contentPage/discoverPage.html"
            }).
            //when().
            //when().
            otherwise({
                redirectTo : "/home"
            });
    });
    ContentApp.controller('CountryDetailCtrl', function ($scope, $routeParams){
        console.log($routeParams);
    });
    //ContentApp.name = "John";

//});
