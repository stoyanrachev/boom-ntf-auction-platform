import { Container, ImageList, ImageListItem } from "@mui/material";
import { useRouter } from "next/router";
import styles from "./Featured.module.scss";

export default function Featured({ items = [] }) {
  const router = useRouter();

  return (
    <div className={styles.featured}>
      <Container maxWidth="xl">
        <ImageList cols={6} rows={2} variant="quilted" gap={20} rowHeight={226}>
          {items.map((item, key) => (
            <ImageListItem
              key={item.image}
              cols={key === 0 ? 3 : 1}
              rows={key === 0 ? 2 : 1}
            >
              <img
                className={styles.image}
                src={item.image}
                onClick={() => {
                  router.push({
                    pathname: `/product/${item.id}`,
                  });
                }}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Container>
    </div>
  );
}
