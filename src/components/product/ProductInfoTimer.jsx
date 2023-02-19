import styles from "./ProductInfoTimer.module.scss";
import Countdown from "react-countdown";

export default function ProductInfoTimer({ timeEnd = null, onTimeEnd }) {
  return (
    <>
      {timeEnd && (
        <div
          className={`${styles["product-info-timer"]} ${
            timeEnd && styles.active
          }`}
        >
          <div className={styles.header}>
            <p className={styles.title}>Ends in</p>
          </div>
          <div className={styles.timer}>
            <Countdown
              onComplete={onTimeEnd}
              date={timeEnd}
              renderer={({ hours, minutes, seconds }) => (
                <span suppressHydrationWarning={true}>
                  {hours}:{minutes}:{seconds}
                </span>
              )}
            />
          </div>
        </div>
      )}
    </>
  );
}
