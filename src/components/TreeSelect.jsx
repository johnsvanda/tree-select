import React, { useState, useEffect, useRef } from "react";
import Form from "react-bootstrap/Form";
import TreeCase from "./TreeCase.jsx";
import { TreeProvider } from "./TreeContext.jsx";
import styles from "./TreeSelect.module.scss";

const TreeSelect = () => {
  const [displayNodes, setDisplayNodes] = useState(false);
  const [category, setCategory] = useState("Choose category...");

  const wrapper = useRef(null);

  // OPEN/CLOSE SELECT
  const openSelect = () => {
    setDisplayNodes(!displayNodes);
  };

  const handleClickOutside = e => {
    if (wrapper.current && !wrapper.current.contains(e.target))
      setDisplayNodes(false);
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
  });

  return (
    <TreeProvider>
      <div className={styles.wrapper} ref={wrapper}>
        <h1>Simple TreeSelect in React</h1>
        <Form>
          <Form.Control
            as="select"
            className={styles.TreeSelect}
            defaultValue="default"
            onClick={openSelect}
          >
            <option value="default" className={styles.defaultOption}>
              {category}
            </option>
          </Form.Control>
          {displayNodes ? (
            <ul className={styles.TreeNode}>
              <TreeCase setCategory={setCategory} />
            </ul>
          ) : (
            ""
          )}
        </Form>
      </div>
    </TreeProvider>
  );
};
export default TreeSelect;
