import "./App.css";

import React, { Component } from "react";
import TodoItem from "./components/TodoItems";
import todosData from "./todosData";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: todosData
    };
  }

  render() {
    return <div className="todo-list">{this.getTodos()}</div>;
  }

  getTodos() {
    return this.state.todos.map(todo => <TodoItem key={todo.id} data={todo} />);
  }
}

export default App;
