;(function () {
    angular
        .module('dbf', [
            'firebase'
        ])
        .constant('URL', 'https://monkey-business.firebaseio.com')
        .factory('DBC', dbcFactory)
    ;

    // @ngInject
    function dbcFactory(URL){
        var ref = new Firebase(URL);
        var authRef =  $firebaseAuth(ref);
        var o = {};

        return o;
    }
})();