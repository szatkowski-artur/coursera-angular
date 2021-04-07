(function () {
    'use strict';

    angular.module('App', [])
        .controller('toBuyController', ToBuyController)
        .controller('boughtController', BoughtController)
        .service('Service', Service);


    ToBuyController.$inject = ['Service'];
    function ToBuyController(Service) {

        let toBuyList = this;

        toBuyList.list = Service.getToBuyList();

        toBuyList.bought = function (itemIndex) {
            Service.bought(itemIndex);
        }

    }

    BoughtController.$inject = ['Service'];
    function BoughtController(Service) {

        let bought = this;

        bought.list = Service.getBoughtList();

    }


    function Service() {

        let service = this;

        let toBuyList = [
            {name: 'Item 1', quantity: 1},
            {name: "Item 2", quantity: 2},
            {name: "Item 3", quantity: 3},
            {name: "Item 4", quantity: 4},
            {name: "Item 5", quantity: 5}
        ];

        let boughtList = [];

        service.getToBuyList = function () {
            return toBuyList;
        }

        service.getBoughtList = function () {
            return boughtList;
        }

        service.bought = function (itemIndex) {
            boughtList.push(toBuyList.splice(itemIndex, 1).pop());
        }

    }


})();