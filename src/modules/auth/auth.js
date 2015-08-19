;(function () {
    angular
        .module('auth', [
            'ui.router',
            'firebase'
        ])
        .factory('authFct', authFactory)
        .controller('authCtrl', authController)
    ;

    // @ngInject
    function authFactory(DBC, $state) {
        var o = {};

        o.login = function (_user) {
            DBC.getAuthRef().$authWithPassword(_user)
                .then(function (authData) {
                    console.log('Logged in as:', authData.uid);
                    $state.transitionTo('workflow');
                })
                .catch(function (error) {
                    console.error('Authentication failed:', error);
                    $state.transitionTo('home');
                });
        };

        o.logout = function () {
            DBC.getAuthRef().$unauth();
        };

        o.signedIn = function () {
            return DBC.getAuthRef().$getAuth();
        };

        o.getRef = function () {
            return DBC.getRef();
        };

        return o;
    }

    // @ngInject
    function authController(authFct) {
        var s = this;
        s.user = {
            email: 'qwe@qwe.ru',
            password: '1234'
        };
        s.login = function () {
            return authFct.login(s.user);
        };

        s.logout = function () {
            return authFct.logout();
        };

        s.signedIn = function () {
            return Boolean(authFct.signedIn());
        };
    }
})();