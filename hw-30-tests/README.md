# 1. create .env in the root folder
NODE_ENV=development
PORT=5000
MONGO_URI=mongodb://mongo:27017/store

# 2. create .env.test in the root folder
NODE_ENV=test
MONGO_URI=mongodb://localhost/test

# 3. run tests in a separate container
docker-compose run --rm api-test

# 4. run the app
docker-compose up --build

# 5. use swagger to check out endpoints
http://localhost:5000/api-docs