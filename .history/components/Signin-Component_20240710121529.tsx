'use client';

import { signIn } from 'next-auth/react';

const SigninComponent = () => {
  <button onClick={() => signIn()}>Signin</button>;
};

export default SigninComponent;
