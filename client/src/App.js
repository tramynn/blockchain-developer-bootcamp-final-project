import React, { useEffect, useState } from 'react';
// import SimpleStorageContract from './contracts/SimpleStorage.json';
// import getWeb3 from './getWeb3';
// Library imports
import {
    Routes
    , Route
} from 'react-router-dom';
// import {
//     Snackbar
//     , Alert as MuiAlert
//     , AlertTitle
// } from '@mui/material';

// Component imports
import LandingPage from './pages/LandingPage';
import DogaloguePage from './pages/DogaloguePage';
import ErrorPage from './pages/ErrorPage';
import AdoptionCenterPage from './pages/AdoptionCenterPage';
import MyProfilePage from './pages/MyProfilePage';
import Navbar from './components/NavBar/NavBar';

// Utils
import { useWeb3React } from '@web3-react/core';
import { injected } from './components/Wallet/connectors';
import Web3 from 'web3';

// Style imports
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import {
    colorfulSpace4
    , spaceBlue4
} from './globalStyles';

// const Alert = React.forwardRef(function Alert(props, ref) {
//     return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
// });

const App = () => {
    const [ pending, setPending ] = useState( false );
    const { 
        active
        , account
        , library
        , connector
        , activate
        , deactivate
        , error
        , chainId
    } = useWeb3React();
    const web3React = useWeb3React();
    console.log( 'web3React', web3React );

    const [ openToast, setOpenToast ] = useState( false );
    const [ toastType, setToastType ] = useState( '' );

    const [ toastMessage, setToastMessage ] = useState( '' );
    console.log( 'toastMessage', toastMessage );

    const web3Props = {
        active
        , account
        , library
        , connector
        , error
        , chainId
    }
    console.log( 'chainId', typeof chainId );
    const handleToastClose = ( event, reason ) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenToast(false);
    }


    const connectToMetaMask = async () => {
        try {
            setPending( true );
            await activate( injected );
            setTimeout( () => {
                setPending( false );
            }, 1000);
        } catch ( e ) {
            console.log( e );
            setToastType( 'error' );
            setTimeout( () => {
                setOpenToast( false );
            }, 1000);
        }
    }

    const disconnectMetaMask = async () => {
        try {
            await deactivate();
        } catch ( e ) {
            console.log( e );
        }
    }

    useEffect( () => {
        if ( chainId && chainId !== undefined ) {
            if ( chainId === 42 ) {
                setToastType( 'success' );
                setToastMessage( "Connected to MetaMask on Kovan test network." );
                setTimeout( () => {
                    setOpenToast( true );
                }, 1000);
            } else if ( chainId === 1337 ) {
                setToastType( 'success' );
                setToastMessage( "Connected to MetaMask on local test network." );
                setTimeout( () => {
                    setOpenToast( true );
                }, 1000);
            } else {
                setToastType( 'warning' );
                setToastMessage( "Connected to MetaMask, but not Kovan test network. Please connect to Kovan test network." );
                setTimeout( () => {
                    setOpenToast( true );
                }, 1000);
            }
        } else {
            setToastType( 'error' );
            setToastMessage( "Failed to load web3, accounts, or contract. Click Start." );
            setTimeout( () => {
                setOpenToast( true );
            }, 1000);
        }
    }, [ chainId ]);

    // state = { storageValue: 0, web3: null, accounts: null, contract: null };
    // componentDidMount = async () => {
    //     try {
    //         // Get network provider and web3 instance.
    //         const web3 = await getWeb3();
    //         // Use web3 to get the user's accounts.
    //         const accounts = await web3.eth.getAccounts();
    
    //         // Get the contract instance.
    //         const networkId = await web3.eth.net.getId();
    //         const deployedNetwork = SimpleStorageContract.networks[networkId];
    //         const instance = new web3.eth.Contract(
    //             SimpleStorageContract.abi,
    //             deployedNetwork && deployedNetwork.address,
    //         );
    
    //         // Set web3, accounts, and contract to the state, and then proceed with an
    //         // example of interacting with the contract's methods.
    //         this.setState({ web3, accounts, contract: instance }, this.runExample);
    //         } catch (error) {
    //             // Catch any errors for any of the above operations.
    //             alert(
    //                 `Failed to load web3, accounts, or contract. Check console for details.`,
    //             );
    //             console.error(error);
    //     }
    // }

    // runExample = async () => {
    //     const { accounts, contract } = this.state;

    //     // Stores a given value, 5 by default.
    //     await contract.methods.set(5).send({ from: accounts[0] });

    //     // Get the value from the contract to prove it worked.
    //     const response = await contract.methods.get().call();

    //     // Update state with the result.
    //     this.setState({ storageValue: response });
    // };

    // render() {
    //     if (!this.state.web3) {
    //         return <div>Loading Web3, accounts, and contract...</div>;
    //     }
    //     return (
    //         <div className="App">
    //         <h1>Good to Go!</h1>
    //         <p>Your Truffle Box is installed and ready.</p>
    //         <h2>Smart Contract Example</h2>
    //         <p>
    //             If your contracts compiled and migrated successfully, below will show
    //             a stored value of 5 (by default).
    //         </p>
    //         <p>
    //             Try changing the value stored on <strong>line 42</strong> of App.js.
    //         </p>
    //         <div>The stored value is: {this.state.storageValue}</div>
    //         </div>
    //     );
    // }
    return (
        <ThemeProvider theme={ theme }>
            <CssBaseline />
            <Navbar 
                connectToMetaMask={ connectToMetaMask }
                disconnectMetaMask={ disconnectMetaMask }
                web3Props={ web3Props }
                pending={ pending }
                toastType={ toastType }
                openToast={ openToast }
                handleToastClose={ handleToastClose }
                toastMessage={ toastMessage }
            />
            <Routes>
                <Route path="/" element={ <LandingPage /> } />
                <Route exact path="dogalogue" element={ <DogaloguePage /> }>
                    <Route path=":dogId" element={ <DogaloguePage /> } />
                </Route>
                <Route path="adoption" element={ <AdoptionCenterPage /> } />
                <Route path="profile" element={ <MyProfilePage /> }>
                    <Route path=":profileAddress" element={<MyProfilePage />} />
                </Route>
                <Route path="*" element={ <ErrorPage /> } />
                {/* <Snackbar open={ openToast } autoHideDuration={6000} onClose={handleToastClose}>
                    {
                        toastType === 'success'
                            ?
                            <Alert 
                                onClose={ handleToastClose } 
                                severity="error" 
                                sx={{ width: '100%', color: spaceBlue4, fontWeight: 600 }}
                            >
                                <AlertTitle
                                    sx={{ color: spaceBlue4, fontWeight: 800 }}
                                >
                                    <strong>Error</strong>
                                </AlertTitle>
                                Failed to load web3, accounts, or contract. Check console for details.
                            </Alert>
                            : toastType === 'error'
                                ?
                                <Alert 
                                    onClose={ handleToastClose } 
                                    severity="success" 
                                    sx={{ width: '100%', color: spaceBlue4, fontWeight: 600 }}
                                >
                                    <AlertTitle
                                        sx={{ color: spaceBlue4, fontWeight: 800 }}
                                    >
                                        <strong>Success</strong>
                                    </AlertTitle>
                                    You are now connected to MetaMask!
                                </Alert>
                                : null
                    }
                </Snackbar> */}
            </Routes>
        </ThemeProvider>
    );
};

export default App;
