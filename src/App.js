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

  handleChange(id) {
    this.setState(prevState => {
      const updateTodos = prevState.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
      return {
        todos: updateTodos
      };
    });
  }

  getTodos() {
    return this.state.todos.map(todo => (
      <TodoItem
        key={todo.id}
        data={todo}
        handleChange={this.handleChange.bind(this)}
      />
    ));
  }
}

export default App;
