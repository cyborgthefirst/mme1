
//$(document).ready(function(){
    
    var ContentApp = angular.module("ContentApp", ["ngRoute"]);
    
    ContentApp.config(function($routeProvider){
        $routeProvider.
        when("/home",{
            templateUrl: "contentPage/homePage.html"
            //controller: 'CountryDetailCtrl'
        }).
        when("/discover",{
            templateUrl: "contentPage/discoverPage.html",
            controller: "discoverTableCtrl"
        }).
        when("/contribute",{
            templateUrl: "contentPage/contributePage.html"
        }).
        when("/contact",{
            templateUrl: "contentPage/contactPage.html"
        }).
        when("/impressum",{
            templateUrl: "contentPage/impressumPage.html"
        }).
        otherwise({
            redirectTo : "/home"
        });
    });
    ContentApp.controller('discoverTableCtrl', function ($scope, $http){
        $http.get("journeysExample.json").success(function(data){
            $scope.journeys = data;
        })
    });
    //ContentApp.name = "John";

//});
