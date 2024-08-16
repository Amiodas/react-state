import { ChangeEvent, useReducer } from "react";

type TAction = {
  type: string;
  payload: string;
};

const initialState = {
  name: "",
  age: "",
  hobbies: [] as string[],
};

const reducer = (currentState: any, action: TAction) => {
  switch (action.type) {
    case "addName":
      return { ...currentState, name: action.payload };
    // break;
    case "addAge":
      return { ...currentState, age: action.payload };
    case "addHobby":
      return {
        ...currentState,
        hobbies: [...currentState.hobbies, action.payload],
      };

    default:
      break;
  }
};

const UserInfoWithUserReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  // console.log(state);

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(state);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} action="" className="flex flex-col">
        <input
          onChange={(event) =>
            dispatch({ type: "addName", payload: event.target.value })
          }
          className="border border-blue-600 p-2 rounded-lg mb-3"
          type="text"
          name="name"
          id="name"
          placeholder="name"
        />
        <input
          onChange={(event) =>
            dispatch({ type: "addAge", payload: event.target.value })
          }
          className="border border-blue-600 p-2 rounded-lg mb-3"
          type="number"
          name="age"
          id="age"
          placeholder="age"
        />
        <input
          onBlur={(event) =>
            dispatch({ type: "addHobby", payload: event.target.value })
          }
          // onChange={(e) => setUser({ ...user, hobbies: [...user.hobbies, e.target.value] })}
          className="border border-blue-600 p-2 rounded-lg mb-3"
          type="text"
          name="hobbies"
          id="hobbies"
          placeholder="hobby"
        />
        <button type="submit" className="bg-blue-600 text-white p-3 rounded-lg">
          Submit
        </button>
      </form>
    </div>
  );
};

export default UserInfoWithUserReducer;
