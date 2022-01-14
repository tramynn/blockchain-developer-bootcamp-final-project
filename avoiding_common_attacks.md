# Avoiding Common Attacks

## 1. SWC-107: Reentrancy
- A ReentrancyGuard is a modifier that can prevent reentrancy during certain functions.
- Prevents a contract from calling itself, directly or indirectly.

## 2. SWC-123: Requirement Violation
- The Solidity require() construct is meant to validate external inputs of a function. 
- In most cases, such external inputs are provided by callers, but they may also be returned by callees. 
- In the former case, we refer to them as precondition violations. 
- Violations of a requirement can indicate one of two possible issues:
  1. A bug exists in the contract that provided the external input.
  2. The condition used to express the requirement is too strong.