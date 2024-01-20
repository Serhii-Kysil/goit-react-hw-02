import css from "./Options.module.css";

export const Options = ({
  handleGood,
  handleNeutral,
  handleBad,
  handleReset,
  totalFeedback,
}) => {
  return (
    <div className={css.btnCont}>
      <button onClick={handleGood} className={css.btn}>
        Good
      </button>
      <button onClick={handleNeutral} className={css.btn}>
        Neutral
      </button>
      <button onClick={handleBad} className={css.btn}>
        Bad
      </button>
      {totalFeedback > 0 && (
        <button onClick={handleReset} className={css.btn}>
          Reset
        </button>
      )}
    </div>
  );
};
