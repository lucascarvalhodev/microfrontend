import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "providers/AuthProvider";

const Navbar: React.FC = () => {
  const { user, setUser } = useAuth();

  return (
    <>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div>Microfrontend</div>
        <div
          style={{
            display: "flex",
          }}
        >
          <div
            style={{
              margin: "0 10px",
            }}
          >
            <Link to="/">Home</Link>
          </div>
          <div
            style={{
              margin: "0 10px",
            }}
          >
            <Link to="/app1">App1</Link>
          </div>
          <div
            style={{
              margin: "0 10px",
            }}
          >
            <Link to="/app2">App2</Link>
          </div>
        </div>
        <div>
          <label>User: </label>
          <input
            type="text"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
        </div>
      </div>
      <hr />
    </>
  );
};

export default Navbar;
