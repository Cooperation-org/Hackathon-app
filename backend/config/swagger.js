const swaggerJSDoc = require("swagger-jsdoc");

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Hedera Powered Secure Voting D-app",
            version: "1.0.30",
            description:
                "We made use of HCS service to build immutability into voting, and the api helps makes that possible",
        },
        servers: [
            {
                url: "https://api.hedera.linkedtrust.us",
                // url: 'http://127.0.0.1:3000',
            },
        ],
    },
    apis: ["./routes/*.js"],
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
