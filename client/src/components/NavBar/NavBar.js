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
    , Menu
    , MenuItem
    , Divider
} from '@mui/material';
import MoreVert from '@mui/icons-material/MoreVert';
import { Link } from 'react-router-dom';

import { Hearts } from 'react-loader-spinner';

// Component imports
import StartButton from '../StartButton/StartButton';
import AccountDetailsButton from '../AccountDetailsButton/AccountDetailsButton';

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
    , disconnectMetaMask
} ) => {
    const classes = useStyles();
    const [ openStartModal, setOpenStartModal ] = useState( false );
    const [ anchorEl, setAnchorEl ] = useState( null );
    const openAccountDetailsMenu = Boolean(anchorEl);

    const handleOpenAccountDetailsMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleAccountDetailsClose = () => {
        setAnchorEl(null);
    };

    // const [ openToast, setOpenToast ] = useState( false );
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
                            xs={8}
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
                            xs={4}
                        >
                            <Grid
                                container
                                direction="row"
                                justifyContent="space-around"
                            >
                                <Hidden smUp>
                                    <Grid
                                        item
                                        xs={12}
                                        classes={ { 
                                            root: classes.moreIconContainer
                                        } }
                                    >
                                        Please Expand
                                        {/* <IconButton
                                            color="inherit"
                                            aria-label="Account Menu"
                                            onClick={ handleStartModalOpen }
                                        >
                                            <MoreVert />
                                        </IconButton> */}
                                    </Grid>
                                </Hidden>
                                <Hidden smDown>
                                    <Grid
                                        item
                                        xs={6}
                                        className={ classes.navBarLink }
                                    >
                                        {
                                            web3Props.active
                                                ? 
                                                <Link 
                                                    to="adoption"
                                                    style={ { textDecoration: 'none' } }
                                                >
                                                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                                        Adoption Center
                                                    </Typography>
                                                </Link>
                                                : 
                                                <Link 
                                                    to="guide"
                                                    style={ { textDecoration: 'none' } }
                                                >
                                                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>Guide</Typography>
                                                </Link>
                                        }
                                    </Grid>
                                    <Grid
                                        item
                                        xs={6}
                                        className={ classes.navBarButton }
                                    >
                                            {
                                                web3Props.active
                                                    ?
                                                    <div
                                                        onClick={ handleOpenAccountDetailsMenu }
                                                    >
                                                        <AccountDetailsButton 
                                                            web3Props={ web3Props }
                                                        />
                                                    </div>
                                                    :
                                                    <div
                                                        onClick={ handleStartModalOpen }
                                                    >
                                                        <StartButton handleStartModalOpen />
                                                    </div>
                                            }
                                            <Menu
                                                id="account-details-menu"
                                                className={ classes.accountDetailsMenu }
                                                anchorEl={anchorEl}
                                                anchorOrigin={ { vertical: 'bottom', horizontal: 'right' } }
                                                transformOrigin={ { vertical: 'top', horizontal: 'right' } }
                                                open={ openAccountDetailsMenu }
                                                onClose={ handleAccountDetailsClose }
                                            >
                                                <Grid
                                                    container
                                                    direction="column"
                                                    // justifyContent="space-around"
                                                    className={ classes.accountDetailsMenuList }
                                                >
                                                    <Grid 
                                                        item
                                                        classes={ {
                                                            root: classes.startTitle
                                                        } }
                                                    >
                                                        <Typography 
                                                            variant="h4" 
                                                            component="div"
                                                            className={ classes.accountDetailsTitle }
                                                        >
                                                            Account Details
                                                        </Typography>
                                                    </Grid>
                                                    <Grid 
                                                        item
                                                        classes={ {
                                                            root: classes.accountMenuListItem
                                                        } }
                                                    >
                                                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                                            Network: { 
                                                                web3Props.chainId === 42 
                                                                    ? 'Kovan' 
                                                                    : web3Props.chainId === 1337 
                                                                        ? 'Local'
                                                                        : 'Please connect to Kovan.'
                                                            }
                                                        </Typography>
                                                    </Grid>
                                                    <Grid
                                                        item
                                                        className={ classes.divider }
                                                    >
                                                        <Divider variant="middle" />
                                                    </Grid>
                                                    <Grid 
                                                        item
                                                        classes={ {
                                                            root: classes.viewMyProfileLink
                                                        } }
                                                        onClick={ handleAccountDetailsClose }
                                                    >
                                                        <Link 
                                                            to="profile"
                                                            style={ { textDecoration: 'none' } }
                                                        >
                                                            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                                                View My Profile
                                                            </Typography>
                                                        </Link>
                                                    </Grid>
                                                    <Grid
                                                        item
                                                        className={ classes.divider }
                                                    >
                                                        <Divider variant="middle" />
                                                    </Grid>
                                                    <Grid item>
                                                        <Button
                                                            variant="contained"
                                                            className={ classes.primaryButton }
                                                            onClick={ disconnectMetaMask }
                                                            fullWidth
                                                        >
                                                            <p className={ classes.primaryButtonText }>
                                                                Logout of MetaMask
                                                            </p>
                                                        </Button>
                                                    </Grid>
                                                </Grid>
                                            </Menu>
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
                                                                        style={ { textDecoration: 'none' } }
                                                                        href="https://metamask.io/download"
                                                                        target="_blank"
                                                                    >
                                                                        <Button
                                                                            variant="outlined"
                                                                            classes={ {
                                                                                root: classes.primaryButtonOutlined
                                                                            } }
                                                                            fullWidth
                                                                            onClick={ handleStartModalClose }
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
