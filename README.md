# DevDoggies
ConsenSys Academy Blockchain Developer Bootcamp Final Project

## About
A decentralized platform (adoption center) where users can view and adopt DevDoggies.

## Live Demo / Deployed Version
https://devdoggies.vercel.app/
## Screencast Link

## Public Ethereum wallet for certification
`0x020cD1e2C713ac6143B5f9D7423A07c89418a8E6`

## Features
1. User can login into DevDoggies via MetaMask
2. User can view dogalogue of DevDoggies
4. User can adopt a DevDoggie
6. User can view their DevDoggies in their dashboard

## Workflow
1. The user is directed to the landing page
2. The project checks if the user has web3 injected in the browser
3. The user is prompted to click the start button to log into metamask
4. If the user is not connected to MetaMask, the Adoption Center is disabled
5. If the user is connected to MetaMask, the Adoption center is enabled
6. Once on the Adoption Center page,
   1. The user can select 1 of 3 DevDoggie types to adopt.
    - DevDoggie 1
      - White & Yellow
   - DevDoggie 2
     - White
   - DevDoggie 3
     - Yellow & Black   
   2. The user can complete the adoption by:
      1. Entering a first name
      2. Entering a last name
      3. Paying the adoption fee
         - The user can click `pay adoption fee` button which prompts MetaMask to confirm the transaction
7. Upon confirming the transaction:
   1. On success, the user can click `go to my profile` button to view their devdoggies
   2. On error, the user can click `try again` or `cancel`

## Project Structure
```
\client
    \public
    \src
\contracts
\migrations
\test
\build
    \app
    \contracts
```
1. `client`: Web React Frontend
   1. `public`: Public html
   2. `src`: App source
2. `contracts`: Solidity source where smart contract lives
3. `migrations`: Migration scripts for Truffle to deploy smart contracts on Kovan test network
4. `test`: Smart contract unit tests
5. `build`: Smart contracts' artifacts after compilation
   1. `app`: Production app distribution
   2. `contracts`: Migrated contracts

## To run on a local environment:

### Prerequisites
- `Node.js` >= v14.18.0 (Runtime engine)
- `Truffle` >= v5.4.12 (Ethereum Framework)
- `Ganache GUI` >= v2.5.4 (Ethereum Client)
- `npm` >= v6.14.12 (Node Package Modules)
### To run the frontend:
```javascript
// In another terminal 
// Start in root directory
npm install

// The frontend project lives in the client directory
cd client
npm run start
```
- Go to browser and open `http:/localhost:3000`
### To run smart contracts:
- Start in root directory and run command
```javascript
// In another terminal 
// Start in root directory
npm install
```
- Run a local ethereum node on port `8545` using the Ganache GUI
- Run `truffle compile --network development`
- Run `truffle migrate --network development`
### To run smart contract tests:
```javascript
// In another terminal 
// inside the development console.
test

// outside the development console..
truffle test
```

## To create environment variables:
- Create a `.env` file in the root directory and add the env vars below
```javascript
KOVAN_MNEMONIC=""
INFURA_URL=
```
## To build the application for production:
- This will create a `client/build` folder
```javascript
// Start in client directory
npm run build
```
