(function () {
    'use strict';

    angular.module('MenuApp')
        .component('categories', {
            templateUrl: 'src/views/categories-list.html',
            bindings: {
                list: '<'
            }
        });

})();