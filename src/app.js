;
(function () {
    angular
        .module('monkey-business', [
            'firebase',
            'ui.router',
            'dbf',
            'home',
            'workflow',
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