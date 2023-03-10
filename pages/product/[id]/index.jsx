import Header from "../../../src/components/header/Header";
import ProductContainer from "../../../src/components/product/ProductContainer";
import Footer from "../../../src/components/footer/Footer";
import dataNfts from "../../../data/nfts.json";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function Product() {
  const router = useRouter();
  const id = router.query.id;
  const [dataNft, setDataNft] = useState(null);

  useEffect(() => {
    if (router.isReady) {
      setDataNft(dataNfts.find((nft) => nft.id == id));
    }
  }, [router]);

  /*
  const router = useRouter();
  const { id } = router.query;

  const [product, setProduct] = useState(null);

  useEffect(async () => {
    if (id) {
      try {
        const result = await fetch(process.env.apiUrl + `/nfts/${id}`);
        if (result.status === 200) {
          const productData = await result.json();
          setProduct(productData);
        }
      } catch (err) {
        res.status(500).json({ error: "failed to load data" });
      }
    }
  }, [id]);

  */
  //console.log(product);
  return (
    <>
      <Header />
{/** 
      {dataNft && (
        <ProductContainer
          name={dataNft.name}
          owner={dataNft.owner}
          price={dataNft.price}
          currency={dataNft.currency}
          likes={dataNft.likes}
          auction_end={dataNft.auction_end}
          details={
            "Beaten back with a crack not knowing what was two and frow. The education system spews out to the TAB the broken promises. Unable to find a journey in a sea of dead bolted doors behind their salvation."
          }
          bids={[
            {
              user: {
                avatar: "/images/avatar.png",
                name: "Cupcat NFT 1",
                verified: true,
              },
              amount: 300,
              date: "2023-03-22T05:29:23.382Z",
            },
            {
              user: {
                avatar: "/images/avatar.png",
                name: "Cupcat NFT 2",
                verified: true,
              },
              amount: 1050,
              date: "2023-03-22T06:29:23.382Z",
            },
            {
              user: {
                avatar: "/images/avatar.png",
                name: "Cupcat NFT 3",
                verified: true,
              },
              amount: 530,
              date: "2023-03-22T08:29:23.382Z",
            },
            {
              user: {
                avatar: "/images/avatar.png",
                name: "Cupcat NFT 4",
                verified: true,
              },
              amount: 15000,
              date: "2023-03-22T09:29:23.382Z",
            },
          ]}
          source={dataNft.source}
          isLive={true}
          buyAmount={3}
          bidAmount={1}
          onBuy={() => {}}
          onBid={() => {}}
          onTimeEnd={() => {}}
        />
      )}
*/}
      {/*
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
      */}
      <Footer />
    </>
  );
}
