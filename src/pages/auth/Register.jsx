import React from 'react';
import AuthLayout from './layouts/AuthLayout';
import RegisterForm from '../../pages/auth/RegisterForm';

const Register = () => {
  return (
    <AuthLayout>
      <RegisterForm />
    </AuthLayout>
  );
};

export default Register;