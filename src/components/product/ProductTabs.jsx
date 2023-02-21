import styles from "./ProductTabs.module.scss";
import User from "../user/User";
import { Tab, TableBody, Table, TableRow, TableCell } from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import { TabList, TabPanel } from "@mui/lab";
import { parseISO, formatDistance } from "date-fns";

import { useState } from "react";

export default function ProductTabs({
  text = "Beaten back with a crack not knowing what was two and frow. The education system spews out to the TAB the broken promises. Unable to find a journey in a sea of dead bolted doors behind their salvation.",
  bids = [
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
  ],
}) {
  const [value, setValue] = useState("1");
  const handleTabChange = (event, newValue) => setValue(newValue);

  return (
    <div className={styles["product-tabs"]}>
      {/* 
      <TabContext value={value}>
        <TabList
          value={value}
          onChange={handleTabChange}
          area-label={"product tabs"}
          className={styles["tab-buttons"]}
        >
          <Tab label={"Details"} value="1" className={styles["tab-details"]} />
          <Tab label={"Bids"} value="2" className={styles["tab-bids"]} />
        </TabList>

        <TabPanel value="1" className={styles["text-details"]}>
          {text}
        </TabPanel>
        <TabPanel value="2" className={styles["bids-view"]}>
          <Table area-label={"product details table"}>
            <TableBody>
              {bids.map((bid, i) => (
                <TableRow
                  className={`table-row-${i} ${styles["table-row"]}`}
                  key={i}
                >
                  <TableCell sx={{ borderBottom: "none" }}>
                    <User {...bid.user} size={34} />
                  </TableCell>
                  <TableCell className={styles["bid-cell"]}>
                    {bid.amount}
                  </TableCell>
                  <TableCell className={styles.cell}>
                    {formatDistance(parseISO(bid.date), Date.now())}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TabPanel>
      </TabContext>
      */}
    </div>
  );
}
