import React, { useContext } from "react";
import { TodoContext } from "../../context/TodoProvider";

const TodoList = () => {
  const { state, dispatch } = useContext(TodoContext);
  console.log(state);
  return (
    <div className="mt-3">
      {state?.map((item, index) => (
        <div key={item.id}>
          <p
            onClick={() =>
              dispatch({ type: "taskCompleted", payload: item.id })
            }
          >
            {index + 1}.{" "}
            <span className={item.isCompleted === true ? "line-through" : ""}>
              {item.title}
            </span>
          </p>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
