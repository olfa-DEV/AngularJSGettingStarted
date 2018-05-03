(function() {
    var app = angular.module("githubViewer"); // refer to the module githubViewer

    var RepoController = function($scope, github, $routeParams){

        var onRepo = function(data){
            $scope.repo = data;
        };

        var onError = function(reason){
            $scope.error = reason;
        };

        var reponame = $routeParams.repo;
        var username = $routeParams.username;

        github.getRepoDetails(username, reponame)
            .then(onRepo, onError);
    }

    //link the controller to app: app.controller(nameController, nameFunctionInTheController)
    app.controller("RepoController", RepoController)

}()); //IIFE : Immediately Invoked Function Expression

