"use strict";
const userProfile = {
    template: `
        <section><img></section>
        <section>
            <h1> {{ $ctrl.info.name }}</h1>
            <p> {{ $ctrl.info.contact }}</p>
            <p> {{ $ctrl.info.bio }}</p>
            <a href="#!/edit_profile">Edit</a>
        </section>
        `,
    controller:["ProfileService", function(ProfileService) {
        const vm = this;
        vm.info = ProfileService.getUserProfile();
    }]
}

angular
    .module("App")
    .component("userProfile", userProfile)