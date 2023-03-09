import styles from "./ActivityList.module.scss";
import ActivityListItem from "./ActivityListItem";
import { Container, Stack } from "@mui/material";


export default function ActivityList({ items = [] }) {
  return (
    <div className={styles["activity-list"]}>
      <Container>
        <Stack direction={"column"} spacing={2}>
          {items.map((item, i) => {
            return <ActivityListItem key={i} {...item} />;
          })}
        </Stack>
      </Container>
    </div>
  );
}


function ActivityList_After({items = []}) {
  return(
      <div className={styles["activity-list"]}>
          <Stack direction={"column"} spacing={2} alignItems='center'>
              {items.map((item,index)=>{
                  return <ActivityListItem 
                  key={index}
                  user={item.user} 
                  created_at={item.published_at} 
                  nft={item.nft} 
                  type={item.type}
                  />
              })}
          </Stack>
      </div>
  )
}