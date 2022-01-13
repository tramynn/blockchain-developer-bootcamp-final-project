// SPDX-License-Identifier: MIT
pragma solidity 0.8.11;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

// @title A simulator to adopt a devdoggie
// @author Tramy N. Nguyen
// @notice 
// @dev 
contract DevDoggieToken is ERC721, ReentrancyGuard, Ownable {

    /* DATATYPES */
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
    address contractAddress;

    /* CONSTANTS */
    uint8 constant NAME_MIN_LENGTH = 1;
    uint8 constant NAME_MAX_LENGTH = 64;

    // @notice Current adoption fee for each devdoggie token in Ether
    uint256 currentAdoptionFee = 0.02 ether;

    // @notice The devdoggie token types (1, 2, 3);
    mapping(uint256 => uint256) devDoggieTypes;

    // @notice The first name of the devdoggie
    mapping(uint256 => string) devDoggieFirstNames;

    // @notice The last name of the devdoggie
    mapping(uint256 => string) devDoggieLastNames;

    /* EVENTS */
    event AdoptedDevDoggie(address indexed buyer, uint256 devDoggieId);


    constructor(address marketplaceAddress) ERC721("DevDoggieToken", "TARO") {
        contractAddress = marketplaceAddress;
    }

    // Requires the amount of Ether be at least or more of the currentPrice
    // @dev Creates an instance of a devdoggie token and mints it to the purchaser
    // @param _owner The address of the owner of this newly generated devdoggie token
    // @param _type The devdoggie token as an integer
    // @param _firstName The first name of the devdoggie token
    // @param _lastName The last name of the devdoggie token
    // @return Returns the devDoggieId of uint256
    function adoptDevDoggie (
        // uint256 _devDoggieType
        string memory _firstName
        , string memory _lastName
    )
        public returns (uint256)
        {
            // Converts firstName and lastName to bytes
            bytes memory _firstNameBytes = bytes(_firstName);
            bytes memory _lastNameBytes = bytes(_lastName);

            require(_firstNameBytes.length >= NAME_MIN_LENGTH, "First name is too short.");
            require(_firstNameBytes.length >= NAME_MAX_LENGTH, "First name is too long.");
            require(_lastNameBytes.length >= NAME_MIN_LENGTH, "Last name is too short.");
            require(_lastNameBytes.length >= NAME_MAX_LENGTH, "Last name is too long.");

            // require(msg.value >= currentAdoptionFee, "Amount of Ether sent too small.");

            // Updates tokenIds count
            _tokenIds.increment();
            
            // Takes the current tokenId and sets to newDevDoggieId
            uint256 newDevDoggieId = _tokenIds.current();
            _mint(msg.sender, newDevDoggieId);

            return newDevDoggieId;

            // emit AdoptedDevDoggie(msg.sender, newDevDoggieId);
        }

    // function getMyDevDoggies()
    //     external
    //     view
    //     returns (uint256[])
    //     {
    //         return ownedDevDoggies[msg.sender];
    //     }

    function getDevDoggie(uint256 _devDoggieId)
        external
        view
        returns (
            uint256 _devDoggieType
            , string memory _devDoggieFirstName
            , string memory _devDoggieLastName
        )
        {
            _devDoggieType = devDoggieTypes[_devDoggieId];
            _devDoggieFirstName = devDoggieFirstNames[_devDoggieId];
            _devDoggieLastName = devDoggieLastNames[_devDoggieId];
        }

    function getCurrentAdoptionFee()
        external
        view
        returns (uint256 adoptionFee)
        {
            adoptionFee = currentAdoptionFee;
        }
}