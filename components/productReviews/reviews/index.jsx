import Review from "./review";
import styles from "./index.module.scss";

const Reviews = () => {
  return (
    <div className={`container w100 ${styles["container"]}`}>
      <div className={styles["wrapper"]}>
        <Review />
        <Review />
        <Review />
        <Review />
        <Review />
        <Review />
        <Review />
        <Review />
        <Review />
      </div>
    </div>
  );
};

export default Reviews;
