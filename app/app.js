(function () {
    var app = angular.module("githubViewer", ["ngRoute"]); // define/create the module githubViewer

    app.config(function($routeProvider){
      $routeProvider
          .when("/main", {
              templateUrl: "main.html",
              controller: "MainController"
          })
          .when("/user/:username", {
              templateUrl: "userDetails.html",
              controller: "UserController"
          })
          .when("/repo/:username/:repo", {
              templateUrl: "repoDetails.html",
              controller: "RepoController"
          })
          .otherwise({redirectTo:"/main"})

    })
}());