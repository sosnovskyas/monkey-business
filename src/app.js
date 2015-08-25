;
(function () {
    'use strict';
    angular
        .module('monkey-business', [
            'firebase',
            'ui.router',
            'dbf',
            'mainMenu',
            'home',
            'workflow',
            'statistic'
        ])
        .config(config)
    ;

    // @ngInject
    function config($urlRouterProvider) {
        $urlRouterProvider
            .otherwise('/home');
    }
})();