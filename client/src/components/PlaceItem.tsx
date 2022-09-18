import { CardContent, Typography } from "@mui/material";
import { ShortenPlaceName } from "./ShortenPlaceName";

export interface IPlaceInfo {
  placeName: string;
  longitude: string;
  latitude: string;
  state: string;
  stateAbbreviation: string;
}

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
