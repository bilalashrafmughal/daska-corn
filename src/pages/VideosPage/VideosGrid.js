import React from "react";
import { Container, Paper } from "shared/Layout";
import VideoCard from "./VideoCard";
import Pagination from "components/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { loadMore, setPage } from "store/querySlice";
import { Button } from "shared/Buttons";
import { CloudIcon } from "shared/SvgIcons";
import { useGetVideosQuery } from "store/videosApi";
import Loader from "components/Loader";

export default function VideosGrid() {
  const dispatch = useDispatch();
  const query = useSelector((state) => state.query);
  const page = useSelector((state) => state.query.page);

  const handleChange = (event, value) => {
    dispatch(setPage(value));
  };

  const handleLoadMore = () => {
    dispatch(loadMore());
  };
  const { data, isLoading } = useGetVideosQuery(query);

  return (
    <Paper light>
      {isLoading ? (
        <Loader />
      ) : (
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {data?.videos.map((video) => (
              <VideoCard key={`${Math.random()}`} video={video} />
            ))}
          </div>
          <div className="flex flex-col items-center justify-center py-20 space-y-20">
            <Button onClick={handleLoadMore}>
              <CloudIcon /> <span>Load More</span>
            </Button>
            <Pagination page={page} onChange={handleChange} />
          </div>
        </Container>
      )}
    </Paper>
  );
}
