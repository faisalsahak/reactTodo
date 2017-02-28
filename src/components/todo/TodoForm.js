import React from 'react';

export const TodoForm = (props)=> (
  <form>
    <input className="text"
      onChange={props.handleInputChange}
      value={props.currentTodo}/>
  </form>
)
