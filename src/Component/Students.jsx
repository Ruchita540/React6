import React from 'react'
import Table1 from './Table1'
// import Addstudent from './Addstudent'
import {useNavigate } from 'react-router-dom'

const Students = () => {
  const navigate=useNavigate();
  const studentadd=()=>{
    navigate('/Addstudent')

  }

  return (
    <div>
      <div id="studentsflex">
        <div>Students Details</div>
        <button id='stuAddBtn' onClick={studentadd}>Add new student</button>
      </div>
      <Table1/>
    </div>
  )
}

export default Students
