import { useState } from "react";

type TUser = {
  name: string;
  age: number;
  hobbies: string[];
};

const UserInfoWithUseState = () => {
  const [user, setUser] = useState<TUser>({ name: "", age: 0, hobbies: [] });
  console.log(user);
  return (
    <div className="">
      <form action="" className="flex flex-col">
        <input
          onChange={(e) => setUser({ ...user, name: e.target.value })}
          className="border border-blue-600 p-2 rounded-lg mb-3"
          type="text"
          name="name"
          id="name"
          placeholder="name"
        />
        <input
          onChange={(e) => setUser({ ...user, age: Number(e.target.value) })}
          className="border border-blue-600 p-2 rounded-lg mb-3"
          type="number"
          name="age"
          id="age"
          placeholder="age"
        />
        <input
          onChange={(e) =>
            setUser({ ...user, hobbies: [...user.hobbies, e.target.value] })
          }
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

export default UserInfoWithUseState;
