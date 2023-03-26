// SPDX-License-Identifier:MIT

pragma solidity ^0.8.0;

contract CarbonCreditIssuance {
    
    // Struct for storing company emissions data and carbon credits
    struct Company {
        uint emissionsData;
        uint carbonCredits;
    }
    
    // Mapping to store company information
    mapping(address => Company) public companies;
    
    // Event to notify when carbon credits are issued
    event CarbonCreditsIssued(address company, uint amount);
    
    // Function to calculate and issue carbon credits to a company
    function issueCarbonCredits(address companyAddress) public {
        Company storage company = companies[companyAddress];
        uint emissions = company.emissionsData;
        uint credits = emissions / 1000; // 1 credit for every 1000 units of emissions
        
        company.carbonCredits += credits;
        emit CarbonCreditsIssued(companyAddress, credits);
    }
    
    // Function to transfer carbon credits from one company to another
    function transferCarbonCredits(address from, address to, uint amount) public {
        Company storage fromCompany = companies[from];
        Company storage toCompany = companies[to];
        
        require(fromCompany.carbonCredits >= amount, "Insufficient carbon credits");
        
        fromCompany.carbonCredits -= amount;
        toCompany.carbonCredits += amount;
    }
}
