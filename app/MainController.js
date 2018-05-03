(function() {
   var app = angular.module("githubViewer"); // refer to the module githubViewer

    var mainController = function($scope, $interval, $location){

        var countDownInterval = null ;
        var startCountDown = function(){
            //the service $interval returns an object
            countDownInterval = $interval(countDown, 1000, $scope.countdown);
        }

        //when we click on search
        $scope.search = function(){
            if(countDownInterval){
                $interval.cancel(countDownInterval);
                $scope.countdown = null ;
            }

            $location.path("/user/" + $scope.username);
        }

        var countDown = function(){
            $scope.countdown -= 1;
            if($scope.countdown < 1)
            {
                $scope.search();

            }
        }





        $scope.username = "Angular";
        $scope.countdown = 5;

        startCountDown();
    }

   //link the controller to app: app.controller(nameController, nameFunctionInTheController)
    app.controller("MainController", mainController)

}()); //IIFE : Immediately Invoked Function Expression

