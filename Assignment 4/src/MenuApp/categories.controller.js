(function () {
    'use strict';

    angular.module('MenuApp')
        .controller('CategoriesController', CategoriesController);

    CategoriesController.$inject = ['list'];
    function CategoriesController(list) {

        let controller = this;
        controller.name = 'This is a test name';
        let temp = [
            {id: 1, name: 'Some'},
            {id: 2, name: 'Any'},
            {id: 3, name: 'Nope'},
        ];

        controller.list = list;

    }

})();