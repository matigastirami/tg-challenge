import { CardContent, Typography } from "@mui/material";
import { IPlaceInfo } from "../interface/place.interface";
import { ShortenPlaceName } from "./ShortenPlaceName";

type Props = {
  info: IPlaceInfo;
};

export const PlaceItem = ({
  info: { placeName, latitude, longitude, state, stateAbbreviation },
}: Props) => (
  <CardContent>
    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
      {state} - {stateAbbreviation}
    </Typography>
    <ShortenPlaceName placeName={placeName}/>
    <Typography sx={{ mb: 1.5 }} color="text.secondary">
      Longitude: {longitude}
    </Typography>
    <Typography sx={{ mb: 1.5 }} color="text.secondary">
      Latitude: {latitude}
    </Typography>
  </CardContent>
);
