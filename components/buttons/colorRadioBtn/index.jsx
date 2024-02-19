import styles from "./index.module.scss";

const ColorRadioBtn = (props) => {
  const { id, name, value } = props;

  return (
    <div className={styles["radio-btn-container"]}>
      <label>
        <input type="radio" value={value} />

        <span
          style={{ backgroundColor: value }}
          className={styles["swatch"]}
        ></span>
      </label>
    </div>
  );
};

export default ColorRadioBtn;
