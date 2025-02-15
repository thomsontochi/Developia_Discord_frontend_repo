import React, { useEffect } from "react";

const FacebookLogin = () => {
    useEffect(() => {
        const loadFacebookSDK = () => {
            if (document.getElementById("facebook-jssdk")) {
                console.log("Facebook SDK already loaded.");
                return;
            }

            let script = document.createElement("script");
            script.id = "facebook-jssdk";
            script.src = "https://connect.facebook.net/en_US/sdk.js";
            script.async = true;
            script.onload = () => {
                console.log("Facebook SDK loaded.");
                initializeFacebookSDK();
            };

            document.body.appendChild(script);
        };

        const initializeFacebookSDK = () => {
            if (!window.FB) {
                console.error("Facebook SDK is not available.");
                return;
            }

            console.log("Initializing Facebook SDK...");
            if (window.FB.init({
                appId: "934822008839118",
                cookie: true,
                xfbml: false,
                version: "v18.0",
            })) {
                console.log("Facebook SDK initialized.");
            }

            window.FB.getLoginStatus((response) => {
                console.log("FB Login Status:", response);
            });
        };

        loadFacebookSDK();
    }, []);

    const handleLogin = () => {
        window.FB.login((response) => {
            console.log(response);
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

    return (
        <button
            type="button"
            className="btn btn-outline-light flex-grow-1 social-btn"
            onClick={handleLogin}
        >
            <div className="d-flex align-items-center justify-content-center gap-2">
                <i className="fab fa-facebook text-primary"></i>
                <span>Continue with Facebook</span>
            </div>
        </button>
    );
};

export default FacebookLogin;
