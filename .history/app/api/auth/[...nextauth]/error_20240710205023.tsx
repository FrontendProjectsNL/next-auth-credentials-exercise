'use client';

const ErorBoundary = ({ error }: { error: Error }) => {
  return (
    <>
      <h2>Zie error hieronder:</h2>
      <div>{error.message}</div>
    </>
  );
};

export default ErorBoundary;
