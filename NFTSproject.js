/* 
// Metacrafters - Beginning Javascript
//
// This is a javascript playground for testing your javascript code!
// When you are ready to test, simply right click and select "Run Code"
// to see the result print below. If you have more then one snippet of code,
// you can highlight the code you want to test, and then right click and select "Run Code"
*/

// Enter your code below this line

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
