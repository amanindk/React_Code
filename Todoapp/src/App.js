import { useState } from "react";
import "./App.css";
import Input from "./components/Input";
import TodoList from "./components/TodoList";

function App() {
  const [listTodo, setListTodo] = useState([]);
  let addList = (inputText) => {
    if(inputText!=='')
    setListTodo([...listTodo, inputText]);
  };

  const deleteListitem = (key) => {
    let newListTodo = [...listTodo];
    newListTodo.splice(key, 1);
    setListTodo([...newListTodo]);
  };
  return (
    <div className="main-container">
      <div className="center-container">
        <Input addList={addList} />
        <h1>Todo</h1>
        <hr />
        {listTodo.map((listItem, i) => {
          return <TodoList key={i} index={i} item={listItem} deleteItem={deleteListitem} />;
        })}
      </div>
    </div>
  );
}

export default App;
