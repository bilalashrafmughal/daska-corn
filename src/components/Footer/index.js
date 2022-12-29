import React from "react";
import { Container, Paper } from "shared/Layout";
import { H3, P1, P2 } from "shared/Typography";

export default function Footer() {
  return (
    <Paper className="py-20">
      <Container>
        <H3> About Daska Corn </H3>
        <P1>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </P1>
        <div className="flex justify-center md:justify-end py-10">
          <div className="powered-by-block flex flex-col items-center">
            <P2> Powered By </P2>
            <img src="/assets/powered-by.png" alt="powered-by" />
          </div>
        </div>
      </Container>
    </Paper>
  );
}
