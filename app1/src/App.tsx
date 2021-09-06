import React from "react";
import Routes from "./routes";
import { useAuth } from "providers/AuthProvider";

const App = () => {
  const { user, setUser } = useAuth();

  return (
    <div>
      <div>
        <h3 style={{ color: "red" }}>App1</h3>
      </div>
      <div>
        <Routes />
      </div>
      <div style={{ marginTop: "20px" }}>
        <label>User: </label>
        <input
          type="text"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
      </div>
    </div>
  );
};

export default App;
