var appmodule = angular.module("myapp", ['ngRoute']);

appmodule.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    // $locationProvider.html5Mode({
    //    enabled: true,
    //    requireBase: false
    // });
    $routeProvider
        .when("/", {
            controller: "homeController",
            templateUrl: "./templates/home.html"
        })
        .when("/contact", {
            controller: "contactController",
            templateUrl: "./templates/contact.html"
        })
		.when("/campus", {
            controller: "campusController",
            templateUrl: "./templates/campus.html"
        })
        .when("/gallery", {
            controller: "galleryController",
            templateUrl: "./templates/gallery.html"
        })
        .when("/about", {
            controller: "aboutController",
            templateUrl: "./templates/about.html"
        })
        .when("/calendar", {
            controller: "calendarController",
            templateUrl: "./templates/calendar.html"
        })
        .when("/facilities", {
            controller: "facilitiesController",
            templateUrl: "./templates/facilities.html"
        })
        .when("/academics", {
            controller: "academicsController",
            templateUrl: "./templates/academics.html"
        })
        .when("/news", {
            controller: "newsController",
            templateUrl: "./templates/news.html"
        })
        // .when("/message/:id", {
        //     controller: "singleTopicController",
        //     templateUrl: "/templates/newRepliesView.html"
        // })

    $routeProvider.otherwise({ redirectTo:"/" });
}]);

appmodule.controller("homeController", function ($scope,dataService) {
		$scope.notices= dataService.getAllNotices();
		$scope.galleries=dataService.getTopGalleries();
        $scope.calendar = dataService.getCalendarForMonth();
        $scope.currentMonth = dataService.getCurrentMonth();
});
appmodule.controller("contactController", function ($scope) {
		$scope.heading='Contact';
});
appmodule.controller("campusController", function ($scope) {
		$scope.heading='Campus';
});
appmodule.controller("galleryController", function ($scope,dataService) {
        $scope.heading='Gallery';
        $scope.allGalleries = dataService.getGalleries();
});
appmodule.controller("aboutController", function ($scope) {
		$scope.heading='About MPS';
});
appmodule.controller("calendarController", function ($scope,dataService) {
        $scope.heading='School Calendar';
        $scope.calendar = dataService.getCalendar();
});
appmodule.controller("facilitiesController", function ($scope) {
        $scope.heading='Facilities';
});
appmodule.controller("academicsController", function ($scope) {
		$scope.heading='Academics';
});
appmodule.controller("newsController", function ($scope) {
		$scope.heading='News';
});
