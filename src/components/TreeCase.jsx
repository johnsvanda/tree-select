import React, { useContext, Fragment } from "react";
import TreeNav from "./TreeNav.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TreeContext } from "./TreeContext.jsx";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import styles from "./TreeSelect.module.scss";

const TreeCase = props => {
  const { setBack, toRender, setToRender, setNav } = useContext(TreeContext);

  const renderArray = arrays => {
    if (arrays) {
      let result = arrays.map((parent, i) => (
        <div key={i} className={styles.treeNode}>
          <li
            onClick={() => {
              if (parent.children) {
                setToRender(parent.children);
                setNav(nav => [...nav, parent.label]);
                setBack(back => [...back, arrays]);
              }
              // final node
              else {
                props.setCategory(parent.label);
              }
            }}
          >
            <span>{parent.label}</span>
          </li>
          {parent.children ? (
            <FontAwesomeIcon
              icon={faChevronRight}
              className={styles.rightIcon}
            />
          ) : (
            ""
          )}
        </div>
      ));
      return (
        <Fragment>
          <TreeNav />
          {result}
        </Fragment>
      );
    } else {
      console.log("No category data");
    }
  };

  return renderArray(toRender);
};
export default TreeCase;
