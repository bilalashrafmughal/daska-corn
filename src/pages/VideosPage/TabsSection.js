import Tab from "components/Tab";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Container, Paper } from "shared/Layout";

export default function TabsSection() {
  const tabs = useSelector((state) => state.tabs);
  const [tabValue, setTabValue] = useState("");

  console.log({ tabValue });

  return (
    <Paper>
      <Container className="flex flex-wrap">
        {tabs.map((tab) => (
          <Tab value={tab} onClick={() => setTabValue(tab)} />
        ))}
      </Container>
    </Paper>
  );
}
