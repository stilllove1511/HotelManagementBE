import * as swaggerJsDoc from 'swagger-jsdoc';
// import dotenv from 'dotenv';

// dotenv.config();

const swaggerDefinition = {
    info: {
        title: 'API HOTEL',
        version: '1.0.0',
        description: 'This is the REST API for project HOTEL',
    },
    host: process.env.API_HOST,
    basePath: '/api',
    tags: [
        {
            name: '[USER]: user',
            description: 'Thông tin user',
        },
        {
            name: '[LOGIN]: account',
            description: "Đăng nhập"
        }
    ],
    securityDefinitions: {
        Bearer: {
            type: 'apiKey',
            schema: 'bearer',
            name: 'Authorization',
            in: 'header',
            prefix: 'Bearer ',
        },
    },
    definitions: {},
};

const options = {
    swaggerDefinition,
    explorer: true,
    apis: ['**/*.ts'],
};
export default swaggerJsDoc(options);
