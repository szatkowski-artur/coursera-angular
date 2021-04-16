(function () {
    'use strict';

    angular.module('MenuApp')
        .config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function RoutesConfig($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/home');

        // Set up UI states
        $stateProvider

            .state('home', {
                url: '/home',
                templateUrl: 'src/views/home.html'
            })

            .state('categories', {
                url: '/categories',
                templateUrl: 'src/views/categories.html',
                controller: 'CategoriesController as categories',
                resolve: {
                    list: ['MenuDataService', function (MenuDataService) {
                        return MenuDataService.getAllCategories()
                                .then(response => {
                                    return response.data;
                                });
                    }]
                }
            })

            .state('items', {
                url: '/items/{shortName}',
                templateUrl: 'src/views/items.html',
                controller: 'ItemController as items',
                resolve: {
                    categoryWithList: ['$stateParams', 'MenuDataService', function ($stateParams, MenuDataService) {
                        return MenuDataService.getItemsForCategory($stateParams.shortName).then(response => {
                            console.log(response.data);
                            return response.data;

                        }).catch(error => {
                            console.log(error);
                        });
                    }]
                }
            });

    }


})();