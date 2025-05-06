# DB schema
https://dbdiagram.io/d/Students-Courses-68189e101ca52373f57d9095

# create .env file in the root folder
MYSQL_HOST=db
MYSQL_DATABASE=online_courses
MYSQL_USER=admin
MYSQL_PASSWORD=admin
MYSQL_PORT=3306
MYSQL_PORT_EXPOSE=3307
PORT=5000

# to start the app run
docker-compose up --build -d

# endpoints docs
use http://localhost:5000/api-docs/ for swagger documentation