"use strict";
function ProfileService($location) {
    const self = this;
    self.userProfile = {
        name: "Esmerelda",
        contact: "deedleee@gmail.com",
        bio: "Hello, I am glad to be here -- and all that jazz."
    }
    self.getUserProfile = () => {
        console.log(self.userProfile);
        return self.userProfile;
    }
    self.setUserProfile = (newInfo) => {
    console.log(newInfo);
    self.userProfile = angular.copy(newInfo);
    $location.path("/user_profile");
    }
} 

angular
    .module("App")
    .service("ProfileService", ProfileService)
