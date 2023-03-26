// SPDX-License-Identifier:MIT

pragma solidity ^0.8.0;

contract CarbonCreditRetirementContract {
    mapping(address => uint256) private retiredCredits;
    address private emissionsTrackingContract;
    
    event CreditsRetired(address indexed company, uint256 credits);
    
    function retireCredits(uint256 credits) external {
        require(credits > 0, "Credits to retire must be greater than zero");
        require(retiredCredits[msg.sender] + credits <= ICarbonTrading(emissionsTrackingContract).getCarbonCredits(msg.sender), "Cannot retire more credits than available");
        retiredCredits[msg.sender] += credits;
        ICarbonTrading(emissionsTrackingContract).updateEmissionsData(msg.sender, -int256(credits));
        emit CreditsRetired(msg.sender, credits);
    }
    
    function getRetiredCredits(address company) external view returns (uint256) {
        return retiredCredits[company];
    }
    
    function setEmissionsTrackingContract(address _emissionsTrackingContract) external {
        emissionsTrackingContract = _emissionsTrackingContract;
    }
}

interface ICarbonTrading {
    function getCarbonCredits(address company) external view returns (uint256);
    function updateEmissionsData(address company, int256 delta) external;
}
