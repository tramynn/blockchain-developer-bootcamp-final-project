import { useState, useRef, useEffect } from 'react';
import { useWeb3React } from '@web3-react/core'

// Components
import { injected } from '../components/Wallet/connectors';

// ABI
import artifact from '../contracts/DevDoggieToken.json';

export default function useDevDoggieTokenContract() {
    const contract = useRef();
    const [ isInitialized, setIsInitialized ] = useState( false );
    const [ currentAdoptionFee, setCurrentAdoptionFee ] = useState();
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

    // Function to get current adoption fee
    const updateAdoptionFee = async () => {
        const newAdoptionFee = await contract.current.methods.getCurrentAdoptionFee().call();
        console.log( 'newAdoptionFee', newAdoptionFee );
        // setCurrentAdoptionFee( newAdoptionFee );
    };

    // Function to invoke a mutating method on our contract
    const adoptDevDoggie = async () => {
        // await contract.current.methods.adoptDevDoggie.send();
    }

    const initializeWeb3 = async () => {
        try {
            await activate( injected );
        } catch ( e ) {
            console.log( e );
        }
    }
    
    useEffect( () => {
        // Initializes web3
        initializeWeb3();

        // Sets up contract instance
        const contract = artifact?.networks[chainId];
        // setContract( contract );
        const address = contract?.address;
        
        if (
            address
        ) {
            contract.current = new library.eth.Contract(artifact.abi, chainId && address, {
                from: account
            })
            setIsInitialized( true );
            // console.log(  'contract.current.methods', contract.current.methods.getCurrentAdoptionFee );
        }
    }, [] );

    useEffect( () => {
        if ( isInitialized ) {
            console.log( 'hit initialize' );
            updateAdoptionFee();
        }
    }, [ isInitialized ] );

    return { currentAdoptionFee, adoptDevDoggie }
}