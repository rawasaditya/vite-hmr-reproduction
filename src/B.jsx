import React from 'react';
import { messageFromA } from './A';

export const messageFromB = "Hello from B";

const B = () => {
  return (
    <div>
      <h1>Component B</h1>
      <p>Message from A: {messageFromA}</p>
    </div>
  );
};

export default B;
