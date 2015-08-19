;
(function () {
    angular
        .module('workflow', [
        ])
        .config(config)
        .factory('wfFct', workflowFactory)
        .controller('wfCtrl', workflowController)
    ;

    // @ngInject
    function config($stateProvider) {
        $stateProvider
            .state('workflow', {
                url: '/workflow',
                templateUrl: 'modules/workflow/workflow.html'
            });
    }

    // @ngInject
    function workflowFactory() {
        var o = {};

        return o;
    }

    function workflowController() {
        var s = this;
        var o = {
            project: '',
            status: ''
        };
        s.setProject = function (_project) {

        };

    }
})();