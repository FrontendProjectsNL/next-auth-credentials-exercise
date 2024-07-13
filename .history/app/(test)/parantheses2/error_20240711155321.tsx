import Error from 'next/error';
import React from 'react';

type ErrorBoundaryProps = {
  error: Error,
};

const ErrorBoundary: React.FC<ErrorBoundaryProps> = ({ error }) => {
  return <div>{error.message}</div>;
};

export default ErrorBoundary;
