import React, { useState } from "react";
import data from "./data.json";
import CardComponent from "./CardComponent";
import DataContext from "./dataContext";

const Logo = () => {
  const [newData, setNewData] = useState(data.users);
  return (
    <DataContext.Provider value={newData}>
      <CardComponent />
    </DataContext.Provider>
  );
};

export default Logo;
