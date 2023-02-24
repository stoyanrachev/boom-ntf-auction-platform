import styles from "./Auctions.module.scss";
import {
  FormControl,
  Grid,
  Select,
  MenuItem,
  Container,
  InputLabel,
} from "@mui/material";

import Card from "../card/Card";

export default function Auctions({
  cards = [],
  filters = [],
  onChange,
  filterValue,
}) {
  /*
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
      timeLeft: 1000000,
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
      timeLeft: 1000000,
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
      timeLeft: 1000000,
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
      timeLeft: 1000000,
    },
  ];
  */
  return (
    <div className={styles.wrapper}>
      <Container className={styles.container} maxWidth="xl">
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item>
            <h1 className={styles.title}>🔥 Live Auctions</h1>
          </Grid>
          <Grid item sx={{ minWidth: 220 }}>
            <FormControl fullWidth className={styles.select} size={"small"}>
              <InputLabel id="select-label">Sort By</InputLabel>
              <Select
                id="select-label"
                defaultValue={0}
                value={filterValue}
                onChange={onChange}
              >
                <MenuItem value={0}>All items</MenuItem>
                {filters.map((item, index) => {
                  return (
                    <MenuItem key={index} value={item.value}>
                      {item.label}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          {cards.slice(0, 4).map((card, index) => (
            <Grid item md={3} key={index}>
              <Card {...card} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}
