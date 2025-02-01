import React from 'react';
import AuthLayout from './layouts/AuthLayout';
import VendorLoginForm from './VendorLoginForm';

const VendorLogin = () => {
  return (
    <AuthLayout>
      <VendorLoginForm />
    </AuthLayout>
  );
};

export default VendorLogin;