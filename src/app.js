;
(function () {
    angular
        .module('monkey-business',[
            'firebase',
            'ui.router'
        ])
        .config(config)
    ;

    // @ngInject
    function config ($urlRouterProvider) {
        $urlRouterProvider
            .otherwise('/login');
    }
})();