import { useState } from "react";

const User = () => {
  const [user, setUser] = useState(null);
  const newUser = {
    name: "Check out mockapi.io",
    avatar: "Avatar Link",
    age: 100,
  };
  function createUser() {
    fetch("https://68e4ced08e116898997cfcc8.mockapi.io/Example", {
      method: "POST",
      headers: { "content-type": "application/json" },
      // Send your data in the request body as JSON
      body: JSON.stringify(newUser),
    })
      .then((res) => {
        return res.json();

        // handle error
      })
      .then((user) => {
        setUser;
      })
      .catch((error) => {
        // handle error
      });
  }
  return (
    <>
      <div>{user && user.avatar}</div>
      <button onClick={() => createUser()}>Create user</button>
    </>
  );
};
export default User;
