import React, { useState, createContext } from "react";
import data from "./data.json";

export const TreeContext = createContext();

export const TreeProvider = props => {
  const [back, setBack] = useState([]);
  const [toRender, setToRender] = useState(data);
  const [nav, setNav] = useState(["Kategorie"]);

  const state = {
    back,
    setBack,
    toRender,
    setToRender,
    nav,
    setNav
  };

  return (
    <TreeContext.Provider value={state}>{props.children}</TreeContext.Provider>
  );
};
