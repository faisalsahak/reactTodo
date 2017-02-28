import React from 'react';

export const TodoForm = (props)=> (
  <form onSubmit={props.handleSubmit}>
    <input className="text"
      onChange={props.handleInputChange}
      value={props.currentTodo}/>
  </form>
)
