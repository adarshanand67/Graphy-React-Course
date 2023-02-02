import React, { useState } from "react";

const Conditional = () => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  setTimeout(() => {
    setLoading(false);

    setUser({
      name: "John",
      age: 25,
    });
  }, 3000);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <h1>{user.name}</h1>
          <h2>{user.age}</h2>
        </div>
      )}
    </div>
  );
};

export default Conditional;
