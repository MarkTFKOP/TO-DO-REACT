import React from "react";
import View from "./View";
import Add from "./Add";
export default function CRUD() {
  return (
    <div>
      <h4>CRUD Table</h4>
      <div>
        <Add />
        <View />
      </div>
    </div>
  );
}
