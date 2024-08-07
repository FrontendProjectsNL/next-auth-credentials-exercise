'use client';

import { signIn } from 'next-auth/react';
import { useEffect, useState } from 'react';

const TestParantheses = () => {
  const [val, setVal] = useState(false);

  useEffect(() => {
    if (val) throw new Error('val cannot be true!');
  }, [val]);

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-40">
        <button
          onClick={() => setVal((prev) => !prev)}
          className=" bg-blue-300 text-white rounded-md p-3"
        >
          Throw error
        </button>

        <button
          onClick={() => signIn()}
          className=" bg-blue-300 text-white rounded-md p-3 mt-3"
        >
          Sigin
        </button>
      </div>
    </div>
  );
};

export default TestParantheses;
