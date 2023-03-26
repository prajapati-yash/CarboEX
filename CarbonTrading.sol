// SPDX-License-Identifier:MIT

pragma solidity ^0.8.0;

contract CarbonTrading {
    
    struct EmissionsData {
        string certificateOfCarbonEmission;
        bool verified;
    }
    
    struct CarbonCredit {
        uint amount;
    }
    
    struct Transaction {
        address seller;
        address buyer;
        uint amount;
    }
    
    mapping (address => EmissionsData) private emissionsData;
    mapping (address => CarbonCredit) private carbonCredits;
    Transaction[] private transactions;
    
    // Set emissions data for a company
    function setEmissionsData(string memory _certificateOfCarbonEmission) public {
        emissionsData[msg.sender] = EmissionsData(_certificateOfCarbonEmission, false);
    }
    
    // Verify emissions data for a company
    function verifyEmissionsData() public {
        // Only verifiers can verify emissions data
        // Verify emissions data for the calling company
        emissionsData[msg.sender].verified = true;
    }
    
    // Get emissions data for a company
    function getEmissionsData(address _company) public view returns (string memory) {
        return emissionsData[_company].certificateOfCarbonEmission;
    }
    
    // Get emissions data verification status for a company
    function getEmissionsDataVerificationStatus(address _company) public view returns (bool) {
        return emissionsData[_company].verified;
    }
    
    // Add carbon credits for a company
    function addCarbonCredits(uint _amount) public {
        carbonCredits[msg.sender].amount += _amount;
    }
    
    // Get carbon credits balance for a company
    function getCarbonCreditsBalance(address _company) public view returns (uint) {
        return carbonCredits[_company].amount;
    }
    
    // Buy carbon credits from another company
    function buyCarbonCredits(address _seller, uint _amount) public {
        // Only companies with enough carbon credits can buy more
        require(carbonCredits[msg.sender].amount >= _amount, "Not enough carbon credits");
        // Transfer carbon credits from seller to buyer
        carbonCredits[_seller].amount -= _amount;
        carbonCredits[msg.sender].amount += _amount;
        // Record transaction
        transactions.push(Transaction(_seller, msg.sender, _amount));
    }
    
    // Sell carbon credits to another company
    function sellCarbonCredits(address _buyer, uint _amount) public {
        // Only companies with enough carbon credits can sell
        require(carbonCredits[msg.sender].amount >= _amount, "Not enough carbon credits");
        // Transfer carbon credits from seller to buyer
        carbonCredits[msg.sender].amount -= _amount;
        carbonCredits[_buyer].amount += _amount;
        // Record transaction
        transactions.push(Transaction(msg.sender, _buyer, _amount));
    }
    
    // Get transaction count
    function getTransactionCount() public view returns (uint) {
        return transactions.length;
    }
    
    // Get transaction details by index
    function getTransaction(uint _index) public view returns (address, address, uint) {
        require(_index < transactions.length, "Invalid index");
        Transaction memory transaction = transactions[_index];
        return (transaction.seller, transaction.buyer, transaction.amount);
    }
}
