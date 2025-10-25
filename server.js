const app = require("./app");

// Define the port (using environment variable or default)
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server running in development mode on port ${PORT}`);
  console.log(`API documentation: http://localhost:${PORT}/`);
  console.log(`Test Endpoint: http://localhost:${PORT}/api/clothing`);
});

// Handle unhandled promise rejections (optional, but good practice)
process.on("unhandledRejection", (err, promise) => {
  console.error(`Error: ${err.message}`);
  // Close server & exit process
  // server.close(() => process.exit(1));
});
