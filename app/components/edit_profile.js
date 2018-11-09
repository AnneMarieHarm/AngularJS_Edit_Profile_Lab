"use strict";

const editProfile = {
    template: `
    <form ng-submit="$ctrl.edit($ctrl.newInfo);">
    <h1>text</h1>
    <label></label>
    <input type="text" ng-model="$ctrl.newInfo.name">
    <label></label>
    <input type="text" ng-model="$ctrl.newInfo.contact">
    <label></label>
    <input type="text" ng-model="$ctrl.newInfo.bio">
    <button>Save</button>
    </form>
    `,
    controller: ["ProfileService", function(ProfileService) {
        const vm = this;
        vm.edit = (newInfo) => {
            ProfileService.setUserProfile(newInfo);
        }
    }]
}

angular
    .module("App")
    .component("editProfile", editProfile);