import Header from "../../../src/components/header/Header";
import ProductContainer from "../../../src/components/product/ProductContainer";
import Footer from "../../../src/components/footer/Footer";
import dataNfts from "../../../data/nfts.json";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function Product() {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState(null);
  useEffect(async () => {
    if (id) {
      const result = await fetch(process.env.apiUrl + `/nfts/${id}`);
      const productData = await result.json();
      setProduct(productData);
    }
  }, [id]);
  return (
    <>
      <Header />
      {product !== null && (
        <ProductContainer
          name={product.name}
          source={product.source}
          owner={{
            username: product.owner.username,
            verified: product.owner.confirmed,
            avatar: product.owner.avatar,
            id: product.owner.id,
          }}
          price={product.price}
          currency={product.currency}
          likes={product.likes}
          auction_end={product.auction_end}
          details={product.details}
          bids={product.bids}
        />
      )}
      <Footer />
    </>
  );
}
