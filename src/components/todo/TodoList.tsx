import React, { useContext } from "react";
import { TodoContext } from "../../context/TodoProvider";

const TodoList = () => {
  const { state, dispatch } = useContext(TodoContext);
  console.log(state);
  return (
    <div>
      {state?.map((item) => (
        <div key={item.id}>
          <p
            className={
              item.isCompleted === true ? "line-through" : ""
            }
            onClick={() =>
              dispatch({ type: "taskCompleted", payload: item.id })
            }
          >
            {item.title}
          </p>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
