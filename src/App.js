import ItemTable from "./ItemTable";
import { useState, useEffect } from "react";

function setPerson(name, gender, age) {
  <ItemTable name={name} gender={gender} age={age}/>
}

function App() {
  var [name, gender, age, setPerson] = useState("", "male", "0");
  
  //load locationStorage
  useEffect(() => {
    const items = localStorage.getItem("items");

    // ...
  }, []);

  return (
    <div className="card" style={{ width: 400 }}>
      <div className="card-content">
        <p className="is-4 title has-text-centered">Add Person</p>
        <div className="field">
          <label className="label">Name</label>
          <input
            className="input"
            type="text"
            placeholder="e.q John Smith"

          ></input>
        </div>

        <div className="field">
          <label className="label">Gender</label>
          <select className="input" type="text" placeholder="Please select .." input="gender">
            <option value="" disabled selected hidden>
              -- Select Gender --
            </option>
            <option>Male</option>
            <option>Female</option>
          </select>
        </div>

        <div className="field">
          <label className="label">Age</label>
          <input className="input" type="number" placeholder="e.q 30" id="age"></input>
        </div>

        <button className="button is-primary is-fullwidth" onClick={(name, gender, age) => setPerson()}>Submit</button>

        <div className="mb-4"></div>

        {/* display tables for all persons */}
        <p className="is-4 title has-text-centered">Person List</p>
        {/* sample table */}
        <ItemTable name={"bob"} gender={"Male"} age={"50"} />
        <p>Peerawas muanfoo 620610803</p>
      </div>
    </div>
  );
}

export default App;
