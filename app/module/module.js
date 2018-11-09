"use strict";
angular
    .module("App", ["ngRoute"])
    .config(["$routeProvider", ($routeProvider) => {
        $routeProvider
        .when("/user_profile", {
            template: "<user_profile></user_profile>"
        })
        .when("/edit_profile", {
            template: "<edit_profile></edit_profile>"
        }).otherwise ({redirectTo:"/user_profile"})
}])