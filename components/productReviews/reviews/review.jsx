import StarRating from "../../starRating";
import styles from "./index.module.scss";

const Review = ({ data }) => {
  return (
    <div className={styles["review-container"]}>
      <div className={styles["review-wrap"]}>
        <div className="flex jcb">
          <div>
            <div className={styles["review-author-name"]}>{data.author}</div>

            <StarRating constantRate={data.rating} starSize={"1.5rem"} />
          </div>
          <div className={styles["review-date"]}>{data.date}</div>
        </div>

        <p className={styles["review-text"]}>{data.comment}</p>
      </div>
    </div>
  );
};

export default Review;
