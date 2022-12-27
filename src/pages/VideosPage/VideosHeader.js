import React from "react";
import { Container } from "shared/Layout";
import { H2 } from "shared/Typography";

export default function VideosHeader({ heading, subHeading }) {
  return (
    <Paper>
      <Container>
        <H2> Videos </H2>
        <H4> Page 1 | Page Size 10 </H4>
      </Container>
    </Paper>
  );
}
