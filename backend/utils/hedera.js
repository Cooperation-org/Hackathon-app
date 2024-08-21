const {
  Client,
  PrivateKey,
  AccountId,
  TransferTransaction,
  Hbar,
  TopicMessageSubmitTransaction,
} = require('@hashgraph/sdk');

require('dotenv').config();

// Ensure environment variables are loaded
const hederaAccountId = process.env.HEDERA_ACCOUNT_ID;
const hederaPrivateKey = process.env.HEDERA_PRIVATE_KEY;

if (!hederaAccountId || !hederaPrivateKey) {
  throw new Error('HEDERA_ACCOUNT_ID or HEDERA_PRIVATE_KEY environment variables are missing');
}

const client = Client.forTestnet().setOperator(
  AccountId.fromString(hederaAccountId),
  PrivateKey.fromString(hederaPrivateKey)
);

// The topic ID where the DIDs will be stored
const TOPIC_ID = '0.0.4712010';

const createHederaDid = async (walletAddress) => {
  try {
    // Generate a unique identifier for the DID
    const timestamp = Date.now();
    const uniqueIdentifier = `${walletAddress}-${timestamp}`;

    // Format the DID according to the Hedera method
    const hederaDid = `did:hedera:${uniqueIdentifier}`;

    // Create a message containing the DID and walletAddress
    const message = JSON.stringify({
      did: hederaDid,
      walletAddress: walletAddress,
      timestamp: timestamp,
    });

    // Submit the message to the Hedera Consensus Service
    const transaction = new TopicMessageSubmitTransaction({
      topicId: TOPIC_ID,
      message: message,
    });

    const submitResponse = await transaction.execute(client);
    const receipt = await submitResponse.getReceipt(client);

    // Check transaction status
    if (receipt.status.toString() !== 'SUCCESS') {
      throw new Error('Failed to submit the DID to the Hedera Consensus Service');
    }

    return hederaDid;
  } catch (error) {
    console.error('Error generating Hedera DID:', error);
    throw error;
  }
};

const voteOnBlockchain = async (voterDid, candidateId) => {
  // The logic to record the vote on Hedera goes here
  const transaction = await new TransferTransaction()
    .addHbarTransfer(voterDid, new Hbar(-10)) // Deducts transaction fee from voter
    .addHbarTransfer(candidateId, new Hbar(10)) // Adds the equivalent HBAR to the candidate
    .execute(client);

  const receipt = await transaction.getReceipt(client);
  return receipt.status;
};

module.exports = { createHederaDid, voteOnBlockchain };
