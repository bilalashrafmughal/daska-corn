import React from "react";
import { Paper } from "shared/Layout";
import { EyeIcon } from "shared/SvgIcons";
import { H3, H6, SecondaryTimeDurationTag } from "shared/Typography";
import styled from "styled-components";
import Rating from "@mui/material/Rating";
import { stringTimmer } from "utils";
import { useNavigate } from "react-router-dom";

export default function VideoCard({ video }) {
  const navigate = useNavigate();
  return (
    <Paper className="rounded-3xl">
      <StyledCard
        className="shadow-xl"
        onClick={() => navigate(`/videos/${video.id}`)}
      >
        <div className="card-image-box overflow-hidden cursor-pointer relative">
          <img
            // src="/assets/card-image.png"
            src={video.default_thumb.src}
            onError={() => "/assets/logo.png"}
            alt="card-img"
            className="w-full hover:scale-110"
          />
          <SecondaryTimeDurationTag className="absolute bottom-0 right-0">
            {video.length_min}
          </SecondaryTimeDurationTag>
        </div>
        <div className="info-box p-8">
          <div className="h-56">
            <H3> {stringTimmer(video.title, 50)} </H3>
          </div>
          <div className="about-video flex items-center justify-between">
            <div className="views-side flex items-center space-x-4">
              <EyeIcon />
              <H6>Views: {video.views} </H6>
            </div>
            <div className="rating-side flex items-center space-x-4">
              <H6> Rating: </H6>
              <Rating
                name="read-only"
                value={parseFloat(video.rate)}
                size="large"
                readOnly
              />
            </div>
          </div>
        </div>
      </StyledCard>
    </Paper>
  );
}

const StyledCard = styled.div`
  .card-image-box img {
    transition: all ease 0.4s;
    min-height: 330px;
    @media (min-width: 0px) and (max-width: 425px) {
      min-height: 192px;
    }
    @media (min-width: 768px) and (max-width: 1022px) {
      min-height: 180px;
    }
  }
`;
