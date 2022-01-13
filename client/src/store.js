import { configureStore } from '@reduxjs/toolkit';
import walletReducer from './ducks/wallet/wallet';

export default configureStore({
    reducer: {
        wallet: walletReducer
    },
});