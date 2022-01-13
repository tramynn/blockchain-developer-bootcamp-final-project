import React from 'react';

// Library import
import { 
    Typography 
    , Grid
} from '@mui/material';

// Component imports

// Style import
import useStyles from './useStyles';

const DogaloguePage = () => {
    const classes = useStyles();
    
    return (
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
                    <Typography variant="h1" component="div" sx={{ flexGrow: 1 }}>Dogalogue</Typography>
                </Grid>
                <Grid 
                    item 
                    xs={12}
                >
                    <Typography variant="body1" component="div" sx={{ flexGrow: 1 }}>
                        A list of doggies available for adoption with each being one of a kind.
                    </Typography>
                </Grid>
                {/* TODO: DogalogueCards */}
            </Grid>
        </section>
    );
};

export default DogaloguePage;