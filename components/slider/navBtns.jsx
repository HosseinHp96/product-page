import styles from "./index.module.scss";

const NavBtns = (props) => {
  const { showNextImg, showPrevImg } = props;

  return (
    <>
      <button
        className={`${styles["slider-btn"]} ${styles["slider-btn-right"]}`}
        onClick={showNextImg}
      >
        {">"}
      </button>

      <button
        onClick={showPrevImg}
        className={`${styles["slider-btn"]} ${styles["slider-btn-left"]}`}
      >
        {"<"}
      </button>
    </>
  );
};

export default NavBtns;
