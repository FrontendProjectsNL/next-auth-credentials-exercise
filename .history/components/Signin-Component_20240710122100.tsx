'use client';

import { signIn } from 'next-auth/react';

const SigninComponent = () => {
  return (
    <button
      onClick={() => signIn()}
      className=" bg-blue-300 rounded-md w-48 py-4"
    >
      {' '}
      Signin{' '}
    </button>
  );
};

export default SigninComponent;
