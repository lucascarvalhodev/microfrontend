import React from "react";
import { Link } from "react-router-dom";

const Page1 = () => (
  <div>
    <h3>Page1</h3>
    <Link to="/page2">Page2</Link>
  </div>
);

export default Page1;
