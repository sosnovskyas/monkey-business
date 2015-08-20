;(function () {
    'use strict';
    angular
        .module('statistic', [
        ])
        .config(config)
        .factory('statFct', statisticFactory)
        .controller('statCtrl', statisticController)
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

    // @ngInject
    function statisticFactory(DBC) {
        var o = {};

        o.getLastDayProfile = function () {
            DBC.getRf().child('profiles').orderByValue().on('value', function (snapshot) {
                snapshot.forEach(function(data) {
                    console.log('The ' + data.key() + ' dinosaur\'s score is ' + data.val());
                });
            });
        };
        return o;
    }

    function statisticController() {
        var s = this;

        s.getProfiles = function () {

        }
    }
})();