import styles from "./index.module.scss";

const TextRadioBtn = (props) => {
  const { id, name, value, defaultValue } = props;

  return (
    <div className={styles["radio-container"]}>
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        defaultChecked={defaultValue === value}
      />
      <label htmlFor={id}>{value}</label>
    </div>
  );
};

export default TextRadioBtn;
