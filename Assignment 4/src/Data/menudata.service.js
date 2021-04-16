(function () {
    'use strict';

    angular.module('data')
        .service('MenuDataService', MenuDataService)
        .constant('baseURL', 'https://davids-restaurant.herokuapp.com/');

    MenuDataService.$inject = ['$http', 'baseURL'];
    function MenuDataService($http, baseURL) {

        let service = this;

        service.getAllCategories = () => {

            return $http.get(baseURL + 'categories.json');

        }

        service.getItemsForCategory = categoryShortName => {

            return $http.get(baseURL + 'menu_items.json?category=' + categoryShortName);

        }


    }

})();