;
(function () {
    angular
        .module('monkey-business',[
            'firebase',
            'ui.router',
            'dbf',
            'home'
        ])
        .config(config)
    ;

    // @ngInject
    function config ($urlRouterProvider) {
        $urlRouterProvider
            .otherwise('/home');
    }
})();