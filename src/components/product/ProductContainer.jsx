import styles from "./ProductContainer.module.scss";
import classNames from "classnames";
import { Container ,Grid } from "@mui/material";
import ProductImage from "./ProductImage";
import ProductInfo from "./ProductInfo";
import ProductTabs from "./ProductTabs";
import ProductActions from "./ProductActions";



export default function ProductContainer({ name="", owner, price, currency, likes, auction_end, details, source, bids}) {

    return (
        <div className={classNames(styles["product-container"])}>
            <Container>
              <Grid container justifyContent={"space-around"}>
                  <Grid item xs={6}>
                      <ProductImage url={source.url}/>
                  </Grid>
                  <Grid item xs={5}>
                      <ProductInfo 
                      title={name} 
                      creator={{name:owner.username, avatar:owner.avatar.url, verified:owner.verified, id:owner.id}}
                      price={price}
                      currency={currency}
                      likes={likes}
                      timeEnd={auction_end}
                      />
                      <ProductTabs text={details} bids={bids}/>
                      <ProductActions 
                      currency={currency} 
                      buyAmount={price} 
                      />
                  </Grid>
              </Grid>
            </Container>
        </div>
    )
}