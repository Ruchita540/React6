import './App.css';
import React from 'react'
import {Routes,Route} from "react-router-dom"
import Home from './Component/Home';
import Students from './Component/Students';
import Contactus from './Component/Contactus';
import Navbar from './Component/Navbar'
import Edit from './Component/Edit';
import Addstudent from './Component/Addstudent';


const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
          <Route path="/Home" element={<Home/>}/>
          <Route path="/Students" element={<Students/>}/>
          <Route path="/Contact" element={<Contactus/>}/>
          <Route path="/Edit" element={<Edit/>}/>
          <Route path="/Addstudent" element={<Addstudent/>}/>
   </Routes>
    </div>
  )
}
export default App