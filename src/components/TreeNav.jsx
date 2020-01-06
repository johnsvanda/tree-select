import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { TreeContext } from "./TreeContext.jsx";
import styles from "./TreeSelect.module.scss";
const TreeNav = props => {
  const { nav, back, setToRender } = useContext(TreeContext);

  const handleClickBack = () => {
    setToRender(back[back.length - 1]);
    back.pop();
    nav.pop();
  };
  return (
    <li
      className={styles.nav}
      style={nav.length === 1 ? { display: "none" } : { display: "block" }}
    >
      {nav[nav.length - 1]}
      <FontAwesomeIcon
        icon={faChevronLeft}
        className={styles.backIcon}
        onClick={handleClickBack}
      />
    </li>
  );
};
export default TreeNav;
