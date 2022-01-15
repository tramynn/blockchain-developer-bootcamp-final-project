import React from 'react';

// Library import
import { 
    Typography 
    , Grid
} from '@mui/material';

// Component imports

import devDoggieGuide from '../images/devdoggie_guide.svg';

// Style import
import useStyles from './useStyles';

const GuidePage = () => {
    const classes = useStyles();
    
    return (
        <>
            <section className={ classes.container }>
                <Grid
                    container
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    spacing={3}
                >
                    <Grid 
                        item
                        xs={6}
                    >
                        <Typography variant="h1" component="div" sx={{ flexGrow: 1 }}>Guide</Typography>
                    </Grid>
                    <Grid 
                        item 
                        xs={12}
                    >
                        <Typography variant="body1" component="div" sx={{ flexGrow: 1 }}>
                            This guide will show how to adopt your doggie.
                        </Typography>
                    </Grid>
                    <Grid 
                        item
                        xs={12}
                        className={ classes.pageAboutImgContainer }
                    >
                        <img 
                            src={ devDoggieGuide }
                            alt="DevDoggies about image with dog and food vector art." 
                            className={ classes.guideImage }
                        />
                    </Grid>
                </Grid>
            </section>
        </>
    );
};

export default GuidePage;