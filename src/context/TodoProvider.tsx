import React, { createContext, ReactNode, useReducer } from "react";

export const TodoContext = createContext<
  | {
      state: TTodo;
      dispatch: React.Dispatch<TAction>;
    }
  | undefined
>(undefined);

type TTodo = {
  id: string;
  title: string;
  isCompleted: boolean;
};

type TAction = {
  type: string;
  payload: TTodo | string;
};

type TodoProviderProps = {
  children: ReactNode;
};

const initialState: TTodo[] = [];

const typeConstants = {
  ADD_TODO: 'addTodo',
  TASK_COMPLETED: 'taskCompleted',
};

const reducer = (currentState: any, action: TAction) => {
  switch (action.type) {
    case typeConstants.ADD_TODO:
      return [...currentState, action.payload];
    case typeConstants.TASK_COMPLETED:
      return currentState?.map((item) =>
        item.id === action.payload
          ? { ...item, isCompleted: !item.isCompleted }
          : item
      );
    default:
      return currentState;
  }
};

const TodoProvider = ({ children }: TodoProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);
  const values = {
    state,
    dispatch,
  };
  return <TodoContext.Provider value={values}>{children}</TodoContext.Provider>;
};

export default TodoProvider;
