
const pinataSDK = require('@pinata/sdk');
const mintNFT = require('../public/js/mint');
const pinata = pinataSDK('cecdbdbb43a28ca3383b', '207a0968305b01775e4cd5a6443cddba0f0e3a8251e005b1ab12dc98c413b34e');


// pinata.testAuthentication().then((result) => {
//     //handle successful authentication here
//     console.log(result);
// }).catch((err) => {
//     //handle error here
//     console.log(err);
// });


const pinme = (filePath) =>{



const fs = require('fs');
const readableStreamForFile = fs.createReadStream(filePath);
// const options = {
//     pinataMetadata: {
//         name: MyCustomName,
//         keyvalues: {
//             customKey: 'customValue',
//             customKey2: 'customValue2'
//         }
//     },
//     pinataOptions: {
//         cidVersion: 0
//     }
// };
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
