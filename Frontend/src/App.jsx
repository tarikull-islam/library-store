import React from 'react';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom'
import Course from './pages/Course';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Contact from './pages/Contact';
import About from './pages/About';
import SingUp from './components/singup/SingUp';

const App = () => {
  return (
    <div className='dark:bg-slate-900 dark:text-slate-200'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/course' element={<Course />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/register' element={<SingUp />}/>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;