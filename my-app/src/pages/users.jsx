/*users.jsx*/
import React from "react";
/* We simply can use an array and loop and print each user */

// can be friends list + other ppl to add ! 
const UsersPage = () => {
  return (
    <div>
      <ul>
        {["Alex", "John", "Jaz", "fedrik", "missali"].map((user, idx) => {
          return <li key={idx}>{user}</li>;
        })}
      </ul>
    </div>
  );
};

export default UsersPage;
