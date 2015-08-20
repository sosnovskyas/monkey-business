;(function () {
    'use strict';
    angular
        .module('statistic', [
        ])
        .config(config)
    ;

    // @ngInject
    function config($stateProvider, $urlRouterProvider) {
        $urlRouterProvider
            .when('/statistic', '/statistic/basic');
        $stateProvider
            .state('statistic', {
                url: '/statistic',
                templateUrl: 'modules/statistic/statistic.html',
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
            .state('statistic.basic', {
                url: '/basic',
                templateUrl: 'modules/statistic/statistic.basic.html',
                controller: 'wfCtrl as wc'
            })
        ;
    }

})();