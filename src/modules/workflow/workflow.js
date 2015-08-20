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
    function config($stateProvider, $urlRouterProvider) {
        $urlRouterProvider
            .when('/workflow', '/workflow/projects');
        $stateProvider
            .state('workflow', {
                url: '/workflow',
                templateUrl: 'modules/workflow/workflow.html',
                controller: 'authCtrl as ac',
                resolve:{
                    signedIn: function (authFct, $q) {
                        var defered = $q.defer();
                        if (authFct.signedIn()){
                            console.log('OK');
                            defered.resolve();
                        } else {
                            console.log('ERROR');
                            defered.reject();
                        }
                        return defered.promise;
                    }
                }
            })
            .state('workflow.projects', {
                url: '/projects',
                templateUrl: 'modules/workflow/workflow.projects.html'
            })
        .state('workflow.status', {
                url: '/status',
                templateUrl: 'modules/workflow/workflow.status.html'
            })
        .state('workflow.data', {
                url: '/data',
                templateUrl: 'modules/workflow/workflow.data.html'
            })
        ;
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