"use client";

import styles from "./index.module.scss";

const RadioBtn = (props) => {
  const { id, name, value, checked, onClick } = props;

  return (
    <div className={styles["radio-container"]}>
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        checked={checked || false}
        onClick={onClick}
      />
      <label for={id}>{name}</label>
    </div>
  );
};

export default RadioBtn;
