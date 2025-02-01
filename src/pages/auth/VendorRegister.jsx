import React from 'react';
import AuthLayout from './layouts/AuthLayout';
import VendorRegisterForm from './VendorRegisterForm';

const VendorRegister = () => {
  return (
    <AuthLayout>
      <VendorRegisterForm />
    </AuthLayout>
  );
};

export default VendorRegister;