// SPDX-License-Identifier:MIT

pragma solidity ^0.8.0;

contract Registry {
    struct Company {
        string name;
        address walletAddress;
        uint256 emissionsDataIndex;
        uint256 carbonCredits;
    }
    
    Company[] public companies;
    
    mapping(address => uint256) public companyIndex;
    
    event NewCompanyAdded(address indexed walletAddress, string name);
    event CompanyEmissionsDataUpdated(address indexed walletAddress, uint256 newIndex);
    event CompanyCarbonCreditsUpdated(address indexed walletAddress, uint256 newAmount);
    
    function addCompany(string memory name, address walletAddress, uint256 emissionsDataIndex, uint256 carbonCredits) public {
        require(companyIndex[walletAddress] == 0, "Company already exists in the registry.");
        
        companies.push(Company({
            name: name,
            walletAddress: walletAddress,
            emissionsDataIndex: emissionsDataIndex,
            carbonCredits: carbonCredits
        }));
        
        companyIndex[walletAddress] = companies.length;
        
        emit NewCompanyAdded(walletAddress, name);
    }
    
    function updateEmissionsDataIndex(address walletAddress, uint256 newIndex) public {
        require(companyIndex[walletAddress] > 0, "Company does not exist in the registry.");
        
        companies[companyIndex[walletAddress]-1].emissionsDataIndex = newIndex;
        
        emit CompanyEmissionsDataUpdated(walletAddress, newIndex);
    }
    
    function updateCarbonCredits(address walletAddress, uint256 newAmount) public {
        require(companyIndex[walletAddress] > 0, "Company does not exist in the registry.");
        
        companies[companyIndex[walletAddress]-1].carbonCredits = newAmount;
        
        emit CompanyCarbonCreditsUpdated(walletAddress, newAmount);
    }
    
    function getCompany(uint256 index) public view returns(string memory, address, uint256, uint256) {
        require(index < companies.length, "Index out of range.");
        
        Company memory company = companies[index];
        
        return (company.name, company.walletAddress, company.emissionsDataIndex, company.carbonCredits);
    }
    
    function getCompanyByWalletAddress(address walletAddress) public view returns(string memory, address, uint256, uint256) {
        require(companyIndex[walletAddress] > 0, "Company does not exist in the registry.");
        
        Company memory company = companies[companyIndex[walletAddress]-1];
        
        return (company.name, company.walletAddress, company.emissionsDataIndex, company.carbonCredits);
    }
    
    function getNumberOfCompanies() public view returns(uint256) {
        return companies.length;
    }
}
