import { Grid } from "@material-ui/core";
import React from "react";
import CardCompo from "./CardCompo";
import productData from "./Data";

function Content() {
  const getData = (dataFile) => {
    return (
      <Grid item xs={12} sm={6} md={4}>
        <CardCompo {...dataFile} />
      </Grid>
    );
  };
  return (
    <Grid container spacing={3}>
      {productData.map((dataFile) => getData(dataFile))}
    </Grid>
  );
}

export default Content;
