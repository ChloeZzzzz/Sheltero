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
  background-image: radial-gradient( circle farthest-corner at 10% 20%,  rgba(254,255,165,1) 0%, rgba(255,232,182,1) 90% );
  /* background: linear-gradient(to bottom right, #ff62a5, #FFF); */
  /* background: rgb(255, 145, 150);
  background: linear-gradient(
    150deg,
    rgba(255, 145, 150, 1) 65%,
    rgba(205, 190, 50, 0.5) 100%
  ); */
  color: white;
  font-family: "avenir";
  font-size: 3em;
`;

const Welcome = () => (
    <div css={mainStyles}>
        <Typist
            cursor={{ hideWhenDone: true, hideWhenDoneDelay: 0 }}
            startDelay={750}
        >
            <span>Welcome 😀</span>
            <Typist.Delay ms={500} />
            <br />
            <span>New User!</span>
        </Typist>
    </div>
);

export default Welcome;
