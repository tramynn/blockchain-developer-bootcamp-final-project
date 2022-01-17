import { useState, useEffect } from 'react';
import { useWeb3React } from '@web3-react/core'

// Components
import { injected } from '../components/Wallet/connectors';

// ABI
import artifact from '../contracts/DevDoggieToken.json';

export default function useDevDoggieTokenContract() {
    const [ contract, setContract ] = useState();
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
    console.log( 'contract', contract );
    console.log( 'library', library );
    // Function to get current adoption fee
    const fetchAdoptionFee = async () => {
        try {
            let newAdoptionFee = await contract.methods.getCurrentAdoptionFee().call();
            let convertedFromWei = library.utils.fromWei(newAdoptionFee, 'ether');
            setCurrentAdoptionFee( convertedFromWei );
        } catch ( e ) {
            console.error( e );
        }
    };

    // Function to invoke a mutating method on our contract
    const adoptDevDoggie = async ( params ) => {
        const { devDoggieType, firstName, lastName } = params;
        try {
            const tx = await contract.methods.adoptDevDoggie( devDoggieType
                , firstName
                , lastName
                ).send( { from: account, value: library.utils.toWei(currentAdoptionFee, 'ether') } )
            if ( tx ) {
                console.log( 'tx', tx );
                return tx;
            } else {
                console.error( 'Error adopting a devdoggie.' )
            }
        } catch ( e ) {
            console.error( e )
        }
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
        
        if ( address) {
            const contractInstance = new library.eth.Contract(artifact.abi, chainId && address, {
                from: account
            })
            setContract( contractInstance );
            setIsInitialized( true );
        }
    }, [] );

    useEffect( () => {
        if ( isInitialized ) {
            fetchAdoptionFee();
        }
    }, [ isInitialized ] );

    return { currentAdoptionFee, adoptDevDoggie }
}