'use strict';

/**
 * @ngdoc function
 * @name currentlyApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the currentlyApp
 */
angular.module('currentlyApp')
    .controller('MainCtrl', function ($scope, localStorageService) {
        var todosInStore = localStorageService.get('todos');

        $scope.todos = todosInStore && todosInStore.split('\n') || [];

        $scope.$watch('todos', function () {
            localStorageService.add('todos', $scope.todos.join('\n'));
        }, true);

//        $scope.todos = [];

        $scope.addTodo = function () {
            if ($scope.todo === null || $scope.todo === '') {
                window.alert("You have to type something !");
                return;
            } else {
                $scope.todos.push($scope.todo);
                $scope.todo = '';
            }
        };
        $scope.removeTodo = function (index) {
            $scope.todos.splice(index, 1);
        };
    });
