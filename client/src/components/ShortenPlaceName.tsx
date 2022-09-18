import { Typography } from "@mui/material";

type Props = { placeName: string };

export const ShortenPlaceName = ({ placeName }: Props) => {

    const shortenString = (str: string) => {
        return str.length > 20 ?
            `${str.slice(0, 19)}...` :
            str;
    }

  return (
    <Typography variant="h5" component="div" title={placeName}>
      {shortenString(placeName)}
    </Typography>
  );
};
