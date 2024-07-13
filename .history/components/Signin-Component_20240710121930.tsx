'use client';

import { signIn } from 'next-auth/react';

const SigninComponent = () => {
  return (
    <button onClick={() => signIn()}>hhhhhhhhh Signin hhhhhhhhhhh </button>
  );
};

export default SigninComponent;
