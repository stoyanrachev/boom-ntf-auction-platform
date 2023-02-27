import styles from "./ActivityListItem.module.scss";
import { parseISO, formatDistance } from "date-fns";
import Avatar from "../avatar/Avatar";
import Link from "../link/Link";

export default function ActivityListItem({
  user,
  created_at,
  nft,
  type = "like",
}) {
  let activity;

  switch (type) {
    case "like":
      activity = "liked";
      break;
    case "buy":
      activity = "bought";
      break;
  }

  return (
    <div className={styles["activity-list-item"]}>
      <Avatar size={56} url={user.avatar.url} verified={user.verified} />
      <div className={styles["activity-info"]}>
        <div className={styles.text}>
          <span className={styles.name}>{user.name}</span>
          <span> {activity} </span>
          <Link
            className={styles.link}
            href={`/product/${nft.id}`}
          >{`\"${nft.name}\"`}</Link>
          <span> by </span>
          <Link className={styles.link} href={`/profile/${nft.owner.id}`}>
            {nft.owner.username}
          </Link>
        </div>
        <div className={styles.elapsed}>
          {formatDistance(Date.now(), parseISO(created_at))}
        </div>
      </div>
    </div>
  );
}
