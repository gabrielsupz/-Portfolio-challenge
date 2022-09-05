import React, { useEffect, useState } from "react";
import Aside from "./aside";
import Main from "./main";
import { ThemeProvider } from "styled-components";

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

  const theme = {
    test: "red",
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="page">
        <Aside user={user} />
        <Main user={user} />
      </div>
    </ThemeProvider>
  );
};

export default App;
