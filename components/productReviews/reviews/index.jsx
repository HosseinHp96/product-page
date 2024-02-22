import Review from "./review";
import styles from "./index.module.scss";

const Reviews = () => {
  return (
    <div className={`container w100 ${styles["container"]}`}>
      <div className={styles["wrapper"]}>
        {[...Array(9)].map((reviwe, key) => (
          <Review key={key} />
        ))}
      </div>
    </div>
  );
};

export default Reviews;
