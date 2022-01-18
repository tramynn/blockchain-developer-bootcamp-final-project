let DevDoggieToken = artifacts.require("DevDoggieToken");

contract("DevDoggieToken", function(accounts) {
    let contractInstance;

    const owner = accounts[0];
    
    const devDoggieType = 1;
    const devDoggieFirstName = 'Taro';
    const devDoggieLastName = 'Nguyen';

    beforeEach( async () => {
        contractInstance = await DevDoggieToken.deployed();
    } );
    /*
        Checks to see if the contract is successfully deployed
    */
    it("should deploy successfully", async () => {
        assert.notEqual(owner, 0x0, "the address does not exist");
        assert.notEqual(owner, '', "the address is empty");
        assert.notEqual(owner, null, "the address is null");
        assert.notEqual(owner, undefined), "the address is undefined";
    });    

    describe("Variables", () => {
        /*
            Checks to see if the contract has an owner
        */
        it( "should have an owner", async () => {
            assert.equal( typeof contractInstance.owner, 'function', "the contract has no owner" );
        });
    } )

    describe("Use cases", () => {
        /*
            Checks to see if adoptionFee is the correct value
        */
        describe("getCurrentAdoptionFee", () => {
            it("should return the adoption fee each DevDoggie token will cost", async () => {
                let adoptionFee = await contractInstance.getCurrentAdoptionFee();
                assert.equal(
                    '2000000000000000', 
                    adoptionFee.toString(),
                    "the adoption fee does not match the expected value"
                )
            });
        })
        describe("adoptDevDoggie", () => {
            /*
                Checks to see if the transaction was successful when adopting a DevDoggie
            */
            it("should adopt a devdoggie with the provided `devDoggieType`, `firstName`, and `lastName`", async () => {
                let isTransactionSuccessful = false;
                const tx = await contractInstance.adoptDevDoggie(devDoggieType, devDoggieFirstName, devDoggieLastName, { from: owner, value: 2000000000000000 });

                if (tx) {
                    isTransactionSuccessful = true;
                };

                assert.equal(
                    isTransactionSuccessful,
                    true,
                    "the owner was not able to adopt a DevDoggie",
                );
            });
            /*     
                Checks to see if event is emitted when successfully adopting a DevDoggie
            */
            it("should emit DevDoggieAdopted event when a DevDoggie is adopted", async () => {
                let hasDevDoggieAdoptedEvent = false;
                const tx = await contractInstance.adoptDevDoggie(devDoggieType, devDoggieFirstName, devDoggieLastName, { from: owner, value: 2000000000000000 });

                if (tx && tx.logs[1].event == "DevDoggieAdopted") {
                    hasDevDoggieAdoptedEvent = true;
                };

                assert.equal(
                    hasDevDoggieAdoptedEvent,
                    true,
                    "adopting a DevDoggie should emit a DevDoggieAdopted event",
                );
            });
        });
    });
});