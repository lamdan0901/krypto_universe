// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

// import "hardhat/console.sol";

// we can consider 'contract' like 'class'
contract Transactions {
    uint256 transactionCount;

    // 'event' like a function that will be called later
    event Transfer(
        address from,
        address receiver,
        uint256 amount,
        string message,
        uint256 timestamp
    );

    struct TransferStruct {
        address sender;
        address receiver;
        uint256 amount;
        string message;
        uint256 timestamp;
    }

    TransferStruct[] transactions;

    function addToBlockchain(
        address payable receiver,
        uint256 amount,
        string memory message
    ) public {
        transactionCount += 1;
        transactions.push(
            TransferStruct(
                msg.sender,
                receiver,
                amount,
                message,
                block.timestamp
            )
        );
        emit Transfer(msg.sender, receiver, amount, message, block.timestamp);
    }

    function getAllTransactions()
        public
        view
        returns (TransferStruct[] memory)
    {
        return transactions;
    }

    function getTransactionCount() public view returns (uint256) {
        return transactionCount;
    }
}
