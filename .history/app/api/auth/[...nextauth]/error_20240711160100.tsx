'use client';

import Error from 'next/error';
import React from 'react';

const ErrorBoundary = ({ error }: { error: Error }) => {
  return <div>Mijn error message is: {error.message} </div>;
};

export default ErrorBoundary;
