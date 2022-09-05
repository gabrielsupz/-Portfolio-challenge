import React, { useEffect, useState } from "react";
import Aside from "./aside";
import Main from "./main";

const App = () => {
  const [user, setUser] = useState({ name: "", avatar: "" });

  useEffect(() => {
    fetch("https://api.github.com/users/gabrielsupz")
      .then((response) => response.json())
      .then((data) => {
        setUser({
          name: data.name,
          avatar: data.avatar_url,
        });
      });
  }, []);

  return (
    <div className="page">
      <Aside user={user} />
      <Main user={user} />
    </div>
  );
};

export default App;
