;(function () {
    angular
        .module('dbf', [
            'firebase'
        ])
        .constant('URL', 'https://monkey-business.firebaseio.com')
        .factory('DBC', dbcFactory)
    ;

    // @ngInject
    function dbcFactory(URL, $firebaseAuth){
        var ref = new Firebase(URL);
        var authRef =  $firebaseAuth(ref);
        var o = {};

        o.getRef = function () {
            return ref;
        };

        o.getAuthRef = function () {
            return authRef;
        };

        return o;
    }
})();