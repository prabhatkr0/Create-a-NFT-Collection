# CREATING MY OWN TOKEN 

The project involves the creation of a custom token using the Solidity programming language. Tokens are a fundamental aspect of the Ethereum blockchain ecosystem, representing digital assets that can be transferred and exchanged. By developing your own token, you can explore the underlying concepts of blockchain, smart contracts, and decentralized finance.

## Description
This project focuses on creating a custom token using the Solidity programming language within the Remix IDE. Remix is a popular web-based development environment that provides a user-friendly interface for writing, compiling, and deploying smart contracts on the Ethereum blockchain.

## Getting Started

### Executing program

The project will involve the following steps:

Setting up Remix:

1. Open the Remix IDE in your web browser.
* To run this program, you can use Remix, an online Solidity IDE. To get started, go to the Remix website at https://remix.ethereum.org/.

2. Creating the Token Contract:

* Start a new file in the code editor within Remix. Copy and paste the following code into the file:




'''
// Code example
let nftCounter = 0;

function mintNFT(name, details, imageUrl) {
  const nftObject = {
    name: name,
    details: details,
    imageUrl: imageUrl
  };
  nftCounter++;
  return nftObject;
}

function listNFTs(nftList) {
  nftList.forEach(nft => {
    console.log("Name: " + nft.name);
    console.log("Details: " + nft.details);
    console.log("Image URL: " + nft.imageUrl);
    console.log("------------------");
  });
}

function getTotalSupply() {
  console.log("Total NFTs: " + nftCounter);
}

const nftCollection = [];

const nftOne = mintNFT("NFT One", "This is the first NFT", "imageOne.jpg");
nftCollection.push(nftOne);

const nftTwo = mintNFT("NFT Two", "This is the second NFT", "imageTwo.jpg");
nftCollection.push(nftTwo);

listNFTs(nftCollection);
getTotalSupply();

'''





3. Compiling the Contract:

* Use the Remix compiler panel to compile your token contract.
* Select the appropriate compiler version i.e 0.8.18.

4. Deploying the Contract:

* Switch to the "Deploy & run transactions" tab in Remix.
* Deploy the compiled contract by clicking the "Deploy" button.

5. Interacting with the Token:

* Utilize the Remix IDE to interact with the deployed token contract.
* Use the Addresstobalance, mint and burn functions in the "Deployed Contracts" section to perform actions like transferring tokens, checking balances, and burning tokens.
* Input the adress and value and click on the corresponding function buttons to execute our contract.


## Authors

Prabhat Kumar
 
pk42754321@gmail.com
## License

This project is licensed under the MIT License - see the LICENSE.md file for details.This code is licensed under the MIT License. You can find the license text in the SPDX-License-Identifier comment at the beginning of the contract.

Note: Ensure that you are using a compatible Solidity compiler version (0.8.18) or newer to compile and interact with this contract.
