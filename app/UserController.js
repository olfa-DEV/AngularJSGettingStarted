(function() {
    var app = angular.module("githubViewer"); // refer to the module githubViewer

    var UserController = function($scope, github, $routeParams){

        var onUserComplete = function(response){
            $scope.user = response;
            console.log ($scope.user);
            github.getRepos($scope.user).then(onRepos);
        }

        var onRepos = function(data){
            $scope.repos = data;
        }

       /* //when we click on search
        $scope.search = function(){
            $log.info("Searching for "+ $scope.username);
            github.getUser($scope.username).then(onUserComplete);
            if(countDownInterval){
                $interval.cancel(countDownInterval);
                $scope.countdown = null ;
            }
        }




        var countDown = function(){
            $scope.countdown -= 1;
            if($scope.countdown < 1)
            {
                $scope.search();

            }
        }*/


        $scope.username = $routeParams.username;
        $scope.repoSortOrder = '-stargazers_count';
        github.getUser($scope.username).then(onUserComplete);
    }

    //link the controller to app: app.controller(nameController, nameFunctionInTheController)
    app.controller("UserController", UserController)

}()); //IIFE : Immediately Invoked Function Expression

