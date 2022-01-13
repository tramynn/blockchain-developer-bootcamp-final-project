import React from 'react';

// Library import
import { 
    Typography 
    , Grid
} from '@mui/material';

// Component imports

// Style import
import useStyles from './useStyles';

const ErrorPage = () => {
    const classes = useStyles();

    return (
        <section className={ classes.container }>
            <Grid
                container
                direction="column"
                justifyContent="space-between"
                alignItems="center"
                spacing={3}
            >
                <Grid 
                    item
                    xs={12}
                >
                    <Typography variant="h1" component="div" sx={{ flexGrow: 1 }}>404</Typography>
                </Grid>
                <Grid 
                        item 
                        xs={12}
                    >
                        <Typography variant="body1" component="div" sx={{ flexGrow: 1 }}>
                            The page you are trying to access is not found.
                        </Typography>
                </Grid>
                <Grid 
                        item 
                        xs={12}
                    >
                        {/* TODO: Link to landing */}
                </Grid>
            </Grid>
        </section>
    );
};

export default ErrorPage;