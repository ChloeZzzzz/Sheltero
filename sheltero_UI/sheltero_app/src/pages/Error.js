/** @jsx jsx */
import React from "react";
import { jsx, css } from "@emotion/core";
import Typist from "react-typist";

const mainStyles = css`
  display: flex;
  align-items: center;
  justify-content: space-around;
  text-align: center;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  /* background: linear-gradient(to bottom right, #ff62a5, #FFF); */
  background: rgb(255, 145, 150);
  background: linear-gradient(
    150deg,
    rgba(255, 145, 150, 1) 65%,
    rgba(205, 190, 50, 0.5) 100%
  );
  color: white;
  font-family: "avenir";
  font-size: 3em;
`;

const Main = () => (
    <div css={mainStyles}>
        <Typist
            cursor={{ hideWhenDone: true, hideWhenDoneDelay: 0 }}
            startDelay={750}
        >
            <span>oops! 😯</span>
            <Typist.Delay ms={700} />
            <br />
            <span>Something went wrong</span>
        </Typist>
    </div>
);

export default Main;
