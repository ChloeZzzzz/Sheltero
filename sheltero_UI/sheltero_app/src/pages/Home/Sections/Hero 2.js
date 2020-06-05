import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { ArrowDownwardIcon } from "@material-ui/icons";
import HeroLayout from "./HeroLayout";
import { Box} from "@material-ui/core";
import Copyright from "../../../components/Copyright";
import { useStyles, H1, PrimButton} from "../../../components/theme";
import JobCategories from "./JobCategories";
import classNames from "classnames";


const backgroundImage =
    "https://images.unsplash.com/photo-1485546784815-e380f3297414?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80";

const styles = theme => ({
    background: {
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: "#7fc7d9", // Average color of the background image.
        backgroundPosition: "center"
    },
    // button: {
    //     minWidth: 200
    // },
    h5: {
        marginBottom: theme.spacing(4),
        marginTop: theme.spacing(4),
        [theme.breakpoints.up("sm")]: {
            marginTop: theme.spacing(10)
        }
    },
    more: {
        marginTop: theme.spacing(2)
    },

    title: {
        /* set heading position */
        position: 'relative',
        top: '50%',
    },
    header: {
        /* set header space under nav bar */
        height: '8vh',
    },

    titleAnimation: {
        animation: `$titleAnimation 5s 1`
    },

    '@keyframes titleAnimation': {
        '0%': {
            color: "#002E18",
        },
        '100%': {
            color: "#fff",
        }
    }
});

function ProductHero(props) {
    const { classes } = props;
    return (
        <HeroLayout backgroundClassName={classes.background}>
            {/* Increase the network loading priority of the background image. */}
            <img style={{ display: "none" }} src={backgroundImage} alt="" />

            <br />
            <Box>
                <H1 className={classNames(classes.titleAnimation, classes.title)}>sheltero.</H1>

            </Box>
        

        </HeroLayout>
    );
}

ProductHero.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ProductHero);
