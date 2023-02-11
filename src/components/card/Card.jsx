import styles from "./Card.module.scss";
import CardBox from "@mui/material/Card";
import {
  CardMedia,
  CardContent,
  CardHeader,
  Chip,
  Grid,
  Badge,
} from "@mui/material";
import millify from "millify";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Avatar from "../avatar/Avatar";

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
}) {
  return (
    <CardBox className={styles.card}>
      <CardHeader
        avatar={
          <Avatar size="33px" url={user.avatar.url} verified={user.verified} />
        }
      />
      <CardMedia className={styles.media} component="img" image={mediaUrl} />
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
