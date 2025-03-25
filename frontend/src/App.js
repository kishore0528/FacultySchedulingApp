import React, { useState } from "react";
import Login from "./login.js";


const App = () => {
  const [user, setUser] = useState(null);

  return (
    <div>
      {user ? <h2>Welcome, {user}!</h2> : <><Login setUser={setUser} /></>}
    </div>
  );
};

export default App;
