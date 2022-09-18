import { Card, Grid } from "@mui/material";

type Props = {
  children: JSX.Element;
};

export const CardContainer = ({ children }: Props) => {
  return (
    <Grid item xs={4}>
      <Card variant="outlined">{children}</Card>
    </Grid>
  );
};
