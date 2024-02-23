import styles from "./index.module.scss";

const ColorRadioBtn = (props) => {
  const { name, value, defaultValue } = props;

  return (
    <div className={styles["radio-btn-container"]}>
      <label>
        <input
          defaultChecked={defaultValue === value}
          type="radio"
          value={value}
          name={name}
        />

        <span
          style={{ backgroundColor: value }}
          className={styles["swatch"]}
        ></span>
      </label>
    </div>
  );
};

export default ColorRadioBtn;
