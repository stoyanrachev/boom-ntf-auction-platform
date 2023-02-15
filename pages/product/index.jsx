import Header from "../../src/components/header/Header";
import Footer from "../../src/components/footer/Footer";
import ProductImage from "../../src/components/product/ProductImage";
import ProductInfoTitle from "../../src/components/product/ProductInfoTitle";

export default function Product() {
  return (
    <>
      <Header />
      <ProductImage url="/images/nft.jpg" />
      <ProductInfoTitle text="Shallow Son" />
      <Footer />
    </>
  );
}
