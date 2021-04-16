(function () {
    'use strict';

    angular.module('MenuApp')
        .controller('ItemController', ItemController);

    ItemController.$inject = ['categoryWithList'];

    function ItemController(categoryWithList) {

        let controller = this;

        controller.list = categoryWithList.menu_items;
        controller.category = categoryWithList.category;



    }

})();