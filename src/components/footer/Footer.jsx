import styles from "./Footer.module.scss";
import { Grid, Button, Container } from "@mui/material";
import Logo from "../logo/Logo";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <Container  maxWidth="xl">
        <Grid container>
          <Grid item md={4}>
            <Logo type={"muted"} />
          </Grid>
          <Grid item md={4} sx={{ display: "flex", alignItems: "center" }}>
            <div className={styles.rights}>Bum All Rights Reserved 2023</div>
          </Grid>
          <Grid
            item
            md={4}
            sx={{ display: "flex", justifyContent: "flex-end" }}
          >
            <Button className={styles.menuItem} variant={"text"}>
              Privacy Policy
            </Button>
            <Button className={styles.menuItem} variant={"text"}>
              Cookie Policy
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
