// import React,{useState} from 'react'
// import './Addstudent.css'
// import {useNavigate } from 'react-router-dom'


// const Addstudent=()=> {

//   const navigate=useNavigate();
// const studentaddcancel=()=>{
//   navigate('/Students')
// }

//     const[show,setshow]=useState(false)
//     const[submitshow,setsubmitshow]=useState(true)
//     const[state,setstate]=useState({
//         Name1:"",
//         Age:"",
//         Course:"",
//         Batch:"",
//         employee:[]
//     });

//     let name,value;
//   const handleInputs=(e)=>{
//     console.log(e);
//     name=e.target.name;
//     value=e.target.value;

//     setstate({...state,[name]:value})
//     console.log(state);
   
//   }

//   const submitHandler=(e)=>{
//    e.preventDefault()
//    console.log(e.target);
//    console.log("SubmitHandler called");
//    const empObj = {
//        Name:state.Name1,
//        Age:state.Age,
//        Course:state.Course,
//        Batch:state.Batch
//      };
     
//      const arr = state.employee;
//      arr.push(empObj);
//      console.log(arr);
//      console.log(state.employee);
//      setstate({...state, employee: arr });
//      setshow(!show)
//     // setsubmitshow(!submitshow)
    
//   }

//   const back=(e)=>{
//     e.preventDefault();
//     setshow((prevValue)=>{return !prevValue})
//   }
// if(show){
//     return(
//         <>
//         <div id='result'>
//             {state.employee.map((value,index,Array)=>
//           {
//             return(
//               <div id="output" key={index}>
//             <p key={index}>Name : {value.Name} | Age : {value.Age} | Rating : {value.Course}</p> 
//             </div>
//             )
//           })
//         }
//         </div>
//         <button onClick={back}>go back</button>
//         </>
//     )

      
// }

// else{
//   return (
//     <div>
//       <form >
        
//           <input type="text" name="Name1" id="name" value={state.Name1} onChange={handleInputs} placeholder="Name"/> <br /> <br />
      
//           <input type="text" name="Age" id="name" value={state.Age} onChange={handleInputs} placeholder="Age"/> <br /> <br />
      
//           <input type="text" name="Course" id="name" value={state.Course} onChange={handleInputs} placeholder="Course"/> <br /> <br />
      
//           <input type="text" name="Batch" id="name" value={state.Batch} onChange={handleInputs} placeholder="Batch"/> <br /> <br />
    
//       </form>
//      <button onClick={submitHandler} className="btn_addstudent" id='addSubmitBtn'>Submit</button>
//      <button className='btn_addstudent' id='cancelBtn' onClick={studentaddcancel}>Cancel</button>
//     </div>
//   )
// }
// }


// export default Addstudent


import axios from "axios";
import React, { useState } from "react";
import { useNavigate} from "react-router-dom";
import './Addstudent.css'

const header={"Access-Control-Allow-Origin":"*"};
const Addstudent = () => {
  const[name,setName]=useState('')
    const[age,setAge]=useState('')
    const[course,setCourse]=useState('')
    const[batch,setBatch]=useState('')
    const history=useNavigate();

    const handleSubmit=(e)=>{
      e.preventDefault()
      console.log('clicked');
      axios.post(
          'https://63d03474e52f587829ae07a7.mockapi.io/react-use',{
          name:name, 
          age:age,
          course:course,
          batch:batch,
          header
      })

     .then(()=>{
      history("/Students")
     })
  }

  function studentaddcancel(){
    history("/Students")
  }

  return (
    <div>
      <form>
       <input type="text" className="form-control"
          onChange={(e)=> setName(e.target.value)} placeholder="Name"/>
       <input type="number" className="form-control"
          onChange={(e)=> setAge(e.target.value)} placeholder="Age"/>
       <input type="text" className="form-control"
          onChange={(e)=> setCourse(e.target.value)} placeholder="Course" />
       <input type="text" className="form-control"
          onChange={(e)=> setBatch(e.target.value)} placeholder="Batch" />
      </form>
          <button type="submit" className="btn btn-primary btn_addstudent" onClick={handleSubmit}>
          Submit
        </button>
        <button className='btn_addstudent' id='cancelBtn' onClick={studentaddcancel}>Cancel</button>
        
    </div>
  )
}

export default Addstudent
