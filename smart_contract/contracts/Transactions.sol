 //SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract Transactions {
    uint256 transactionCounter;

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

    function addToBlockchain() public {

    }

    function getAllTransactions() public view returns (TranferStruct[] memory){
        //return transactions

    }

    function getAllTransactionCount() public view returns (uint256) {
        //return transactionCount

    }

    


}