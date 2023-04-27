// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/ERC20.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/access/Ownable.sol";
//import "./Dao.sol";


contract NewToken is ERC20,Ownable{
    address admin;
    uint256 tokenPrice = 10000000000000; // 1 token = .00001 Ether

    constructor(uint _supply) ERC20("New Token","NT") {
        admin=msg.sender;
        _mint(msg.sender,_supply);
    }
    
    function mintFifty(uint _supply) public onlyOwner {
        uint256 mintTokens = _supply;
        _mint(msg.sender,mintTokens);
    }

    function withdrawFromContract(uint _amount,address _tokenAddress) public payable onlyOwner
    {
            IERC20 _token = IERC20(_tokenAddress);
            _token.transfer(msg.sender,_amount);
    }

    // set token price for onlyOwner
    function settokenprice(uint _tokenPrice) public onlyOwner {
        tokenPrice = _tokenPrice;
    }

    function setadmin(address _admin) public onlyOwner {
        admin = _admin;
    }
    
    function gettokenPrice() public view returns(uint ){
        return tokenPrice;
    } 
}