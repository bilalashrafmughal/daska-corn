import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button } from "shared/Buttons";
import { Paper } from "shared/Layout";
import { CameraIcon, CheckboxIcon, CheckedIcon } from "shared/SvgIcons";
import { BigHeading, H2, H4 } from "shared/Typography";
import { authenticate } from "store/authSlice";
import styled from "styled-components";

export default function Home() {
  const dispatch = useDispatch();
  const [isAdult, setIsAdult] = useState(false);
  const handleWatch = () => {
    window.sessionStorage.setItem("Daska_Porn_User_Is_Adult", isAdult);
    dispatch(authenticate(true));
  };
  return (
    <Paper>
      <StyledHome className="grid grid-cols-1 md:grid-cols-2 md:items-center md:gap-48">
        <div className="hero-text-section flex flex-col justify-center md:items-end">
          <div className="content-box text-center md:text-start">
            <div className="flex space-x-4 justify-center md:justify-end">
              <BigHeading primary> Daska </BigHeading>
              <BigHeading> Porn </BigHeading>
            </div>
            <H2>Let your emotions flow</H2>
            <div className="is-adult-check flex items-center space-x-6 mt-10 justify-center">
              {isAdult ? (
                <CheckedIcon onClick={() => setIsAdult(false)} />
              ) : (
                <CheckboxIcon onClick={() => setIsAdult(true)} />
              )}
              <H4>I am 18+, allow me to watch content </H4>
            </div>
            <div className="button-container flex justify-center mt-10">
              <Button disabled={!isAdult} onClick={handleWatch}>
                {" "}
                <CameraIcon /> <span> Watch </span>
              </Button>
            </div>
          </div>
        </div>
        <div className="left-image-section flex justify-center w-2/3 m-auto md:justify-start">
          <img src="/assets/hero-image.png" alt="hero" />
        </div>
      </StyledHome>
    </Paper>
  );
}

const StyledHome = styled.div`
  height: 100vh;
`;
