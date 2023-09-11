import React, { useState } from 'react';

export default function CountUp() {
  const [count, setCount] = useState(0);

  const handleCount1 = () => {
    setCount(count + 1);
  };

  const handleCount2 = () => {
    setCount((count) => 1 + count);
  };

  const handleCount3 = () => {
    setCount((count) => 10 + count);
  };
  return (
    <div>
      <p>
        현재 카운트: {count}{' '}
        <button onClick={() => handleCount1()}>카운트 증가</button>
      </p>
      <p>
        마운트 카운트: {count}{' '}
        <button onClick={() => handleCount2()}>카운트 증가</button>
      </p>
      <p>
        <button onClick={() => handleCount3()}>{count + 10}으로 초기화</button>
      </p>
    </div>
  );
}
