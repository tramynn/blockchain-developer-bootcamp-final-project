import React, { useState, useEffect } from 'react';
// Ducks
import { useSelector, useDispatch } from 'react-redux';

// Library import
import { 
    Typography
    , AppBar
    , Toolbar
    , IconButton
    , Grid
    , Hidden
    , Modal
    , Button
    , Snackbar
    , Alert as MuiAlert
    , AlertTitle
} from '@mui/material';
import MoreVert from '@mui/icons-material/MoreVert';
import { Link } from 'react-router-dom';

import { Hearts } from 'react-loader-spinner';

// Component imports
import StartButton from '../StartButton/StartButton';
import InstallMetaMaskButton from '../InstallMetaMaskButton/InstallMetaMaskButton';

// Style import
import {
    colorfulSpace4
    , spaceBlue4
} from '../../globalStyles';

import useStyles from './useStyles';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const NavBar = ( {
    connectToMetaMask
    , web3Props
    , pending
    , toastType
    , openToast
    , handleToastClose
    , toastMessage
} ) => {
    const classes = useStyles();
    const [ openStartModal, setOpenStartModal ] = useState( false );

    // const [ openToast, setOpenToast ] = useState( false );
    // const [ accounts, setAccounts ] = useState( null );
    // const [ walletAddress, setWalletAddress ] = useState( null );
    // const [ contract, setContract ] = useState( null );

    const handleStartModalOpen = () => {
        setOpenStartModal( true );
    }
    const handleStartModalClose = () => setOpenStartModal( false );

    // const handleToastClose = ( event, reason ) => {
    //     if (reason === 'clickaway') {
    //         return;
    //     }
    //     setOpenToast(false);
    // }

    useEffect( () => {
        if ( !pending && web3Props.active ) {
            handleStartModalClose();
            // if ( !web3Props.error ) {
            //     setOpenToast( true );
            // }
        }
    }, [ web3Props.active, pending ]);

    return (
        <section className={ classes.container }>
            <AppBar 
                position="fixed"
                classes={ {
                    root: classes.appBar
                } }
            >
                <Toolbar
                    classes={ {
                    root: classes.toolbar
                } }
                >
                    <Grid
                        container
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <Grid
                            item
                            xs={9}
                        >
                            <Link
                                to="/"
                                style={ { textDecoration: 'none' } }
                            >
                                <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                                    DevDoggies
                                </Typography>
                            </Link>
                        </Grid>
                        <Grid
                            item
                            xs={3}
                        >
                            <Grid
                                container
                                direction="row"
                                justifyContent="space-around"
                            >
                                <Hidden mdUp>
                                    <Grid
                                        item
                                        xs={12}
                                        className={ classes.moreIcon }
                                    >
                                        <IconButton
                                            color="inherit"
                                            aria-label="Account Menu"
                                            onClick={ handleStartModalOpen }
                                        >
                                            <MoreVert />
                                        </IconButton>
                                    </Grid>
                                </Hidden>
                                <Hidden smDown>
                                    <Grid
                                        item
                                        xs={6}
                                        className={ classes.navBarLink }
                                    >
                                        <Link 
                                            to="dogalogue"
                                            style={ { textDecoration: 'none' } }
                                        >
                                            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                                Dogalogue
                                            </Typography>
                                        </Link>
                                    </Grid>
                                    <Grid
                                        item
                                        xs={6}
                                        className={ classes.navBarLink }
                                    >
                                        <div
                                            onClick={ handleStartModalOpen }
                                        >
                                            {/* {
                                                web3Props.active
                                                    ? <StartButton handleStartModalOpen />
                                                    : <InstallMetaMaskButton />
                                            } */}
                                            <StartButton handleStartModalOpen />
                                        </div>
                                        <Modal
                                            open={ openStartModal }
                                            onClose={ handleStartModalClose }
                                            aria-labelledby="modal-modal-title"
                                            aria-describedby="modal-modal-description"
                                        >
                                            <Grid 
                                                container
                                                direction="column"
                                                justifyContent="center"
                                            >
                                                <Grid 
                                                    item
                                                    classes={ {
                                                        root: classes.startModalContainer
                                                    } }
                                                >
                                                    <Grid 
                                                        container
                                                        direction="column"
                                                        justifyContent="center"
                                                        alignItems="center"
                                                    >
                                                        <Grid 
                                                            item
                                                            xs={12}
                                                            classes={ {
                                                                root: classes.startTitle
                                                            } }
                                                        >
                                                            <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
                                                                Start
                                                            </Typography>
                                                        </Grid>
                                                        <Grid 
                                                            item
                                                            xs={12}
                                                        >
                                                            <Grid 
                                                                container
                                                                direction="column"
                                                                justifyContent="center"
                                                                alignItems="center"
                                                                spacing={1}
                                                                className={ classes.buttonsContainer }
                                                            >
                                                                <Grid 
                                                                    item
                                                                    xs={12}
                                                                >
                                                                    <Typography variant="body2" component="div" sx={{ flexGrow: 1 }}>
                                                                        Have MetaMask Installed?
                                                                    </Typography>
                                                                </Grid>
                                                                <Grid 
                                                                    item
                                                                    xs={12}
                                                                >
                                                                    {
                                                                        pending 
                                                                            ?
                                                                            <Grid 
                                                                                item
                                                                                xs={12}
                                                                            >
                                                                                <Button
                                                                                    variant="contained"
                                                                                    classes={ {
                                                                                        root: classes.disabledButton
                                                                                    } }
                                                                                    disabled={ true }
                                                                                    fullWidth
                                                                                >
                                                                                    <Hearts 
                                                                                        arialLabel="loading-indicator" 
                                                                                        height="35"
                                                                                        width="35"
                                                                                        color={ colorfulSpace4 }
                                                                                    />
                                                                                    &nbsp;
                                                                                    &nbsp;
                                                                                    <p className={ classes.disabledButtonText }>
                                                                                        Loading...
                                                                                    </p>
                                                                                </Button>
                                                                            </Grid>
                                                                            :
                                                                            <Button
                                                                                variant="contained"
                                                                                className={ classes.primaryButton }
                                                                                onClick={ connectToMetaMask }
                                                                                fullWidth
                                                                            >
                                                                                <p className={ classes.primaryButtonText }>
                                                                                    Connect To Metamask
                                                                                </p>
                                                                            </Button>
                                                                    }
                                                                </Grid>
                                                                <Grid 
                                                                    item
                                                                    xs={12}
                                                                >
                                                                    <Typography variant="body2" component="div" sx={{ flexGrow: 1 }}>
                                                                        Otherwise
                                                                    </Typography>
                                                                </Grid>
                                                                <Grid 
                                                                    item
                                                                    xs={12}
                                                                >
                                                                    <a 
                                                                        className={ classes.primaryButtonOutlinedText }
                                                                        href="https://metamask.io/download"
                                                                        target="_blank"
                                                                    >
                                                                        <Button
                                                                            variant="outlined"
                                                                            className={ classes.primaryButtonOutlined }
                                                                            fullWidth
                                                                        >
                                                                            <p 
                                                                                className={ classes.primaryButtonOutlinedText }
                                                                            >
                                                                                Install Metamask
                                                                            </p>
                                                                        </Button>
                                                                    </a>
                                                                </Grid>
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Modal>
                                        {/* TODO: AccountDetailsButton */}
                                    </Grid>
                                </Hidden>
                            </Grid>
                        </Grid>
                    </Grid>
                {/* {auth && (
                    <div>
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleMenu}
                        color="inherit"
                    >
                        <AccountCircle />
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                        }}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                        <MenuItem onClick={handleClose}>My account</MenuItem>
                    </Menu>
                    </div>
                )} */}
                {/* TODO: NavBarMenuDropDown */}
                </Toolbar>
                <Snackbar open={ openToast } autoHideDuration={6000} onClose={handleToastClose}>
                    {
                        toastType === 'error'
                            ?
                            <Alert 
                                onClose={ handleToastClose } 
                                severity="error" 
                                sx={{ width: '100%', color: spaceBlue4, fontWeight: 800 }}
                            >
                                <AlertTitle
                                    sx={{ color: spaceBlue4, fontWeight: 800 }}
                                >
                                    Error
                                </AlertTitle>
                                {
                                    toastMessage ? toastMessage : 'Failed to load web3, accounts, or contract. Check console for details.'
                                }
                            </Alert>
                            : toastType === 'success'
                                ?
                                <Alert 
                                    onClose={ handleToastClose } 
                                    severity="success" 
                                    sx={{ width: '100%', color: spaceBlue4, fontWeight: 800 }}
                                >
                                    <AlertTitle
                                        sx={{ color: spaceBlue4, fontWeight: 800 }}
                                    >
                                        Success
                                    </AlertTitle>
                                    {
                                        toastMessage ? toastMessage : 'You are now connected to MetaMask!'
                                    }
                                </Alert>
                                : toastType === 'warning'
                                    ?
                                    <Alert 
                                        onClose={ handleToastClose } 
                                        severity="warning" 
                                        sx={{ width: '100%', color: '#FFF', fontWeight: 800 }}
                                    >
                                        <AlertTitle
                                            sx={{ color: '#FFF', fontWeight: 800 }}
                                        >
                                            Warning
                                        </AlertTitle>
                                        {
                                            toastMessage ? toastMessage : 'Warning'
                                        }
                                    </Alert>
                                    : null
                    }
                </Snackbar>
            </AppBar>
        </section>
    );
};

export default NavBar;
