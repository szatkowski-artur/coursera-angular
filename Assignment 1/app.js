(function () {
    'use strict';

    angular.module('App', [])
        .controller('TooMuchController', TooMuchController);

    TooMuchController.$inject = ['$scope'];

    function TooMuchController($scope) {

        $scope.meals = "";

        $scope.checkIfTooMuch = function () {

            let meals = $scope.meals.split(",");
            let numOfMeals = meals.length - checkForEmptyElements(meals);

            if (numOfMeals === 0) {
                $scope.tooMuchMessage = 'Please enter data first';
                $scope.color = 'red';
            } else {
                $scope.tooMuchMessage = numOfMeals <= 3 ? 'Enjoy!' : 'Too much!';
                $scope.color = 'green';
            }


        }

    }

    function checkForEmptyElements(meals) {

        let count = 0;

        meals.forEach(function (meal) {

            if (meal.trim() === "")
                count++;

        });

        return count;

    }


})();