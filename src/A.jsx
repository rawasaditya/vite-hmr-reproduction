import React from 'react';
import { messageFromB } from './B';
export const messageFromA = "Hello from Atest";

const A = () => {
  return (
    <div>
      <h1>Component A</h1>
      <p>Message from B: {messageFromB}</p>
    </div>
  );
};

export default A;
