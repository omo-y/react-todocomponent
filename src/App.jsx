import React, { useState } from "react";
import "./styles.css";

const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([
    "ああああ",
    "いいいい"
  ]);
  const [completeTodos, setcompleteTodos] = useState([`うううう`, "ええええ"]);
  const onChangetodoText = (event) => {
    setTodoText(event.target.value);
  };
  const OnClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    console.log(newTodos);
    setIncompleteTodos(newTodos);
    setTodoText("");
  };
  const onClickDelte = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
    //alert("削除");
  };
  const onClickComplete = (index) => {
    const newincompleteTodos = [...incompleteTodos];
    newincompleteTodos.splice(index, 1);
    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    //alert("完了");
    console.log(newCompleteTodos);
    setcompleteTodos(newCompleteTodos);
    setIncompleteTodos(newincompleteTodos);
  };
  const onClickBack = (index) => {
    const newCompleteTodos = [...completeTodos];
    const newincompleteTodos = [...incompleteTodos, newCompleteTodos[index]];
    newCompleteTodos.splice(index, 1);
    setcompleteTodos(newCompleteTodos);

    //  const incompleteTodos=[...incompleteTodos,completeTodos[index]];
    setIncompleteTodos(newincompleteTodos);
  };
  return (
    <>
      <div class="input-area">
        <input
          placeholder="todo入力"
          value={todoText}
          onChange={onChangetodoText}
        />
        <button onClick={OnClickAdd}>追加</button>
      </div>
      <div class="imcomplete-area">
        <p class="title">未完了のTODO</p>
        <ul>
          {incompleteTodos.map((todo, index) => {
            return (
              <div key={todo} class="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickComplete(index)}>完了</button>
                <button onClick={() => onClickDelte(index)}>削除</button>
              </div>
            );
          })}
        </ul>
      </div>
      <div class="complete-area">
        <p class="title">完了のTODO</p>
        <ul>
          {completeTodos.map((todo, index) => {
            return (
              <div key={todo} class="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickBack(index)}>戻す</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
export default App;
