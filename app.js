const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const clothingRoutes = require('./routes/clothingRoutes');

const app = express();

// Middleware
// Enable CORS for all requests (allows frontend to talk to backend)
app.use(cors());

// Body parser to handle JSON data
app.use(express.json());

// Log API requests (simple logger)
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
});

// Route Mounts
app.use('/api/users', userRoutes);
app.use('/api/clothing', clothingRoutes);

// Simple default route
app.get('/', (req, res) => {
    res.send('Virtual Fitting Room API is running...');
});

// Error handling middleware (catch-all for 404s)
app.use((req, res, next) => {
    res.status(404).json({ success: false, error: `Route not found: ${req.method} ${req.originalUrl}` });
});

module.exports = app;