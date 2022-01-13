import React from 'react';
// Library import
import { 
    Typography 
    , Grid
} from '@mui/material';

// Component imports

// Assets
import landingImg from '../images/landing_hero.png';
import landingAboutImg from '../images/landing_about.png';

// Style import
import useStyles from './useStyles';

const LandingPage = () => {
    const classes = useStyles();

    return (
        <>
            <section className={ classes.container }>
                {/* <Navbar /> */}
                <Grid
                    container
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    spacing={3}
                >
                    <Grid 
                        item
                        xs={12}
                    >
                        <Typography variant="h1" component="div" sx={{ flexGrow: 1 }}>DevDoggies</Typography>
                    </Grid>
                    <Grid 
                        item 
                        xs={12}
                    >
                        <Typography variant="body1" component="div" sx={{ flexGrow: 1 }}>
                            Adopt a doggie and love them!
                        </Typography>
                    </Grid>
                    <Grid 
                        item
                        xs={12}
                        className={ classes.pageImgContainer }
                    >
                        <img 
                            src={ landingImg }
                            alt="Woman holding a cellphone with dog vector art." 
                            className={ classes.pageImg }
                        />
                    </Grid>
                </Grid>
            </section>
            <section className={ classes.containerSecond }>
                <Grid
                    container
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Grid 
                        item
                        xs={12}
                        className={ classes.pageAboutImgContainer }
                    >
                        <img 
                            src={ landingAboutImg }
                            alt="DevDoggies about image with dog and food vector art." 
                            className={ classes.pageImg }
                        />
                    </Grid>
                </Grid>
            </section>
        </>
    );
};

export default LandingPage;
