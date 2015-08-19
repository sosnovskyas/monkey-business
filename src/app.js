;
(function () {
    angular
        .module('monkey-business',[
            'firebase',
            'ui.router',
            'dbf'
        ])
        .config(config)
    ;

    // @ngInject
    function config ($urlRouterProvider) {
        $urlRouterProvider
            .otherwise('/login');
    }
})();