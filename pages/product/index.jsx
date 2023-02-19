import Header from "../../src/components/header/Header";
import Footer from "../../src/components/footer/Footer";
import ProductImage from "../../src/components/product/ProductImage";
import ProductInfoTitle from "../../src/components/product/ProductInfoTitle";
import ProductInfoPrice from "../../src/components/product/ProductInfoPrice";
import ProductInfoStatus from "../../src/components/product/ProductInfoStatus";
import ProductInfoLikes from "../../src/components/product/ProductInfoLikes";
import ProductInfoCreator from "../../src/components/product/ProductInfoCreator";

export default function Product() {
  return (
    <>
      <Header />
      <ProductImage url="/images/nft.jpg" />
      <ProductInfoTitle text="Shallow Son" />
      <ProductInfoPrice amount={"3"} currency={"ETH"} />
      <ProductInfoStatus />
      <ProductInfoLikes amount={100000} />
      <ProductInfoCreator name={"Creator"} avatar={"/images/avatar.png"} verified={true} />
      <Footer />
    </>
  );
}
