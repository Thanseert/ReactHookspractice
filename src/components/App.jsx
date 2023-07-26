import React, { useState } from "react";

function App() {

const [fname, setFname] = useState("");
const [lname, setLname] = useState("");

function updatefname(event){
  const Firstname = event.target.value;
  setFname(Firstname);
}
function updateLname(event){
  const Lastname =  event.target.value;
  setLname(Lastname);
}

  return (
    <div className="container">
      <h1>Hello {fname} {lname}</h1>
      <form>
        <input name="fName" onChange={updatefname} placeholder="First Name" value={fname}/>
        <input name="lName"  onChange={updateLname} placeholder="Last Name" value={lname}/>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
