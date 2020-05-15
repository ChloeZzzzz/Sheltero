import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import SearchByCategory from '../components/SearchBar.js';
import { Link, Box } from '@material-ui/core';
//import SectionCarousel from '../components/Carousel/Carousel';
import SearchByArea from '../components/SearchArea';


const useStyles = makeStyles((theme) => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Job() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            {/*<SectionCarousel/>*/}
            <main>
                {/* Hero unit */}
                <div  className={classes.Box}>
                    <Grid container spacing={8}>
                      <Grid item xs={6}>
                        <SearchByCategory/>
                      </Grid>
                      <Grid item xs={6}>
                        <SearchByArea/>
                        {/* <SearchLocationInput onChange={() => null} /> */}
                      </Grid>
                    </Grid> 
                </div>
                <Container className={classes.cardGrid} maxWidth="md">
                    {/* End hero unit */}
                    <Grid container spacing={4}>
                        {cards.map((card) => (
                            <Grid item key={card} xs={12} sm={6} md={4}>
                                <Card className={classes.card}>
                                    <CardMedia
                                        className={classes.cardMedia}
                                        image="https://source.unsplash.com/random"
                                        title="Image title"
                                    />
                                    <CardContent className={classes.cardContent}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Job Title
                                        </Typography>
                                        <Typography>
                                            There is description of the job
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" color="transparent">
                                            Details
                                        </Button>
                                        <Button size="small" color="transparent">

                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </main>
            {/* Footer */}
            <Box mt={5} className={classes.box}>
                <Copyright />
            </Box>
            {/* End footer */}
        </React.Fragment>
    );
}

function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="/">
          SHELTERO.
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
}
