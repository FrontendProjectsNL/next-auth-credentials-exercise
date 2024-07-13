'use client';

import { useEffect, useState } from 'react';

const TestParantheses = () => {
  const [val, setVal] = useState(false);

  useEffect(() => {
    if (val) throw new Error('val cannot be true!');
  }, [val]);

  return (
    <button
      onClick={() => setVal((prev) => !prev)}
      className=" bg-blue-300 text-white rounded-md"
    >
      TestParantheses2
    </button>
  );
};

export default TestParantheses;
