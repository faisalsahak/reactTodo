import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {TodoForm} from './components/todo/TodoForm';
import {TodoList} from './components/todo/TodoList';
import{addTodo, generateId} from './components/lib/todoHelpers'

class App extends Component {
    state = {
      todos: [
        {id: 1, name: 'Learn JSX', isComplete: false},
        {id: 2, name: 'Build Awsome App', isComplete: false},
        {id: 3, name: 'Ship Awsome App', isComplete: true}
      ],
      currentTodo: ''
    }

  handleInputChange =(event)=>{
    this.setState({currentTodo: event.target.value})
  }

  handleSubmit = (e) =>{
    e.preventDefault();
    const newId = generateId()
    const newTodo = {id: newId, name: this.state.currentTodo, isComplete: false}
    const updateTodo = addTodo(this.state.todos, newTodo)
    this.setState({
      todos: updateTodo,
      currentTodo: ''
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Todos</h2>
        </div>
        <div className ="Todo-App">
          <TodoForm handleInputChange = {this.handleInputChange}
             currentTodo ={this.state.currentTodo}
             handleSubmit = {this.handleSubmit}/>

          <TodoList todos ={this.state.todos}/>
        </div>
      </div>
    );
  }
}

export default App;
