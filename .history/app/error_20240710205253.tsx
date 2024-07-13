'use client';

export default function ErorBoundary({ error }: { error: Error }) {
  return (
    <>
      <h2>Zie error hieronder:</h2>
      <div>{error.message}</div>
    </>
  );
}
