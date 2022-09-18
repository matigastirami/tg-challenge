import React, { useState } from "react";
import "./App.css";
import { Container, Grid } from "@mui/material";
import { Header } from "./components/Header";
import { Filter } from "./components/Filter";
import { InfoList } from "./components/InfoList";
import { FilterContext, initialContext } from "./context/filter.context";

function App() {

  const [countryCode, setCountryCode] = useState('us');
  const [zipCode, setZipCode] = useState('');

  const handleFilterChange = (field: string, value: string) => {
    console.log(field, value)
    switch (field) {
      case 'countryCode':
        setCountryCode(value);   
        break;
      case 'zipCode':
        setZipCode(value);
        break;
      default:
        break;
    }
  }

  return (
    <FilterContext.Provider value={{ countryCode, zipCode, handleFilterChange }}>
      <Header />
      <Container maxWidth="lg" style={{ marginTop: 30 }}>
        <Grid container spacing={1}>
          <Filter />
          <InfoList />
        </Grid>
      </Container>
    </FilterContext.Provider>
  );
}

export default App;
