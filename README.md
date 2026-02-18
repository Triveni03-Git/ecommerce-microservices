
E-COMMERCE MICROSERVICES PROJECT

A containerized E-Commerce backend application built using Node.js, Express, MongoDB, JWT Authentication, Docker, and API Gateway Architecture.

------------------------------------------------------------

ARCHITECTURE OVERVIEW

This project follows Microservices Architecture with:

- Auth Service
- Product Service
- API Gateway
- Dockerized Services
- Swagger API Documentation

------------------------------------------------------------

PROJECT STRUCTURE

ecommerce-microservices/
│
├── api-gateway/
├── auth-service/
├── product-service/
├── docker-compose.yml
├── README.md
└── .gitignore

------------------------------------------------------------

TECH STACK

- Node.js
- Express.js
- MongoDB Atlas
- JWT Authentication
- Docker & Docker Compose
- Swagger (OpenAPI)

------------------------------------------------------------

SERVICES

1) API Gateway
- Entry point for all requests
- Routes requests to respective services
- Runs on: http://localhost:5000

2) Auth Service
- User Registration
- User Login
- JWT Token Generation

3) Product Service
- Add Product
- Get Products
- Update Product
- Delete Product

------------------------------------------------------------

ENVIRONMENT VARIABLES

Create a .env file inside each service:

Example:

PORT=5001
MONGO_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_secret_key

Note: .env file is ignored in Git for security.

------------------------------------------------------------

RUN WITH DOCKER

Make sure Docker Desktop is running.

Build and Start All Services:
docker-compose up --build -d

Stop Services:
docker compose down

Rebuild and run:
docker compose watch

------------------------------------------------------------

SWAGGER API DOCUMENTATION

After running the application:
http://localhost:5000/api-docs

------------------------------------------------------------

HOW MICROSERVICES WORK HERE

- Client sends request to API Gateway
- API Gateway forwards request to Auth or Product Service
- Each service runs independently
- Services communicate over HTTP

------------------------------------------------------------

WHY MICROSERVICES?

- Independent deployment
- Better scalability
- Fault isolation
- Clean architecture

------------------------------------------------------------

AUTHOR

Gaddam Triveni
Microservices Architecture using Docker

------------------------------------------------------------

FUTURE IMPROVEMENTS

- Add Order Service
- Add Payment Integration
- Add Redis Caching
- Kubernetes Deployment
