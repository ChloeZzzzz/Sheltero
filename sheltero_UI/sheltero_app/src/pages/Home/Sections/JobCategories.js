import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ButtonBase from "@material-ui/core/ButtonBase";
import Container from "@material-ui/core/Container";
import Typography from "../../../components/Typography";

const styles = theme => ({
    root: {
        marginTop: theme.spacing(8) ,
        marginBottom: theme.spacing(4)
    },
    images: {
        marginTop: theme.spacing(8),
        display: "flex",
        flexWrap: "wrap"
    },
    imageWrapper: {
        position: "relative",
        display: "block",
        padding: 0,
        borderRadius: 0,
        height: "40vh",
        [theme.breakpoints.down("sm")]: {
            width: "100% !important",
            height: 100
        },
        "&:hover": {
            zIndex: 1
        },
        "&:hover $imageBackdrop": {
            opacity: 0.15
        },
        "&:hover $imageMarked": {
            opacity: 0
        },
        "&:hover $imageTitle": {
            border: "4px solid currentColor"
        }
    },
    imageButton: {
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: theme.palette.common.white
    },
    imageSrc: {
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundSize: "cover",
        backgroundPosition: "center 40%"
    },
    imageBackdrop: {
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        background: theme.palette.common.black,
        opacity: 0.5,
        transition: theme.transitions.create("opacity")
    },
    imageTitle: {
        position: "relative",
        padding: `${theme.spacing(2)}px ${theme.spacing(4)}px 14px`
    },
    imageMarked: {
        height: 3,
        width: 18,
        background: theme.palette.common.white,
        position: "absolute",
        bottom: -2,
        left: "calc(50% - 9px)",
        transition: theme.transitions.create("opacity")
    }
});

function JobCategories(props) {
    const { classes } = props;

    const images = [
        {
            url:
                "https://images.unsplash.com/photo-1514395462725-fb4566210144?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80",
            title: "Melbourne - CBD",
            width: "40%"
        },
        {
            url:
                "https://images.unsplash.com/photo-1531299204812-e6d44d9a185c?auto=format&fit=crop&w=400&q=80",
            title: "St Kilda",
            width: "20%"
        },
        {
            url:
                "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&w=400&q=80",
            title: "North Melbourne",
            width: "40%"
        },
        {
            url:
                "https://images.unsplash.com/photo-1472208263336-2d058997c9eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
            title: "Docklands",
            width: "38%"
        },
        {
            url:
                "https://images.unsplash.com/photo-1523309996740-d5315f9cc28b?auto=format&fit=crop&w=400&q=80",
            title: "East Melbourne",
            width: "38%"
        },
        {
            url:
                "https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?auto=format&fit=crop&w=400&q=80",
            title: "Carlton",
            width: "24%"
        },
        {
            url:
                "https://images.unsplash.com/photo-1506941433945-99a2aa4bd50a?auto=format&fit=crop&w=400&q=80",
            title: "Parkville",
            width: "40%"
        },
        {
            url:
                "https://images.unsplash.com/photo-1533727937480-da3a97967e95?auto=format&fit=crop&w=400&q=80",
            title: "Southbank",
            width: "20%"
        },
        {
            url:
                "https://images.unsplash.com/photo-1518136247453-74e7b5265980?auto=format&fit=crop&w=400&q=80",
            title: "South Yarra",
            width: "40%"
        }
    ];

    return (
        <Container className={classes.root} component="section">
            <Typography variant="h4" marked="center" align="center" component="h2">
                Find jobs by the Areas
            </Typography>
            <div className={classes.images}>
                {images.map(image => (
                    <ButtonBase
                        href="/viewarea"
                        key={image.title}
                        className={classes.imageWrapper}
                        style={{
                            width: image.width
                        }}
                    >
                        <div
                            className={classes.imageSrc}
                            style={{
                                backgroundImage: `url(${image.url})`
                            }}
                        />
                        <div className={classes.imageBackdrop} />
                        <div className={classes.imageButton}>
                            <Typography
                                component="h3"
                                variant="h6"
                                color="inherit"
                                className={classes.imageTitle}
                            >
                                {image.title}
                                <div className={classes.imageMarked} />
                            </Typography>
                        </div>
                    </ButtonBase>
                ))}
            </div>
        </Container>
    );
}

JobCategories.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(JobCategories);
