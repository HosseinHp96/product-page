import StarRating from "../starRating";
import styles from "./index.module.scss";

const Review = () => {
  return (
    <div className={styles["review-container"]}>
      <div className={styles["review-wrap"]}>
        <div className={styles["review-author-name"]}>Hossein Hosseinpour</div>

        <StarRating rate={4.5} />

        <p className={styles["review-text"]}>
          First of all, you start off by hiding the actual circular radio
          buttons themselves – we’ll just be styling the labels. We can select
          them by using input. Initially I was hiding this by
          setting display:none, but as Patryk Kiedrowski points out in the
          comments, that will mean they are unfocusable and unable to be
          navigated via the keyboard. So instead, we make it invisible with the
          following settings:
        </p>
      </div>
    </div>
  );
};

export default Review;
