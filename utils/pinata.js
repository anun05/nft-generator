
const pinataSDK = require('@pinata/sdk');
const mintNFT = require('../public/js/mint');
const pinata = pinataSDK('cecdbdbb43a28ca3383b', '207a0968305b01775e4cd5a6443cddba0f0e3a8251e005b1ab12dc98c413b34e');


const pinme = (filePath) =>{



const fs = require('fs');
const readableStreamForFile = fs.createReadStream(filePath);

pinata.pinFileToIPFS(readableStreamForFile, ).then((result) => {
    //handle results here
    console.log(result.IpfsHash);
    const cid = result.IpfsHash;
    mintNFT(`https://gateway.pinata.cloud/ipfs/${result.IpfsHash}`)
}).catch((err) => {
    //handle error here
    console.log(err);
});
}

module.exports = pinme;
