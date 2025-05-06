Online Courses API
A Node.js + MySQL REST API for managing students, courses, and enrollments.

Database Schema
View the schema on dbdiagram.io https://dbdiagram.io/d/Students-Courses-68189e101ca52373f57d9095

Environment Variables
Create a .env file in the root directory with the following content:

MYSQL_HOST=db
MYSQL_DATABASE=online_courses
MYSQL_USER=admin
MYSQL_PASSWORD=admin
MYSQL_PORT=3306
MYSQL_PORT_EXPOSE=3307
PORT=5000

Getting Started
1. Start the application
Make sure Docker is running, then run:

docker-compose up --build -d

API Documentation
Once the app is running, explore the API docs using Swagger:

http://localhost:5000/api-docs/