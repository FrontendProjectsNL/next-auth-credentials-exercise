'use client';

import { signIn } from 'next-auth/react';
import { Button } from './ui/button';

const Signin = () => {
  //   return <Button onClick={() => signIn}></Button>;
  <button onClick={() => signIn()}>Signin</button>;
};

export default Signin;
