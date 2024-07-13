'use client';

const ErorBoundary = ({ error }) => {
  return <div>{error.message}</div>;
};

export default ErorBoundary;
