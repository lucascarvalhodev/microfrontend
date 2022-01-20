import React from "react";
import { Link, useHistory } from "react-router-dom";

const Page1 = () => {
  const { goBack, push } = useHistory();

  return (
    <div>
      <h3>Page1</h3>
      <Link to="/page2">Page2</Link>

      <button onClick={goBack}>goBack</button>
    </div>
  );
};

export default Page1;
