import Review from "./review";
import styles from "./index.module.scss";

const Reviews = ({ data }) => {
  return (
    <div className={`container w100 ${styles["container"]}`}>
      <div className={styles["wrapper"]}>
        {data.map((review, key) => (
          <Review key={key} data={review} />
        ))}
      </div>
    </div>
  );
};

export default Reviews;
