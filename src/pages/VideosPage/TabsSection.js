import Tab from "components/Tab";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Paper } from "shared/Layout";
import { searchByTab } from "store/querySlice";
import { updateTabs } from "store/tabsSlice";
import { useGetVideosQuery } from "store/videosApi";
import { randomizeElemnts } from "utils";

export default function TabsSection() {
  const dispatch = useDispatch();
  const query = useSelector((state) => state.query);
  const tabs = useSelector((state) => state.tabs);

  const setTabValue = (val) => {
    dispatch(searchByTab(val));
  };
  const { data } = useGetVideosQuery(query);

  // CREATING DYNAMIC CATEGORY TABS

  useEffect(() => {
    if (data) {
      let newTabs = [];
      data.videos.forEach((video) => {
        newTabs = [...newTabs, ...video.keywords.split(",")];
      });
      newTabs = randomizeElemnts(newTabs, 20);
      dispatch(updateTabs(newTabs));
    }
  }, [data, dispatch]);

  return (
    <Paper>
      <Container className="flex flex-wrap">
        {tabs.map((tab) => (
          <Tab
            key={`${Math.random()}`}
            value={tab}
            onClick={() => setTabValue(tab)}
          />
        ))}
      </Container>
    </Paper>
  );
}
