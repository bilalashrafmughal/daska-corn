import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const videosAPI = createApi({
  reducerPath: "videosAPI",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_SERVER_BASE_URL }),
  endpoints: (builder) => ({
    getVideos: builder.query({
      query: (args) => ({
        url: "/video/search/",
        params: args,
      }),
    }),
    getVideoById: builder.query({
      query: (id) => ({
        url: `/video/id/?id=${id}&thumbsize=big`,
      }),
    }),
  }),
});

export const { useGetVideosQuery, useGetVideoByIdQuery } = videosAPI;
