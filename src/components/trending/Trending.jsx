import styles from "./Trending.module.scss";
import {
  FormControl,
  Grid,
  Select,
  MenuItem,
  Container,
  InputLabel,
} from "@mui/material";

import Card from "../card/Card";

export default function Trending() {
  const cardsArr = [
    {
      name: "Ivy",
      user: {
        avatar: {
          url: "/images/avatar.png",
        },
        verified: true,
      },
      mediaUrl: "images/nft.jpg",
      price: 1,
      currency: "ETH",
    },
    {
      name: "Judie",
      user: {
        avatar: {
          url: "/images/avatar.png",
        },
        verified: true,
      },
      mediaUrl: "images/nft.jpg",
      price: 2.3,
      currency: "ETH",
    },
    {
      name: "Juniper",
      user: {
        avatar: {
          url: "/images/avatar.png",
        },
        verified: true,
      },
      mediaUrl: "images/nft.jpg",
      price: 5,
      currency: "ETH",
    },
    {
      name: "Maple",
      user: {
        avatar: {
          url: "/images/avatar.png",
        },
        verified: true,
      },
      mediaUrl: "images/nft.jpg",
      price: 10,
      currency: "ETH",
    },
  ];
  return (
    <Container>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item>
          <h1 className={styles.title}>Trending</h1>
        </Grid>
        <Grid item sx={{ minWidth: 220 }}>
          <FormControl fullWidth className={styles.select} size={"small"}>
            <InputLabel id="select-label">Sort By</InputLabel>
            <Select labelId="select-label">
              <MenuItem value="Today">Today</MenuItem>
              <MenuItem value="This week">This week</MenuItem>
              <MenuItem value="This month">This month</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        {cardsArr.slice(0, 4).map((card, index) => (
          <Grid item md={3} key={index}>
            <Card {...card} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
