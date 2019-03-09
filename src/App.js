import "./App.css";

import React, { Component } from "react";
import TodoItem from "./components/TodoItems";

class App extends Component {
  render() {
    return (
      <div className="todo-list">
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </div>
    );
  }
}

export default App;
