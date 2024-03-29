'use client';

import { useState } from 'react';

export default function SamplePage() {
  const [counter, setCounter] = useState<number>(0);

  return (
    <>
      <p>カウント: {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>＋</button>
    </>
  );
}
