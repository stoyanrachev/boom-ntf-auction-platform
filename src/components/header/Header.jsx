import { Button, InputBase, Paper, Grid, Container } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Logo from "../logo/Logo";
import styles from "./Header.module.scss";
import Link from "next/link";

export default function Header() {
  return (
    <div className={styles.header}>
      <Container maxWidth="xl">
        <Grid container>
          <Grid item md={2}>
            <Logo />
          </Grid>
          <Grid item md={5} sx={{ display: "flex" }}>
            <Paper
              className={styles.searchPaper}
              sx={{
                p: "0.625rem",
                display: "flex",
                alignItems: "center",
                width: "36.25rem",
              }}
            >
              <SearchIcon className={styles.searchIcon} />
              <InputBase
                className={styles.searchInput}
                placeholder="Find items, users and activities"
              />
            </Paper>
          </Grid>
          <Grid
            item
            md={5}
            sx={{ display: "flex", justifyContent: "flex-end" }}
          >
            <Link href="/">
              <Button className={styles.menuItem} variant={"text"}>
                Home
              </Button>
            </Link>
            <Link href="/activity">
              <Button className={styles.menuItem} variant={"text"}>
                Activity
              </Button>
            </Link>
            <Link href="/explore">
              <Button className={styles.menuItem} variant={"contained"}>
                EXPLORE
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
