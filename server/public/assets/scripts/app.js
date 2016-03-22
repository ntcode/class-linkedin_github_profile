var myApp = angular.module("myApp", []);

myApp.controller("IntroController", ["$scope", "$http", function($scope, $http){

    $scope.getData = function(){
        $http.get("/class_git_lnk").then(function(response){
          console.log(response.data);
          $scope.allStudents = response.data.students;
        });

        console.log("Am I second? Or first?");
    };

    // $scope.getData();
}]);
