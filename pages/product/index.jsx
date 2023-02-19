import Header from "../../src/components/header/Header";
import Footer from "../../src/components/footer/Footer";
import ProductImage from "../../src/components/product/ProductImage";
import ProductInfoTitle from "../../src/components/product/ProductInfoTitle";
import ProductInfoPrice from "../../src/components/product/ProductInfoPrice";
import ProductInfoStatus from "../../src/components/product/ProductInfoStatus";
import ProductInfoLikes from "../../src/components/product/ProductInfoLikes";
import ProductInfoCreator from "../../src/components/product/ProductInfoCreator";
import ProductInfoTimer from "../../src/components/product/ProductInfoTimer";
import ProductInfo from "../../src/components/product/ProductInfo";

export default function Product() {
  return (
    <>
      <Header />
      <ProductImage url="/images/nft.jpg" />
      <ProductInfoTitle text="Shallow Son" />
      <ProductInfoPrice amount={"3"} currency={"ETH"} />
      <ProductInfoStatus />
      <ProductInfoLikes amount={100000} />
      <ProductInfoCreator
        name={"Creator"}
        avatar={"/images/avatar.png"}
        verified={true}
      />
      <ProductInfoTimer timeEnd={"2023-12-15T11:02:08.754Z"} />
      <ProductInfo
        title={"name"}
        creator={{
          name: "creator name",
          avatar: "/images/avatar.png",
          verified: true,
        }}
        price={10}
        currency={"ETH"}
        likes={1000}
        timeEnd={"2023-12-15T11:02:08.754Z"}
        onTimeEnd={null}
        isLive={true}
      />
      <Footer />
    </>
  );
}
