(function () {
    'use strict';

    angular.module('Assignment3', [])
        .controller('NarrowItDownController', NarrowItDownController)
        .service('MenuSearchService', MenuSearchService)
        .directive('foundItems', FoundItems)
        .constant('URL', 'https://davids-restaurant.herokuapp.com/menu_items.json');


    function FoundItems() {

        return {
            templateUrl: 'FoundItems.html',
            restrict: 'E',
            scope: {
                foundItems: '<',
                onRemove: '&'
            }
        }
    }


    NarrowItDownController.$inject = ['MenuSearchService'];

    function NarrowItDownController(MenuSearchService) {

        let controller = this;

        controller.found = [];
        controller.searchTerm = '';
        controller.message = '';

        controller.search = function () {

            MenuSearchService.getMatchedMenuItems(controller.searchTerm)
                .then(response => {
                    controller.found = response.items;
                    controller.message = response.message;
                });
        }

        controller.removeItem = itemIndex => {

            controller.found.splice(itemIndex, 1);

        }
    }

    MenuSearchService.$inject = ['$http', 'URL', '$q'];

    function MenuSearchService($http, URL, $q) {

        let service = this;

        service.getMatchedMenuItems = function (searchFilter) {

            if (searchFilter === ""){
                return $q((resolve) => {
                    setTimeout(() => {
                        resolve({
                            message: 'Nothing found',
                            items: []
                        });
                    }, 0)
                });

            }


            return $http.get(URL).then(function (response) {
                let filteredMenuItems = filterMenuItems(searchFilter, response.data.menu_items);

                return {
                    items: filteredMenuItems,
                    message: filteredMenuItems.length === 0 ? 'Nothing found' : ''
                };
            });
        }


        let filterMenuItems = (searchFilter, menuItems) => {

            return menuItems.filter(item => {
                return item.description.toLowerCase().includes(searchFilter.toLowerCase());
            });
        }
    }

})();