import React, { useState, useEffect, useRef } from 'react'
import Header from "./components/Header/Header"
import ListContainer from "./components/ListContainer"
import employees from "./employee.json"

function App() {
  
  const [filteredEmployees, setfilteredEmployees] = useState([])
  const [filterInput, setFilterInput] = useState("");
  const input = useRef()

  const handleChange = (e) => {
    e.preventDefault();
    const a = employees.filter(employee => employee.email.includes(filterInput.toLowerCase()))
    setfilteredEmployees([...a])
  }

  useEffect(() => {
    if (filterInput.length){
      const a = employees.filter(employee => employee.email.includes(filterInput.toLowerCase()))
      setfilteredEmployees([...a])
      console.log("a", a);
      console.log("filtered", filteredEmployees); 
    }
  }, [filterInput])


  return (
    <div className="container">
    <Header/>
    <div className="d-flex mb-2 justify-content-end">
      <input className= "input-group-text" onChange={(e) => setFilterInput(e.target.value)} ref= {input}/>
      <button className="btn btn-primary" onClick={handleChange}>Search</button>
    </div>
    {(filterInput) ? (<ListContainer employees={filteredEmployees}/>) : (<ListContainer employees={employees}/>)}
    </div>
  )
}

export default App
