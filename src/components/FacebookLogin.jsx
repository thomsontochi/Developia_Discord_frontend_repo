import React, { useEffect } from "react";

const FacebookLogin = () => {
    useEffect(() => {
        window.fbAsyncInit = function () {
            window.FB.init({
                // appId: "1133904004967612",
                // appId: "1159221362481568",
                appId: "934822008839118",
                cookie: true,
                xfbml: true,
                version: "v18.0",
            });
        };
    }, []);

    const handleLogin = () => {
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
