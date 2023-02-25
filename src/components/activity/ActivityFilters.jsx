import styles from "./ActivityFilters.module.scss";
import {
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

function ActivityFilters_OLD({ filters }) {
  const [sortBy, setSortBy] = useState("");
  const [type, setType] = useState("");

  return (
    <div className={styles["activity-filters"]}>
      <Stack direction={"row"} spacing={2} justifyContent={"center"}>
        <FormControl>
          <InputLabel id="sort-by-label">Sort by</InputLabel>
          <Select
            labelId="sort-by-label"
            value={sortBy}
            sx={{ width: "220px" }}
            color={"primary"}
            onChange={(e) => setSortBy(e.target.value)}
          >
            {filters.sort.map((filter) => {
              return (
                <MenuItem key={filter.label} value={filter.value}>
                  {filter.label}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
        <FormControl>
          <InputLabel id="type-label">Type</InputLabel>
          <Select
            labelId="type-label"
            value={type}
            sx={{ minWidth: "220px" }}
            color={"primary"}
            onChange={(e) => setType(e.target.value)}
          >
            {filters.type.map((filter) => {
              return (
                <MenuItem key={filter.label} value={filter.value}>
                  {filter.label}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
        <TextField
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon className={styles["search-icon"]} />
              </InputAdornment>
            ),
            className: styles.search,
            disableUnderline: true,
            sx: { width: "340px" },
          }}
          variant="standard"
        />
      </Stack>
    </div>
  );
}

export default function ActivityFilters({
  filters,
  sortValue,
  typeValue,
  onSortChange,
  onTypeChange,
  onTextFieldChange,
}) {
  return (
    <div className={styles["activity-filters"]}>
      <Stack direction={"row"} spacing={2} justifyContent={"center"}>
        <FormControl>
          <InputLabel id="sort-by-label">Sort by</InputLabel>
          <Select
            labelId="sort-by-label"
            sx={{ width: "220px" }}
            color={"primary"}
            value={sortValue}
            onChange={onSortChange}
          >
            {filters.sort.map((filter) => {
              return (
                <MenuItem key={filter.label} value={filter.value}>
                  {filter.label}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
        <FormControl>
          <InputLabel id="type-label">Type</InputLabel>
          <Select
            labelId="type-label"
            sx={{ minWidth: "220px" }}
            color={"primary"}
            value={typeValue}
            onChange={onTypeChange}
          >
            {filters.type.map((filter) => {
              return (
                <MenuItem key={filter.label} value={filter.value}>
                  {filter.label}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
        <TextField
          onChange={onTextFieldChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon className={styles["search-icon"]} />
              </InputAdornment>
            ),
            className: styles.search,
            disableUnderline: true,
            sx: { width: "340px" },
          }}
          variant="standard"
        />
      </Stack>
    </div>
  );
}
