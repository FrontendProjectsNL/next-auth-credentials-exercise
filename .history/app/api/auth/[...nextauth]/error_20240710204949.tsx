'use client';

const ErorBoundary = ({ error }: { error: Error }) => {
  return <div>{error.message}</div>;
};

export default ErorBoundary;
