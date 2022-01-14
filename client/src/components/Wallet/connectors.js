import { InjectedConnector } from '@web3-react/injected-connector'

export const injected = new InjectedConnector({
    // 42 = kovan testnet
    // 1337 = ganache
    supportedChainIds: [1, 3, 4, 5, 42, 1337],
})