import styles from "./Card.module.scss";
import CardBox from "@mui/material/Card";
import {
  Container,
  Grid,
  CardMedia,
  CardContent,
  CardHeader,
  Chip,
  Badge,
} from "@mui/material";
import millify from "millify";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Avatar from "../avatar/Avatar";
import Countdown from "react-countdown";
import LiveIcon from "@mui/icons-material/FiberManualRecord";

export default function Cart({
  name = "String",
  likes = 0,
  mediaUrl = "/images/nft.jpg",
  user = {
    avatar: {
      url: "/images/avatar.png",
    },
    verified: true,
  },
  price = "12.2",
  currency = "ETH",
  timeLeft = 1000000,
}) {
  return (
    <CardBox className={`${styles.card} ${timeLeft && styles.live}`}>
      <CardHeader
        avatar={
          <Avatar size="33px" url={user.avatar.url} verified={user.verified} />
        }
      />
      <div className={styles.relative}>
        <CardMedia className={styles.media} component="img" image={mediaUrl} />
        {timeLeft && (
          <Grid>
            <Badge className={styles.badge} badgeContent={"Live".toUpperCase()}>
              <LiveIcon />
            </Badge>
            <div className={styles.countdown}>
              <Countdown date={Date.now() + timeLeft} />
            </div>
          </Grid>
        )}
      </div>

      <CardContent>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item>
            <div className={styles.title}>{name}</div>
            <div className={styles.price}>
              ~{price} {currency}
            </div>
          </Grid>
          <Grid item>
            <Chip
              className={styles.likes}
              icon={<FavoriteIcon className={styles.heart} />}
              label={millify(likes)}
              variant="outlined"
            />
          </Grid>
        </Grid>
      </CardContent>
    </CardBox>
  );
}
