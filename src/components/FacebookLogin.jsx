import React, { useEffect } from 'react';
import { initializeFacebookSDK, loginWithFacebookAction } from 'facebook-login-package';

const FacebookLogin = () => {
    useEffect(() => {
        initializeFacebookSDK('YOUR_APP_ID');
    }, []);

    const handleLogin = () => {
        loginWithFacebookAction((userData) => {
            console.log('User data:', userData);
        });
    };

    return (
        <div>
            <button onClick={handleLogin}>Login with Facebook</button>
        </div>
    );
};

export default FacebookLogin;