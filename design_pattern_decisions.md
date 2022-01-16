# Design Patterns

## 1. Access Control Design Patterns

- Restricting Access
    - A very simple form of access control is making contract state private. 
    - We cannot prevent people or computer programs from reading your contracts’ state.
    - The state is publicly available information for anyone with access to the blockchain. 
    - We can restrict other contracts’ access to the state by making state variables private.
- Ownable
    - The most common and basic form of access control is the concept of ownership: there’s an account that is the owner of a contract and can do administrative tasks on it. 
    - This approach is perfectly reasonable for contracts that have a single administrative user.
## 2. Inheritance and Interfaces
- My smart contract is inheriting and using interfaces from OpenZeppelin's smart contract library.