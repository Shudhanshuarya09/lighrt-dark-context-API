import React, { useState } from "react";
import Posts from "./Components/Posts";
import { ThemeContext, themes } from "./Context/themeContext";

function App() {
  const [theme, setTheme] = useState(themes.light);
  return (
    <>
      <ThemeContext.Provider value={theme} >
        <div className="container">
          <h1>Hello</h1>
          <Posts theme={theme} />
        </div>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
