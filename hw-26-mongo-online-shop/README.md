# 1. create .env in the root folder
NODE_ENV=development
PORT=5000
MONGO_URI=mongodb://mongo:27017/store

# 2. run
docker-compose up --build

# 3. use swagger to check out endpoints
http://localhost:5000/api-docs