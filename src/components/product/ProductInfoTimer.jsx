import styles from "./ProductInfoTimer.module.scss";
import Countdown from "react-countdown";

export default function ProductInfoTimer({ timeEnd = null, onTimeEnd }) {
  return (
    <div>
      {timeEnd !== null && (
        <div
          className={`${styles["product-info-timer"]} ${
            timeEnd !== null && styles.active
          }`}
        >
          <div className={styles.header}>
            <div className={styles.title}>Ends in</div>
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
    </div>
  );
}
