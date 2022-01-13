import { createSlice } from '@reduxjs/toolkit'

import { useWeb3React } from "@web3-react/core"
import { injected } from '../../components/Wallet/connectors';

// const { active, account, library, connector, activate, deactivate, error } = useWeb3React();

export const walletSlice = createSlice({
    name: 'wallet',
    initialState: {
        // account
        // , active
        // , error
        // , chainId
    },
    reducers: {
        increment: state => {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        state.value += 1
        }
        , decrement: state => {
        state.value -= 1
        }
        , incrementByAmount: (state, action) => {
        state.value += action.payload
        }
        , connectToMetaMask: (state, action) => {

        }
    }
})

// Action creators are generated for each case reducer function
export const { connectToMetaMask } = walletSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
// export const incrementAsync = amount => dispatch => {
    // setTimeout(() => {
    //     dispatch(incrementByAmount(amount));
    // }, 1000);
// };

// export const connectMetaMask = amount => dispatch => {
//     try {
//         await activate( injected );
//         // if ( chainId != '0x1' ) {
//         //     alert("Please connect to Kovan");
//         // } else {
//         //     let wallet = accounts[0];
//         //     setWalletAddress(wallet);
//         // }
//     } catch ( e ) {
//         console.log( e );
//         // TODO: setError `Failed to load web3, accounts, or contract. Check console for details.`
//     }
//     setTimeout(() => {
//         dispatch( await activate( injected ));
//     }, 1000);
// };

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectCount = state => state.counter.value;

export default walletSlice.reducers;