import React, { FormEvent, useContext, useState } from "react";
import { TodoContext } from "../../context/TodoProvider";

const TodoForm = () => {
  const { state, dispatch } = useContext(TodoContext);
  console.log(state);
  const [task, setTask] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const todo = {
      id: Math.random().toString(36).substring(2, 7),
      title: task,
      isCompleted: false,
    };
    console.log(todo);
    dispatch({ type: "addTodo", payload: todo });
  };
  return (
    <div className="mt-5">
      <h1 className="text-2xl mb-3">Add todo</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="Todo">Task Name: </label>
        <input
          className="border border-blue-600 p-1 rounded"
          type="text"
          name="todo"
          placeholder="Enter task enter"
          id="todo"
          onBlur={(e) => setTask(e.target.value)}
        />
        <button className="btn bg-purple-500 text-white p-1 ml-3" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
