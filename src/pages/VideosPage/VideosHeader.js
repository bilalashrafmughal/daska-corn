import React from "react";
import { Container, Paper } from "shared/Layout";
import { H2, H4 } from "shared/Typography";

export default function VideosHeader({ heading, subHeading }) {
  return (
    <Paper>
      <Container>
        <H2> {heading} </H2>
        <H4> {subHeading} </H4>
      </Container>
    </Paper>
  );
}
