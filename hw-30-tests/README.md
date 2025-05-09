# 1. create .env in the root folder
NODE_ENV=development
PORT=5000
MONGO_URI=mongodb://mongo:27017/store

# 2. To run tests "npm i" then run "npm run test"

# 3. to run the app
docker-compose up --build

# 4. use swagger to check out endpoints
http://localhost:5000/api-docs