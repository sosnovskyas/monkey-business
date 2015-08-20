;(function () {
    'use strict';
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

        o.signUp = function (_user) {
            DBC.getAuthRef()
                .$createUser({
                    email: _user.email,
                    password: _user.password
                })
                .then(function (userData) {
                    console.log('User ' + userData.uid + ' created successfully!');
                    console.log(userData);

                    DBC.getRef().child('users').child(userData.uid).set({
                        fullname: _user.fullname,
                        date: Firebase.ServerValue.TIMESTAMP
                    });

                    return DBC.getAuthRef().$authWithPassword({
                        email: _user.email,
                        password: _user.password
                    });
                })
                .then(function (authData) {
                    console.log('Logged in as:', authData.uid);
                })
                .catch(function (error) {
                    console.error('Error: ', error);
                });
        };

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

        s.signUp = function () {
            authFct.signUp(s.user);
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