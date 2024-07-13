'use client';

import { useEffect, useState } from 'react';

const TestParantheses = () => {
  const [val, setVal] = useState(false);

  useEffect(() => {
    if (val) throw new Error('val cannot be true!');
  }, [val]);

  return (
    <button
      onClick={() => setVal((pre) => !prev)}
      className=" bg-slate-400 text-white"
    >
      TestParantheses2
    </button>
  );
};

export default TestParantheses;
