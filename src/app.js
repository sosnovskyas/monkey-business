;
(function () {
    angular
        .module('monkey-business', [
            'firebase',
            'ui.router',
            'dbf',
            'home',
            'mainMenu'
        ])
        .config(config)
    ;

    // @ngInject
    function config($urlRouterProvider) {
        $urlRouterProvider
            .otherwise('/home');
    }
})();