'use client';

import { Button } from './ui/button';

const LogoutComponent = () => {
  return (
    <>
      <h3>You're logged in! Click logout to signout:</h3>
      <Button>Logout </Button>
    </>
  );
};

export default LogoutComponent;
