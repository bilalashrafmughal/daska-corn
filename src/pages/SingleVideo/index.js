import Footer from "components/Footer";
import TabsSection from "pages/VideosPage/TabsSection";
import VideosGrid from "pages/VideosPage/VideosGrid";
import VideosHeader from "pages/VideosPage/VideosHeader";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Container, Divider, Paper } from "shared/Layout";
import { EyeIcon } from "shared/SvgIcons";
import { H3, H4, PrimaryTimeDurationTag } from "shared/Typography";
import { searchByTab } from "store/querySlice";
import { useGetVideoByIdQuery } from "store/videosApi";

export default function SingleVideo() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { data } = useGetVideoByIdQuery(id);

  useEffect(() => {
    if (data) {
      dispatch(searchByTab(data.keywords.split(",")[0]));
    }
  }, [data, dispatch]);
  return (
    <Paper>
      <Divider />
      <TabsSection />
      <Divider />
      <Container style={{ margin: "1px 0" }}>
        <div className="title-bar flex items-center flex-wrap space-x-12">
          <H3> {data?.title} </H3>
          <PrimaryTimeDurationTag>{data?.length_min} </PrimaryTimeDurationTag>
        </div>
        <div className="view-bar flex space-x-6 items-center my-10">
          <EyeIcon />
          <H4>Views: {data?.views} </H4>
        </div>
        <div className="">
          <iframe width="100%" height="700px" title={data?.title} />
        </div>
      </Container>
      <VideosHeader heading="Related Videos:" subHeading="" />
      <VideosGrid />
      <Footer />
    </Paper>
  );
}
