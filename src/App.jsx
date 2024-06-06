import React, { useEffect } from "react";
import { getContents } from "./helpers/axiosHelpers";

const App = () => {
  useEffect(() => {
    loadContents();
  }, []);

  const loadContents = async () => {
    const data = await getContents();
  };
  return <div>Content Calender</div>;
};

export default App;
