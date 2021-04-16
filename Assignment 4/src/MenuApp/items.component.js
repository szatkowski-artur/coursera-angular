(function () {
    'use strict';

    angular.module('MenuApp')
        .component('items', {
            templateUrl: 'src/views/items-list.html',
            bindings: {
                list: '<'
            }
        })

})();