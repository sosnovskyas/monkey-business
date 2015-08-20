;
(function () {
    'use strict';
    angular
        .module('home', [
        ])
        .config(config)
    ;

    // @ngInject
    function config($stateProvider) {
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'modules/home/home.html'
            });
    }
})();