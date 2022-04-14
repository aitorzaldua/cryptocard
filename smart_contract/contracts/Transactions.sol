 //SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract Transactions {
    uint256 transactionCount;

    event Tranfer (
        address from,
        address receiver,
        uint amount,
        string message,
        uint256 timestamp,
        string keyword
    );

    struct TranferStruct {
        address sender;
        address receiver;
        uint amount;
        string message;
        uint256 timestamp;
        string keyword;
    }

    //array of TranferStruct´s called transactions
    TranferStruct[] transactions;

    //This function add the struct (with the neccesary info) to the array.
    //The info is: The sender, the receiver, the amount, the message, the date and a keyword.
    //The fucntions takes the sender and the date from the wallet and OS.
    //The function takes the rest from the portal.
    function addToBlockchain(address payable receiver, uint amount, string memory message, string memory keyword) public {
        transactionCount += 1;
        transactions.push(TranferStruct(msg.sender, receiver, amount, message, block.timestamp, keyword));

    }

    //This funtion is to recover all the transactions that are already done.
    function getAllTransactions() public view returns (TranferStruct[] memory){
        return transactions;

    }

    //This function is to recover the number of transactions that are already done.
    function getAllTransactionCount() public view returns (uint256) {
        return transactionCount;

    }




}