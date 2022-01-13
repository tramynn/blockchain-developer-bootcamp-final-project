import React from 'react';
// Library import
import { 
    Typography 
    , Grid
} from '@mui/material';

// Component imports

// Style import
import useStyles from './useStyles';

const MyProfilePage = () => {
    const classes = useStyles();

    return (
        <section className={ classes.container }>
            <Grid
                container
                direction="column"
                justifyContent="space-between"
                alignItems="center"
            >
                <Grid 
                    item
                    xs={6}
                >
                    <Typography variant="h1" component="div" sx={{ flexGrow: 1 }}>My Profile</Typography>
                </Grid>
            </Grid>
        </section>
    );
};

export default MyProfilePage;
