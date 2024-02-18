import styles from "./index.module.scss";

const NavBtns = (props) => {
  const { data, setCurrentImg, currentImg } = props;

  return (
    <div className={styles["nav-container"]}>
      <button
        disabled={currentImg === 0}
        onClick={() => setCurrentImg((prev) => prev - 1)}
        className={`${styles["nav-button"]} ${
          currentImg === 0 && "opacity-50"
        }`}
      >
        {"<"}
      </button>

      <button
        disabled={currentImg === data.length - 1}
        onClick={() => setCurrentImg((prev) => prev + 1)}
        className={`${styles["nav-button"]} ${
          currentImg === data.length - 1 && "opacity-50"
        }`}
      >
        {">"}
      </button>
    </div>
  );
};

export default NavBtns;
