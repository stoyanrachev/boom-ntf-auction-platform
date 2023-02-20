import styles from "./ProductTabs.module.scss";
import User from "../user/User";
import { useState } from "react";
import classNames from "classnames";
import { formatDistance, parseISO } from "date-fns";
import { Tab, Table, TableBody, TableRow, TableCell } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";

export default function ProductTabs({ text = " ", bids = [] }) {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const setOpacity = (index) => {
    if (index % 2 == 0) {
      return "rgba(78,36,242, 0.05)";
    }
    return "rgba(78,36,242, 0.15)";
  };

  return (
    <div className={styles["product-tabs"]}>
      <TabContext value={value}>
        <div
          className={styles.tabs}
          sx={{ borderBottom: 1, borderColor: "divider" }}
        >
          <TabList onChange={handleChange}>
            <Tab className={styles["tab-details"]} label="DETAILS" value="1" />
            <Tab className={styles["tab-bids"]} label="BIDS" value="2" />
          </TabList>
        </div>
        <TabPanel value="1">{text}</TabPanel>
        <TabPanel value="2">
          <Table>
            <TableBody>
              {bids.map((bid, index) => (
                <TableRow
                  className={classNames(
                    styles["table-row"],
                    `table-row-${index}`
                  )}
                  key={index}
                  sx={{ backgroundColor: setOpacity(index) }}
                >
                  <TableCell>
                    <User {...bid.user} />
                  </TableCell>
                  <TableCell>{bid.amount} ETH</TableCell>
                  <TableCell>
                    {formatDistance(parseISO(bid.date), new Date(), {
                      addSuffix: true,
                    })}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TabPanel>
      </TabContext>
    </div>
  );
}
