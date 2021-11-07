import React from 'react';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';

export default function App() {
  return (
    <div>
      <Navbar title="TextUtils" aboutTextUtils="About TextUtils" />
      <TextForm heading="Enter Your Text Here"/>
    </div>
  )
}
