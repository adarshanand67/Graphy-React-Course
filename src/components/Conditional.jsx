import React, { useState } from "react";

const Conditional = () => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [ageGreaterThan20, setAgeGreaterThan20] = useState(false);

  setTimeout(() => {
    setLoading(false);

    setUser({
      name: "John",
      age: 5,
    });
    if (user?.age > 20) {
      setAgeGreaterThan20(true);
    }
  }, 3000);

  // if (user?.age > 20) {
  //   setAgeGreaterThan20(true);
  // }

  return (
    <div>
      {loading && !ageGreaterThan20 ? (
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
