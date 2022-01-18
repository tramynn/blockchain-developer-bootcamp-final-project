// SPDX-License-Identifier: MIT
pragma solidity 0.8.11;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

// @title Contract for adopting a DevDoggie
// @author Tramy N. Nguyen
// @notice Allows a user to obtain ownership of a DevDoggie NFT
contract DevDoggieToken is ERC721, ReentrancyGuard, Ownable {
    /* 
        CONSTANTS 
    */

    uint8 constant NAME_MIN_LENGTH = 1;
    uint8 constant NAME_MAX_LENGTH = 64;

    /* 
        DATATYPES 
    */

    // @notice Uses the Counter logic from OpenZeppelin
    // @dev Creates ID generation for a DevDoggie token
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    // @notice Current adoption fee for each devdoggie token in Ether
    uint256 currentAdoptionFee = 0.002 ether;

    // @notice The devdoggie token types
    // @dev Is 1, 2, or 3
    mapping(uint256 => uint256) devDoggieTypes;

    // @notice The first name of the devdoggie
    mapping(uint256 => string) devDoggieFirstNames;

    // @notice The last name of the devdoggie
    mapping(uint256 => string) devDoggieLastNames;

    // @notice This creates a public variable to store all the devdoggies of the owner
    // @dev This is an array of devdoggies struct
    mapping (uint256 => DevDoggie) public adoptedDevDoggies;

    struct DevDoggie {
        uint256 tokenId;
        address owner;
        uint256 devDoggieType;
        string firstName;
        string lastName;
    }

    /* 
        EVENTS
    */

    // @notice Emitted when a DevDoggie is adopted
    // @param buyer is the msg.sender
    // @param buyer is the msg.sender
    event DevDoggieAdopted(address indexed buyer, uint256 devDoggieId);

    /* 
        MODIFIERS
    */
    
    modifier isOwner (address _owner) {
        require( msg.sender == _owner, "Owner must be the same as the message sender." );
        _;
    }

    constructor() ERC721("DevDoggieToken", "TARO") {
    }

    /* 
        FUNCTIONS
    */

    // @notice Function for adopting a DevDoggie
    // @dev Requires the amount of Ether be at least or more of the currentPrice
    // @dev Creates an instance of a devdoggie token and mints it to the purchaser
    // @param _devDoggieType The devdoggie token as an integer
    // @param _firstName The first name of the devdoggie token
    // @param _lastName The last name of the devdoggie token
    // @return Returns the devDoggieId of uint256
    function adoptDevDoggie (
        uint256 _devDoggieType
        , string memory _firstName
        , string memory _lastName
    )
        public
        payable
        nonReentrant
        returns (uint256)
        {
            // Converts firstName and lastName to bytes
            bytes memory _firstNameBytes = bytes(_firstName);
            bytes memory _lastNameBytes = bytes(_lastName);

            require(_firstNameBytes.length >= NAME_MIN_LENGTH, "First name is too short.");
            require(_firstNameBytes.length <= NAME_MAX_LENGTH, "First name is too long.");
            require(_lastNameBytes.length >= NAME_MIN_LENGTH, "Last name is too short.");
            require(_lastNameBytes.length <= NAME_MAX_LENGTH, "Last name is too long.");

            require(msg.value >= currentAdoptionFee, "Amount of Ether sent too small.");

            // Updates tokenIds count
            _tokenIds.increment();
            
            // Takes the current tokenId and sets to newDevDoggieId
            uint256 newDevDoggieId = _tokenIds.current();
            _mint(msg.sender, newDevDoggieId);

            // Adds properties of new devdoggie that made the call to the adoptedDevDoggies array
            adoptedDevDoggies[newDevDoggieId] = DevDoggie( {
                tokenId: newDevDoggieId
                , owner: msg.sender
                , devDoggieType: _devDoggieType
                , firstName: _firstName
                , lastName: _lastName
            } );

            emit DevDoggieAdopted(msg.sender, newDevDoggieId);

            return newDevDoggieId;
        }

    // @notice Returns all the devdoggie tokens the user owns
    // @dev Finds the DevDoggieTokens of the owner
    // @return An array of DevDoggie tokens for the owner/buyer
    function getMyDevDoggies()
        public
        view
        isOwner( msg.sender )
        returns (DevDoggie[] memory)
        {
            uint totalDevDoggieCount = _tokenIds.current();
            uint devDoggieCount = 0;
            uint currentIndex = 0;

            for (uint i = 0; i < totalDevDoggieCount; i++) {
                if (adoptedDevDoggies[i + 1].owner == msg.sender) {
                    devDoggieCount += 1;
                }
            }

            DevDoggie[] memory myDevDoggies = new DevDoggie[](devDoggieCount);
            for (uint i = 0; i < totalDevDoggieCount; i++) {
                if (adoptedDevDoggies[i + 1].owner == msg.sender) {
                    uint currentId = i + 1;
                    DevDoggie storage currentDevDoggie = adoptedDevDoggies[currentId];
                    myDevDoggies[currentIndex] = currentDevDoggie;
                    currentIndex += 1;
                }
            }
            return myDevDoggies;
        }

    // @notice Returns the information about a specific DevDoggie token
    // @param _tokenId The ID of the DevDoggie token
    // @return Returns a _devDoggieType of uint256
    // @return Returns a string for _devDoggieFirstName
    // @return Returns a string for _devDoggieLastName
    function getDevDoggie(uint256 _tokenId)
        external
        view
        returns (
            uint256 _devDoggieType
            , string memory _devDoggieFirstName
            , string memory _devDoggieLastName
        )
        {
            _devDoggieType = devDoggieTypes[_tokenId];
            _devDoggieFirstName = devDoggieFirstNames[_tokenId];
            _devDoggieLastName = devDoggieLastNames[_tokenId];
        }

    // @notice Function for retrieving the currentAdoptionFee
    // @return Returns the adoptionFee of uint256
    function getCurrentAdoptionFee()
        external
        view
        returns (uint256 adoptionFee)
        {
            adoptionFee = currentAdoptionFee;
        }
}