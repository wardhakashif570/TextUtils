import React from 'react';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';

export default function App() {
  return (
    <div>
      <Navbar title="TextUtils" aboutTextUtils="About TextUtils" />
      {/* <TextForm heading="Enter Your Text Here"/> */}
      <About />
    </div>
  )
}
