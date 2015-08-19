;(function () {
    angular
        .module('mainMenu', [
            'auth'
        ])
        .directive('mainMenu', mainMenuDirectiveFactory)
    ;

    // @ngInject
    function mainMenuDirectiveFactory() {
        return {
            templateUrl: 'modules/mainMenu/mainMenu.html',
            restrict: 'E',
            controller: function ($scope, $element, $attrs, $transclude, otherInjectables) {
            }
        };
    }
})();