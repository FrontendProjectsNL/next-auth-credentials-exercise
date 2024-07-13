import Error from 'next/error';
import React from 'react';

const ErrorBoundary = ({ error }: { error: Error }) => {
  return <div>error</div>;
};

export default ErrorBoundary;
