var app = angular.module('myApp', []);

app.controller("MainController", function($scope) {
    $scope.title = "It is working.";

});

app.controller('MathController', function($scope) {

    $scope.salary = 0;
    $scope.studentLoans = 0;
    $scope.duration = 0;
    $scope.totalIncome = 0;
    $scope.estimatedMonthlyCosts

    $scope.monthlyAllowance = function() {
        return (Number($scope.salary) + ((Number($scope.studentLoans) / (Number($scope.duration)))) - (Number(estimatedMonthlyCosts)));
    }


});