/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import Typist from "react-typist";
import {Link} from '@material-ui/core';

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

const Emoji = props => (
  <span
      className="emoji"
      role="img"
      aria-label={props.label ? props.label : ""}
      aria-hidden={props.label ? "false" : "true"}
  >
      Welcome {props.symbol}
  </span>
);

const Welcome = () => (
    <div css={mainStyles}>
        <Typist
            cursor={{ hideWhenDone: true, hideWhenDoneDelay: 0 }}
            startDelay={750}
        >
            <Emoji symbol="😀" label="Welcome"/>
            <Typist.Delay ms={500} />
            <br />
            <span>New User!</span>
            <br/>
            <span>Now you can edit your <Link color='black' href={'/user'}>profile</Link></span>
            <br/>
            <span>or</span>
            <br/>
            <span>hit to the <Link color='black' href={'/'}>homepage</Link>!</span>
        </Typist>
    </div>
);

export default Welcome;
