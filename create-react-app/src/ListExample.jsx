import React from 'react';

export default function ListExample() {
  const priceList = [1000, 2000, 3000, 4000];

  return (
    <div>
      <label>가격목록</label>
      {priceList.map((price) => (
        <div key={price}>가격:{price}원</div>
      ))}
    </div>
  );
}
