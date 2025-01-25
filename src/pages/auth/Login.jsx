import React from 'react';
import AuthLayout from './layouts/AuthLayout';
import LoginForm from '../../pages/auth/LoginForm';

const Login = () => {
  return (
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  );
};

export default Login;