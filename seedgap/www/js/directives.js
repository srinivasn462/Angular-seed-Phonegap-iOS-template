'use strict';

/* Directives */


angular
    .module('myApp.directives', [])

.directive('appVersion', ['version',
    function(version) {
        return function(scope, elm, attrs) {
            elm.text(version);
        };
    }
])
    .directive("titlebar", [], function() {
        return {
            restrict: "E",
            scope: {
                edit: '@editButton',
                cancel: '@cancelButton'
            },
            template: "<header class='bar-title'><h1 class='title' ng-transclude></h1><span ng-show='edit'>Edit</span><span ng-show='cancel'>Cancel</span></header>",
            transclude: true,
            replace: true
        };
    });