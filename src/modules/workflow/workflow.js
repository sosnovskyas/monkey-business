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
                templateUrl: 'modules/workflow/workflow.projects.html',
                controller: 'wfCtrl as wc'
            })
        .state('workflow.status', {
                url: '/status',
                templateUrl: 'modules/workflow/workflow.status.html',
                controller: 'wfCtrl as wc'
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
        var userProject;
        var userStatus;

        o.setProject = function (_project) {
            userProject = _project;
        };

        o.getProject = function () {
            return userProject;
        };

        o.setStatus = function (_status) {
            userStatus = _status;
        };

        o.getStatus = function () {
            return userStatus;
        };

        return o;
    }

    // @ngInject
    function workflowController(wfFct) {
        var s = this;
        s.setProject = function (_project) {
            console.log('set project', _project);
            wfFct.setProject(_project);
            console.log(wfFct.getProject());
        };

        s.setStatus = function (_status) {
            console.log('set status', _status);
            wfFct.setProject(_status);
            console.log(wfFct.getProject(), wfFct.getStatus());
        };
    }
})();