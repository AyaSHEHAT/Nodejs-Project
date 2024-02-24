// swagger.js

const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Your API Documentation',
      version: '1.0.0',
      description: 'API documentation for your endpoints',
    },
  },
  apis: ['./routes/*.js'], // Path to the API routes folder
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
