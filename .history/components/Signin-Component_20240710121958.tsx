'use client';

import { signIn } from 'next-auth/react';

const SigninComponent = () => {
  return (
    <button onClick={() => signIn()} variant={outlline}>
      {' '}
      Signin{' '}
    </button>
  );
};

export default SigninComponent;
