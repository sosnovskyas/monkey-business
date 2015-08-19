;
(function () {
    angular
        .module('workflow', [
        ])
        .config(config)
    ;

    // @ngInject
    function config($stateProvider) {
        $stateProvider
            .state('workflow', {
                url: '/workflow',
                templateUrl: 'modules/workflow/workflow.html'
            });
    }
})();