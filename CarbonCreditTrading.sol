// SPDX-License-Identifier:MIT

pragma solidity ^0.8.0;

contract CarbonCreditTrading {
    
    struct Order {
        address seller;
        uint256 amount;
        uint256 price;
        bool isFilled;
    }
    
    mapping(address => uint256) public balances;
    mapping(address => mapping(address => uint256)) public allowances;
    mapping(bytes32 => Order[]) public orderBook;
    
    event OrderCreated(bytes32 indexed orderId, address indexed seller, uint256 amount, uint256 price);
    event OrderFilled(bytes32 indexed orderId, address indexed buyer, address indexed seller, uint256 amount, uint256 price);
    
    function createOrder(bytes32 orderId, uint256 amount, uint256 price) public {
        require(amount > 0, "Amount must be greater than 0");
        require(price > 0, "Price must be greater than 0");
        require(balances[msg.sender] >= amount, "Insufficient balance");
        
        balances[msg.sender] -= amount;
        
        Order memory order = Order(msg.sender, amount, price, false);
        orderBook[orderId].push(order);
        
        emit OrderCreated(orderId, msg.sender, amount, price);
    }
    
    function fillOrder(bytes32 orderId, uint256 amount) public {
        require(amount > 0, "Amount must be greater than 0");
        
        uint256 totalCost = 0;
        uint256 totalAmount = 0;
        
        Order[] storage orders = orderBook[orderId];
        
        for (uint256 i = 0; i < orders.length; i++) {
            if (orders[i].isFilled == true) {
                continue;
            }
            
            if (orders[i].amount >= amount) {
                totalAmount += amount;
                totalCost += amount * orders[i].price;
                orders[i].isFilled = true;
                emit OrderFilled(orderId, msg.sender, orders[i].seller, amount, orders[i].price);
                break;
            } else {
                totalAmount += orders[i].amount;
                totalCost += orders[i].amount * orders[i].price;
                orders[i].isFilled = true;
                amount -= orders[i].amount;
                emit OrderFilled(orderId, msg.sender, orders[i].seller, orders[i].amount, orders[i].price);
            }
        }
        
        require(totalAmount == amount, "Insufficient order depth");
        require(allowances[msg.sender][orders[0].seller] >= totalCost, "Insufficient allowance");
        
        balances[msg.sender] += totalAmount;
        balances[orders[0].seller] -= totalAmount;
        allowances[msg.sender][orders[0].seller] -= totalCost;
    }
    
    function setAllowance(address spender, uint256 amount) public {
        allowances[msg.sender][spender] = amount;
    }
}
