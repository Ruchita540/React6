import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './Addstudent.css'

const Edit = () => {
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [course, setCourse] = useState("");
  const [batch, setBatch] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    setId(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setAge(localStorage.getItem("age"));
    setCourse(localStorage.getItem("course"));
    setBatch(localStorage.getItem("batch"));
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();
    console.log("Id...", id);
    axios
      .put(`https://63d03474e52f587829ae07a7.mockapi.io/react-use/${id}`, {
        name: name,
        age:age,
        course:course,
        batch:batch
      })
      .then(() => {
        navigate("/Students");
      });
  };

  return (
    <div>
        <form>

        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            value={batch}
            onChange={(e) => setBatch(e.target.value)}
          />
        </div> 
      </form>
        <button
          type="submit"
          className="btn btn-primary mx-2 btn_addstudent" 
          onClick={handleUpdate}
        >Update
        </button>
        <Link to="/Students">
          <button className="btn btn-secondary mx-2 btn_addstudent"> Back </button>
        </Link>
    </div>
  )
}

export default Edit
