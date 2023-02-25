import Header from "../../src/components/header/Header";
import ProfileHero from "../../src/components/profile/ProfileHero";
import ProfileUser from "../../src/components/profile/ProfileUser";
import ProfileCollection from "../../src/components/profile/ProfileCollection";
import Footer from "../../src/components/footer/Footer";
import dataProfile from "../../data/profile.json";
import dataFiltersProfile from "../../data/filtersProfile.json";
import { useState, useEffect, Fragment } from "react";
import { useRouter } from "next/router";

function Profile_OLD() {
  const [profile, setProfile] = useState(null);
  const [filters, setFilters] = useState(null);

  useEffect(() => {
    setFilters({ ...dataFiltersProfile });

    setProfile({
      image: "images/nft.jpg",
      name: dataProfile.username,
      info: "Duis labore eiusmod proident consequat et exercitation sint cupidatat ullamco esse minim. Ea dolore enim Lorem nostrud ea pariatur nisi Lorem eu. Consequat consectetur voluptate incididunt deserunt officia.",
      avatar: dataProfile.avatar.url,
      verified: dataProfile.verified,
      user: {
        verified: dataProfile.verified,
        avatar: dataProfile.avatar.url,
      },
      items: [...dataProfile.nfts],
      filters: filters,
    });
  }, []);

  return (
    <>
      <Header />
      {filters && profile && (
        <Fragment>
          <ProfileHero image={profile.image} />

          <ProfileUser
            name={profile.name}
            info={profile.info}
            avatar={profile.avatar}
            verified={profile.verified}
          />

          <ProfileCollection
            user={profile.user}
            filters={filters}
            items={profile.items}
          />
        </Fragment>
      )}
      <Footer />
    </>
  );
}

export default function Profile() {
  const router = useRouter();
  const { id } = router.query;

  const [profile, setCurrProfile] = useState(null);
  const [profileFilters, setProfileFilters] = useState(null);

  const [allNfts, getAllNfts] = useState([]);
  const [nfts, setNfts] = useState([]);
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
      return e.price < 0.1;
    },
    8: function (e) {
      return e.price >= 0.1 && e.price < 0.5;
    },
    9: function (e) {
      return e.price >= 0.5;
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
    if (id) {
      const result = await fetch(process.env.apiUrl + `/users/${id}`);
      const profileData = await result.json();
      setCurrProfile(profileData.user);
      setProfileFilters(profileData.filters);
      getAllNfts(profileData.user.nfts);
      if (sortValue && priceValue) {
        setNfts(
          profileData.user.nfts
            .sort(filterFunctions[sortValue])
            .filter(filterFunctions[priceValue])
        );
        getAllNfts(
          profileData.user.nfts
            .sort(filterFunctions[sortValue])
            .filter(filterFunctions[priceValue])
        );
      } else if (sortValue) {
        setNfts(profileData.user.nfts.sort(filterFunctions[sortValue]));
        getAllNfts(profileData.user.nfts.sort(filterFunctions[sortValue]));
      } else if (priceValue) {
        setNfts(profileData.user.nfts.filter(filterFunctions[priceValue]));
        getAllNfts(profileData.user.nfts.filter(filterFunctions[priceValue]));
      } else {
        setNfts(profileData.user.nfts);
      }
    }
  }, [id, sortValue, priceValue]);

  useEffect(async () => {
    if (searchStr) {
      setNfts(
        allNfts.filter((e) => e.name.toLowerCase().includes(searchStr))
      );
    } else {
      setNfts(allNfts);
    }
  }, [searchStr]);

  return (
    <>
      <Header />
      {profile && profileFilters && (
        <Fragment>
          <ProfileHero image={profile.avatar.backgroundUrl} />

          <ProfileUser
            name={profile.username}
            info={profile.info}
            avatar={profile.avatar.url}
            verified={profile.verified}
          />

          <ProfileCollection
            user={{
              name: profile.username,
              info: profile.info,
              avatar: profile.avatar.url,
              verified: profile.verified,
              id: profile.id,
            }}
            filters={profileFilters}
            sortValue={sortValue}
            priceValue={priceValue}
            onSortChange={onSortChange}
            onPriceChange={onPriceChange}
            onTextFieldChange={inputChange}
            items={nfts}
          />
        </Fragment>
      )}
      <Footer />
    </>
  );
}
