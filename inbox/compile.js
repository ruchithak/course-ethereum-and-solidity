const path = require('path');
const fs = require('fs');
const solc = require('solc');

// Path to solidity contract source file
const contractPath = path.resolve(__dirname, 'contracts', 'Inbox.sol');

const source = fs.readFileSync(contractPath, 'utf8');

// Run console.log(solc.compile(source, 1)) to get output of compiler

// This returns the compiled output of Inbox contract
module.exports = solc.compile(source, 1).contracts[':Inbox'];
