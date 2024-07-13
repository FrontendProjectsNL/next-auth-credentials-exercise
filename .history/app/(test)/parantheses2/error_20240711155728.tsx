'use client';

import React from 'react';

const ErrorBoundary = ({ error } => {
  return <div>Mijn error message is: {error.message} </div>;
};

export default ErrorBoundary;
