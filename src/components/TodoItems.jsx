import React from "react";

function TodoItem(props) {
  return (
    <div className="todo-item">
      <input type="checkbox" checked={props.data.completed} />
      <p>{props.data.text}</p>
      <br />
    </div>
  );
}

export default TodoItem;
