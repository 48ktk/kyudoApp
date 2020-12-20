import React from "react";
import Grid from "@material-ui/core/Grid";
import HeadingCard from "./headingCard";

export default function OverviewCard() {
  return (
    <Grid container justify="center" spacing={2}>
      <Grid item xs={6}>
        <HeadingCard
          date="2017-10-12"
          title="リーグ戦第一戦対日本大学戦"
          result="120-141"
        />
      </Grid>
      <Grid item xs={6}>
        <HeadingCard
          date="2017-10-12"
          title="リーグ戦第一戦対日本大学戦"
          result="120-141"
        />
      </Grid>
    </Grid>
  );
}
