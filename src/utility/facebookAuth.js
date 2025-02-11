export const initializeFacebookSDK = () => {
    window.fbAsyncInit = function () {
        window.FB.init({
            appId: "YOUR_APP_ID", // Replace with your Facebook App ID
            cookie: true,
            xfbml: true,
            version: "v18.0",
        });
    };

    // Load Facebook SDK script dynamically
    (function (d, s, id) {
        let js,
            fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s);
        js.id = id;
        js.src = "https://connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
};

export const loginWithFacebook = () => {
    window.FB.login((response) => {
        if (response.authResponse) {
            console.log("User logged in", response);
            window.FB.api("/me", { fields: "name,email,picture" }, (userInfo) => {
                console.log("User Info:", userInfo);
            });
        } else {
            console.log("User cancelled login or did not fully authorize.");
        }
    }, { scope: "email,public_profile" });
};
