import React from 'react';

// Library import
import CssBaseline from '@mui/material/CssBaseline';
import { 
    Typography
    , Grid
} from '@mui/material';

// Style import
import useStyles from './useStyles';

const StartButton = () => {
    const classes = useStyles();

    return (
        <button className={ classes.container }>
            <Grid
                direction="row"
                alignItems="center"
                justifyContent="center"
            >
                <Grid 
                    item 
                    xs={12}
                    className={ classes.buttonFirstLayer }
                >
                    <Typography 
                        variant="h6" 
                        component="div" 
                        sx={{ flexGrow: 1 }}
                        className={ classes.buttonText }
                    >
                        Start
                    </Typography>
                </Grid>
                <Grid item className={ classes.buttonSecondLayer } />
            </Grid>
        </button>
    );
};

export default StartButton;