const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const hederaRoutes = require('./routes/hederaRoutes');
const electionRoutes = require('./routes/electionRoutes');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./config/swagger');


require('dotenv').config();

const app = express();

// Connect to database
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/metamask', hederaRoutes);
app.use('/api/election', electionRoutes);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT} and swagger on /docs route`));
