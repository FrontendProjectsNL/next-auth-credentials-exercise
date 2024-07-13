'use client';

import { useEffect, useState } from 'react';

const TestParantheses = () => {
  const [val, setVal] = useState(false);

  useEffect(() => {
    if (val) throw new Error('val cannot be true!');
  }, [val]);

  return (
    <div className="flex justify-center items-center">
      <div className="w-40">
        <button
          onClick={() => setVal((prev) => !prev)}
          className=" bg-blue-300 text-white rounded-md"
        >
          TestParantheses2
        </button>
      </div>
    </div>
  );
};

export default TestParantheses;
