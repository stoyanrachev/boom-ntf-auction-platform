import Header from "../../src/components/header/Header";
import Hero from "../../src/components/hero/Hero";
import ActivityFilters from "../../src/components/activity/ActivityFilters";
import ActivityList from "../../src/components/activity/ActivityList";
import Footer from "../../src/components/footer/Footer";
import dataActivity from "../../data/activity.json";
import dataActivityFilters from "../../data/filtersActivity.json";

import { useEffect, useState } from "react";

function Activity_OLD() {
  const [activities, setActivities] = useState(null);
  const [filters, setFilters] = useState(null);

  useEffect(() => {
    setActivities(
      dataActivity.map((activity) => {
        return {
          user: {
            name: activity.user.username,
            verified: activity.user.verified,
            avatar: {
              url: activity.user.avatar.url,
            },
          },
          created_at: activity.created_at,
          nft: {
            name: activity.nft.name,
            owner: {
              id: activity.nft.owner.id,
            },
            user: {
              name: activity.nft.owner.username,
              avatarUrl: activity.nft.owner.avatar.url,
              verified: activity.nft.owner.confirmed,
            },
          },
          type: activity.type,
        };
      })
    );

    setFilters(dataActivityFilters);
  }, []);

  return (
    <div>
      <Header />
      <Hero text={"Activity"} />
      {filters && <ActivityFilters filters={filters} />}
      {activities && <ActivityList items={activities} />}
      <Footer />
    </div>
  );
}



export default function Activity() {
  const [allActivities, getAllActivity] = useState([]);
  const [activity, setActivity] = useState([]);
  const [activityFilters, setActivityFilters] = useState(null);

  const [sortValue, setSortValue] = useState("");
  const [typeValue, setTypeValue] = useState("");
  const [searchStr, setSearchString] = useState("");

  const filterFunctions = {
    1: function (a, b) {
      return new Date(a.published_at) - new Date(b.published_at);
    },
    2: function (a, b) {
      return new Date(b.published_at) - new Date(a.published_at);
    },
    3: function (a, b) {
      return a.nft.name.localeCompare(b.nft.name);
    },
    4: function (a, b) {
      return b.nft.name.localeCompare(a.nft.name);
    },
    5: function (a, b) {
      return a.nft.price - b.nft.price;
    },
    6: function (a, b) {
      return b.nft.price - a.nft.price;
    },
    7: function (e) {
      return e.type == "like";
    },
    8: function (e) {
      return e.type == "buy";
    },
  };

  function onSortChange(e) {
    setSortValue(e.target.value);
  }
  function onTypeChange(e) {
    setTypeValue(e.target.value);
  }

  function inputChange(e) {
    const str = e.target.value.trim().toLowerCase();
    setSearchString(str);
  }

  useEffect(async () => {
    const result = await fetch(process.env.apiUrl + "/activities");
    const activityData = await result.json();
    getAllActivity(activityData.activities);
    setActivityFilters(activityData.filters);

    if (sortValue && typeValue) {
      if (typeValue == 1) {
        setActivity(
          activityData.activities
            .sort(filterFunctions[sortValue])
            .filter(filterFunctions[7])
        );
        getAllActivity(
          activityData.activities
            .sort(filterFunctions[sortValue])
            .filter(filterFunctions[7])
        );
      } else {
        setActivity(
          activityData.activities
            .sort(filterFunctions[sortValue])
            .filter(filterFunctions[typeValue])
        );
        getAllActivity(
          activityData.activities
            .sort(filterFunctions[sortValue])
            .filter(filterFunctions[typeValue])
        );
      }
    } else if (sortValue) {
      setActivity(activityData.activities.sort(filterFunctions[sortValue]));
      getAllActivity(activityData.activities.sort(filterFunctions[sortValue]));
    } else if (typeValue) {
      if (typeValue == 1) {
        setActivity(activityData.activities.filter(filterFunctions[7]));
        getAllActivity(activityData.activities.filter(filterFunctions[7]));
      } else {
        setActivity(activityData.activities.filter(filterFunctions[typeValue]));
        getAllActivity(
          activityData.activities.filter(filterFunctions[typeValue])
        );
      }
    } else {
      setActivity(activityData.activities);
    }
  }, [typeValue, sortValue]);

  useEffect(async () => {
    if (searchStr) {
      setActivity(
        allActivities.filter(
          (e) =>
            e.nft.name.toLowerCase().includes(searchStr) ||
            e.user.username.toLowerCase().includes(searchStr)
        )
      );
    } else {
      setActivity(allActivities);
    }
  }, [searchStr]);

  return (
    <>
      <Header />
      <Hero text={"Activity"} />
      {activityFilters && (
        <ActivityFilters
          filters={activityFilters}
          sortValue={sortValue}
          typeValue={typeValue}
          onSortChange={onSortChange}
          onTypeChange={onTypeChange}
          onTextFieldChange={inputChange}
        />
      )}
      <ActivityList items={activity} />
      <Footer />
    </>
  );
}
