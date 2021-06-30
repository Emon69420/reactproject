import React from 'react';
import './style.css';
import HelloWorld from './components/HelloWorld';
import Counter from './components/Counter';
import Header from './components/Header';

export default function App() {
  return (
    <div>
      <Header />
      <HelloWorld name="Emon" />
      <Counter />
    </div>
  );
}
