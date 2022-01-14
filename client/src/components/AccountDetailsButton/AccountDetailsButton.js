import React from 'react';

// Library import
import CssBaseline from '@mui/material/CssBaseline';
import { 
    Typography
    , Grid
} from '@mui/material';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
// Style import
import useStyles from './useStyles';

const AccountDetailsButton = ( props ) => {
    const {
        web3Props
    } = props;
    const isMetaMaskActive = web3Props.active;
    const classes = useStyles( { isMetaMaskActive } );

    return (
        <>
            <button 
                className={ classes.container }
            >
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
                            {/* TODO: Success */}
                            {
                                isMetaMaskActive
                                    ?  
                                    <p
                                        className={ classes.successText }
                                    >
                                        <AccountBoxIcon />
                                        &nbsp;
                                        { web3Props.account.toString().substring(0, 10) }...
                                    </p>
                                    : web3Props.error
                                        ? 'Error'
                                        : null
                            }
                            {/* TODO: Error */}
                        </Typography>
                    </Grid>
                    <Grid item className={ classes.buttonSecondLayer } />
                </Grid>
            </button>
        </>
    );
};

export default AccountDetailsButton;