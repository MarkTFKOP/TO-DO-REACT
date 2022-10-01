import React, { useState } from "react";

export default function Add() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [rno, setrno] = useState("");

  const addData = () => {};
  return (
    <div>
      <h6>Add data</h6>
      <section>
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
        <div>
          <input
            type="text"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          ></input>
        </div>
        <div>
          <input
            type="text"
            value={rno}
            onChange={(e) => setrno(e.target.value)}
          ></input>
          <button onClick={() => addData}>Submit </button>
        </div>
      </section>
    </div>
  );
}
