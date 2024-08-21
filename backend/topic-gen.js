const { Client, TopicCreateTransaction } = require("@hashgraph/sdk");
require('dotenv').config(); 

async function createTopic() {
    // Configure client to connect to the Hedera testnet
    const client = Client.forTestnet();
    client.setOperator(process.env.HEDERA_ACCOUNT_ID, process.env.HEDERA_PRIVATE_KEY);

    // Create the topic
    const transaction = new TopicCreateTransaction();

    // Execute the transaction to create a new topic
    const response = await transaction.execute(client);

    // Get the receipt of the transaction to get the Topic ID
    const receipt = await response.getReceipt(client);

    // Get the new Topic ID
    const topicId = receipt.topicId;

    console.log(`New Topic ID: ${topicId.toString()}`);
    return topicId.toString();
}

// Call the function to create a topic and get the Topic ID
createTopic().catch(console.error);
