import React from "react";
import { useSelector } from "react-redux";
import { Divider, Paper } from "shared/Layout";
import VideosGrid from "./VideosGrid";
import VideosHeader from "./VideosHeader";

export default function VideosSection() {
  const query = useSelector((state) => state.query);

  return (
    <Paper light>
      <VideosHeader
        heading="Videos"
        subHeading={`Page ${query.page} | Page Size ${query.per_page}`}
      />
      <Divider />
      <VideosGrid />
    </Paper>
  );
}
