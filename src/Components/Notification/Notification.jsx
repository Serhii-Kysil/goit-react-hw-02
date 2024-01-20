import css from "./Notification.module.css";

export const Notification = ({ totalFeedback }) => {
  if (totalFeedback === 0) {
    return <p className={css.text}>No feedback yet</p>;
  }
};
