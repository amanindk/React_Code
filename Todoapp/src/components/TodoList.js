import React from "react";

function TodoList(props) {
  return (
    <li>  
      
      {props.item}
      <span>
        <i className="fa-solid fa-delete-left" onClick={(e) => {props.deleteItem(props.index)}} />
      </span>
    </li>
  );
}

export default TodoList;
