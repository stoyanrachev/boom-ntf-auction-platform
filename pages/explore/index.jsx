import Header from "../../src/components/header/Header";
import ExploreTitle from "../../src/components/explore/ExploreTitle";
import ExploreFilters from "../../src/components/explore/ExploreFilters";
import Card from "../../src/components/card/Card";
import { Container, Grid } from "@mui/material";
import Footer from "../../src/components/footer/Footer";
import dataFiltersExplore from "../../data/filtersExplore.json";
import dataNfts from "../../data/nfts.json";

import { useState, useEffect } from "react";

export default function Explore() {
  const [allNfts, getAllNfts] = useState([]);
  const [nfts, setNfts] = useState([]);
  const [nftFilters, setNftFilters] = useState(null);
  const [sortValue, setSortValue] = useState("");
  const [priceValue, setPriceValue] = useState("");
  const [searchStr, setSearchString] = useState("");

  const filterFunctions = {
    1: function (a, b) {
      return new Date(a.auction_end) - new Date(b.auction_end);
    },
    2: function (a, b) {
      return new Date(b.auction_end) - new Date(a.auction_end);
    },
    3: function (a, b) {
      return a.name.localeCompare(b.name);
    },
    4: function (a, b) {
      return b.name.localeCompare(a.name);
    },
    5: function (a, b) {
      return a.price - b.price;
    },
    6: function (a, b) {
      return b.price - a.price;
    },
    7: function (e) {
      return parseFloat(e.price) < 0.01;
    },
    8: function (e) {
      return parseFloat(e.price) >= 0.01 && parseFloat(e.price) < 0.04;
    },
    9: function (e) {
      return parseFloat(e.price) >= 0.04;
    },
  };

  function onSortChange(e) {
    setSortValue(e.target.value);
  }
  async function onPriceChange(e) {
    setPriceValue(e.target.value);
  }

  function inputChange(e) {
    const str = e.target.value.trim().toLowerCase();
    setSearchString(str);
  }

  useEffect(async () => {
    let addToAPIUrl = "";
    if (sortValue && priceValue) {
      addToAPIUrl = "?sort=" + sortValue + "&price=" + priceValue;
    } else if (sortValue) {
      addToAPIUrl = "?sort=" + sortValue;
    } else if (sortValue) {
      addToAPIUrl = "?price=" + priceValue;
    }

    const result = await fetch(process.env.apiUrl + "/explore" + addToAPIUrl);
    const exploreData = await result.json();
    setNftFilters(exploreData.filters);
    getAllNfts(exploreData.nfts);

    if (sortValue && priceValue) {
      setNfts(
        exploreData.nfts
          .sort(filterFunctions[sortValue])
          .filter(filterFunctions[priceValue])
      );
      getAllNfts(
        exploreData.nfts
          .sort(filterFunctions[sortValue])
          .filter(filterFunctions[priceValue])
      );
    } else if (sortValue) {
      setNfts(exploreData.nfts.sort(filterFunctions[sortValue]));
      getAllNfts(exploreData.nfts.sort(filterFunctions[sortValue]));
    } else if (priceValue) {
      setNfts(exploreData.nfts.filter(filterFunctions[priceValue]));
      getAllNfts(exploreData.nfts.filter(filterFunctions[priceValue]));
    } else {
      setNfts(exploreData.nfts);
    }
  }, [sortValue, priceValue]);

  useEffect(async () => {
    if (searchStr) {
      setNfts(allNfts.filter((e) => e.name.toLowerCase().includes(searchStr)));
    } else {
      setNfts(allNfts);
    }
  }, [searchStr]);

  return (
    <>
      <Header />
      <Container maxWidth="xl">
        <Grid container style={{ margin: "70px 0 50px 0" }}>
          <Grid item xs={3}>
            <ExploreTitle text={"Explore"} />
          </Grid>
          <Grid item xs={9}>
            {nftFilters && (
              <ExploreFilters
                filters={nftFilters}
                sortValue={sortValue}
                priceValue={priceValue}
                onSortChange={onSortChange}
                onPriceChange={onPriceChange}
                onTextFieldChange={inputChange}
              />
            )}
          </Grid>
        </Grid>
        <Grid container spacing={2} sx={{ marginBottom: "50px" }}>
          {nfts &&
            nfts.map((nft, key) => {
              return (
                <Grid item key={key} xs={3}>
                  <Card {...nft} />
                </Grid>
              );
            })}
        </Grid>
      </Container>
      <Footer />
    </>
  );
}
