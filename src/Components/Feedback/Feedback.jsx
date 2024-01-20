import css from "./Feedback.module.css";

export const Feedback = ({
  feedbackTypes,
  positivePercentage,
  totalFeedback,
}) => {
  if (totalFeedback === 0) {
    return null;
  }
  return (
    <div className={css.feedbacks}>
      <p>Good: {feedbackTypes.good}</p>
      <p>Neutral: {feedbackTypes.neutral}</p>
      <p>Bad: {feedbackTypes.bad}</p>
      <p>Total: {totalFeedback}</p>
      <p>Positive: {positivePercentage}%</p>
    </div>
  );
};
