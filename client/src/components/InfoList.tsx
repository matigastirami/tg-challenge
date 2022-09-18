import React, { useContext, useEffect } from "react";
import { Alert, Grid, LinearProgress } from "@mui/material";
import { useQuery } from "@apollo/client";
import { ZIP_CODE_INFO } from "../graphql/query/zip-code.query";
import { CardContainer } from "./CardContainer";
import { PlaceItem } from "./PlaceItem";
import { FilterContext } from "../context/filter.context";
import { useState } from "react";
import { IPlaceInfo } from "../interface/place.interface";

export const InfoList = () => {
  const { countryCode, zipCode } = useContext(FilterContext);
  const [places, setPlaces] = useState([]);
  const { loading, error, refetch } = useQuery(ZIP_CODE_INFO, {
    variables: { input: { countryCode, zipCode: Number(zipCode) } },
  });

  useEffect(() => {
    
    const fetchData = async () => {
        const { data } = await refetch();

        console.log("fetch data", data)

        setPlaces(data?.zipCodeInfo?.places)
    }

    fetchData();
  }, [countryCode, zipCode]);

  if (loading) return <LinearProgress sx={{ width: '100%' }}/>;
  if (error)
    return <Alert severity="error">No info found for the zip {zipCode}</Alert>;

  const Places = () => (
    <>
      {(places ?? []).map((place: IPlaceInfo, idx: number) => (
        <CardContainer key={idx} children={<PlaceItem info={place} />} />
      ))}
    </>
  );

  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="center"
      spacing={1}
      style={{ marginTop: 30, marginBottom: 30 }}
    >
      <Places />
    </Grid>
  );
};
