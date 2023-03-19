import { useState, useEffect } from "react";
import Header from "../src/components/header/Header";
import Featured from "../src/components/featured/Featured";
import Trending from "../src/components/trending/Trending";
import TopCollectors from "../src/components/collectors/TopCollectors";
import How from "../src/components/how/How";
import Auctions from "../src/components/auctions/Auctions";
import Footer from "../src/components/footer/Footer";
import dataFeatured from "../data/featured.json";
import dataTrending from "../data/trending.json";
import dataUsers from "../data/users.json";
import dataNfts from "../data/nfts.json";

export default function Index() {
  /*Featured API Call*/
  const [featuredCards, setFeaturedCards] = useState([]);
  useEffect(async () => {
    const result = await fetch(process.env.apiUrl + "/featured");
    const featuredData = await result.json();
    setFeaturedCards(featuredData.nfts);
  }, []);

  /*Trending API Call*/
  const [trendingItems, setTrendingItems] = useState([]);
  const [trendingFilterValue, setTrendingFilterValue] = useState(0);
  const [trendingFilters, setTrendingFilters] = useState([]);

  function onTrendingChange(e) {
    setTrendingFilterValue(e.target.value);
  }

  const monthInMilliseconds = 2.6298e9;

  const trendingFilterFunctions = {
    1: function (e) {
      return monthInMilliseconds > Date.now() - new Date(encodeURI.created_at);
    },
    2: function (e) {
      return monthInMilliseconds * 12 > Date.now() - new Date(e.created_at);
    },
  };

  useEffect(async () => {
    const result = await fetch(
      process.env.apiUrl + "/trending?sort=" + trendingFilterValue
    );
    const featuredData = await result.json();

    setTrendingFilters(featuredData.filters.sort);
    if (
      trendingFilterValue &&
      (trendingFilterValue === 1 || trendingFilterValue === 2)
    ) {
      setTrendingItems(
        featuredData.nfts.filter(trendingFilterFunctions[trendingFilterValue])
      );
    } else {
      setTrendingItems(featuredData.nfts);
    }
  }, [trendingFilterValue]);

  /*Top Collectors API Call*/

  const collectorSortingFunctions = {
    asc: function (a, b) {
      return a.nftCount - b.nftCount;
    },
    desc: function (a, b) {
      return b.nftCount - a.nftCount;
    },
  };

  const [collectorSortValue, setCollectorSortValue] = useState("asc");
  const [collectors, setCollectors] = useState([]);
  const [collectorFilters, setcollectorFilters] = useState([]);
  useEffect(async () => {
    const result = await fetch(
      process.env.apiUrl + "/top-collectors?sort=" + collectorSortValue
    );
    const userData = await result.json();
    setcollectorFilters(userData.filters.sort);
    if (collectorSortValue) {
      setCollectors(
        userData.users.sort(collectorSortingFunctions[collectorSortValue])
      );
    } else {
      setCollectors(userData.users);
    }
  }, [collectorSortValue]);

  function onCollectorChange(e) {
    setCollectorSortValue(e.target.value);
  }

  /*Live Auctions API Call*/

  const auctionFilterFunctions = {
    1: function (e) {
      return e.price < 0.1;
    },
    2: function (e) {
      return e.price > 0.1 && el.price < 0.5;
    },
    3: function (e) {
      return e.price > 0.5;
    },
  };

  const [auctionFilterValue, setAuctionFilterValue] = useState(0);
  const [auctions, setAuctions] = useState([]);
  const [auctionFilters, setAuctionFilters] = useState([]);
  useEffect(async () => {
    const result = await fetch(
      process.env.apiUrl + "/live-auctions?sort=" + auctionFilterValue
    );
    const auctionData = await result.json();
    setAuctionFilters(auctionData.filters.price);
    if (auctionFilterValue !== 0) {
      setAuctions(
        auctionData.nfts.filter(auctionFilterFunctions[auctionFilterValue])
      );
    } else {
      setAuctions(auctionData.nfts);
    }
  }, [auctionFilterValue]);

  function onAuctionChange(e) {
    setAuctionFilterValue(e.target.value);
  }
  return (
    <>
      <Header />
      <Featured items={featuredCards} />
      <Trending
        cards={trendingItems}
        filters={trendingFilters}
        onChange={onTrendingChange}
        filterValue={trendingFilterValue}
      />
      <TopCollectors
        collectors={collectors}
        filters={collectorFilters}
        onChange={onCollectorChange}
        sortValue={collectorSortValue}
      />
      <How
        title="How it works"
        description="Discover, collect, and sell extraordinary NFTs on the world's first and largest NFT marketplace. There are  three things you'll need in place to open your account and start buying or selling NFTs on BUM."
        items={[
          {
            title: "Digital Currency",
            description:
              "You can get ETH, the digital currency that fuels transactions on the Ethereum blockchain, from a digital currency exchange",
          },
          {
            title: "Crypto Wallet",
            description:
              "A crypto wallet, such as MetaMask, stores your ETH and processes transactions on the Ethereum blockchain.",
          },
          {
            title: "BUM.",
            description:
              "Let's connect your wallet to BUM, edit your profile, and begin interacting in the space.",
          },
        ]}
        link="https://app.boom.de"
      />
      <Auctions
        cards={auctions}
        filters={auctionFilters}
        onChange={onAuctionChange}
        filterValue={auctionFilterValue}
      />
      <Footer />
    </>
  );
}
