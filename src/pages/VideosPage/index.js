import React from "react";
import TabsSection from "./TabsSection";
import VideosSection from "./VideosSection";
import { Divider } from "shared/Layout";

export default function VideosPage() {
  return (
    <div>
      <Divider />
      <TabsSection />
      <Divider />
      <VideosSection />
    </div>
  );
}
