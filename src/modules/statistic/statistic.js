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
                controller: 'statCtrl as sc'
            })
        ;
    }

    // @ngInject
    function statisticFactory(DBC) {
        var o = {};

        o.getLastDayProfile = function () {
            DBC.getRf().child('profiles').orderByValue().on('value', function (snapshot) {
                snapshot.forEach(function (data) {
                    console.log('The ' + data.key() + ' dinosaur\'s score is ' + data.val());
                });
            });
        };
        return o;
    }

    function statisticController($scope, $firebaseArray, DBC) {
        var ref = DBC.getRef().child('profiles');

        var now = new Date; // now
        now.setHours(0);   // set hours to 0
        now.setMinutes(0); // set minutes to 0
        now.setSeconds(0); // set seconds to 0
        var startOfDay = Math.floor(now);
        //var startOfDay = now;

        now.setHours(24);   // set hours to 0
        now.setMinutes(60); // set minutes to 0
        now.setSeconds(60); // set seconds to 0
        var endOfDay = Math.floor(now);


        $scope.dailyProfiles = $firebaseArray(ref.orderByChild("timestamp").startAt(startOfDay).endAt(endOfDay));
        $scope.currentDate = new Date();
    }
})();