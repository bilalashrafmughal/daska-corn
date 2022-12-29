import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button } from "shared/Buttons";
import { Container, Paper } from "shared/Layout";
import { CameraIcon, CheckboxIcon, CheckedIcon } from "shared/SvgIcons";
import { BigHeading, H2, H4 } from "shared/Typography";
import { authenticate } from "store/authSlice";
import styled from "styled-components";

export default function Home() {
  const dispatch = useDispatch();
  const [isAdult, setIsAdult] = useState(false);
  const handleWatch = () => {
    if (process.env.REACT_APP_SWITCH === "on") {
      window.sessionStorage.setItem("DP_User_Is_Adult", isAdult);
      dispatch(authenticate(true));
    }
  };
  return (
    <Paper>
      <Container>
        <StyledHome className="grid grid-cols-1 md:grid-cols-2 md:items-center md:gap-48">
          <div className="hero-text-section flex flex-col justify-center md:items-end">
            <div className="content-box text-center md:text-start">
              {process.env.REACT_APP_SWITCH === "off" && (
                <H4 className="bg-red-500 mt-14">
                  Service is OFF by Owner, please visit again as its available{" "}
                </H4>
              )}
              <div className="flex space-x-4 justify-center">
                <BigHeading primary>
                  {" "}
                  {process.env.REACT_APP_FIRST_NAME}{" "}
                </BigHeading>
                <BigHeading> {process.env.REACT_APP_LAST_NAME} </BigHeading>
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
      </Container>
    </Paper>
  );
}

const StyledHome = styled.div`
  height: 100vh;
`;
