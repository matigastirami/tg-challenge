import {
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Autocomplete,
  TextField,
  IconButton,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import RestoreIcon from '@mui/icons-material/Restore';
import { useContext, useState } from "react";
import { FilterContext } from "../context/filter.context";

const countries = [
  {
    code: "us",
    name: "UNITED STATES",
  },
  {
    code: "ar",
    name: "ARGENTINA",
  },
  {
    code: "ca",
    name: "CANADA",
  },
  {
    code: "mx",
    name: "MEXICO",
  },
  {
    code: "br",
    name: "BRAZIL",
  },
];

export const Filter = () => {
  const [selectedCountryCode, setSelectedCountryCode] = useState("us");
  const [enteredZipCode, setEnteredZipCode] = useState<string>("");
  const [searchHistory, setSearchHistory] = useState<string[]>([]);

  const { handleFilterChange } = useContext(FilterContext);

  const handleChange = (event: any) => {
    const value = event.target.value;
    setSelectedCountryCode(value);
  };

  const handleZipCodeChange = (event: any, newValue: string) => {
    setEnteredZipCode(newValue!);
  };

  const handleSubmit = () => {
    if(enteredZipCode.length) {
      const updatedHistory = [...new Set<string>([...searchHistory, enteredZipCode])];
      setSearchHistory(updatedHistory.slice(-5));
      handleFilterChange('zipCode', enteredZipCode);
      handleFilterChange('countryCode', selectedCountryCode);
    }
  };

  const handleDeleteHistory = () => {
    setSearchHistory([]);
  }

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={1}
    >
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Country</InputLabel>
          <Select
            labelId="country-select-label"
            id="country-select"
            name="countrySelect"
            value={selectedCountryCode}
            label="Country"
            onChange={handleChange}
          >
            {countries.map((country, idx) => (
              <MenuItem key={idx} value={country.code}>{country.name}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={5}>
        <Autocomplete
          fullWidth
          freeSolo
          id="zipCodeInput"
          inputValue={enteredZipCode}
          onInputChange={handleZipCodeChange}
          options={searchHistory.map((val) => val)}
          renderInput={(params) => <TextField {...params} label="Zip Code" />}
        />
      </Grid>
      <Grid item xs>
        <IconButton aria-label="search" onClick={handleSubmit} title="search">
          <SearchIcon />
        </IconButton>
        <IconButton aria-label="search" onClick={handleDeleteHistory} title="delete history">
          <RestoreIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
};
