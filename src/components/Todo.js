import React from "react";

function Todo(props) {
  return (
    <div>
      <div className="card">
        <h2>{props.title}</h2>
        <div className="actions">
          <button className="btn">Delete</button>
        </div>
      </div>
    </div>
  );
}

export default Todo;
