import React from 'react';
// Library import
import { 
    Typography 
    , Grid
} from '@mui/material';

// Component imports

// Style import
import useStyles from './useStyles';

const AdoptionCenterPage = () => {
    const classes = useStyles();

    return (
        <section className={ classes.container }>
            <Grid
                container
                direction="column"
                justifyContent="space-between"
                alignItems="center"
                space={3}
            >
                <Grid 
                    item
                    xs={12}
                >
                    <Typography variant="h1" component="div" sx={{ flexGrow: 1 }}>Adoption Center</Typography>
                </Grid>
                <Grid 
                    item 
                    xs={12}
                >
                    <Typography variant="body1" component="div" sx={{ flexGrow: 1 }}>
                        Welcome to the Adoption Center.
                    </Typography>
                </Grid>
            </Grid>
        </section>
    );
};

export default AdoptionCenterPage;
