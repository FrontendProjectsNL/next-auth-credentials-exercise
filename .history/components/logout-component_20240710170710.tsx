'use client';

import { signOut } from 'next-auth/react';
import { Button } from './ui/button';

const LogoutComponent = () => {
  return (
    <>
      <h3>You're logged in! Click logout to signout:</h3>
      <Button onClick={() => signOut()}>Logout </Button>
    </>
  );
};

export default LogoutComponent;
