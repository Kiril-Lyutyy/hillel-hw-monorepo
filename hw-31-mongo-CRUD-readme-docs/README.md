# HW-27: Mongo CRUD API

## Description

RESTful API using Node.js + Express + MongoDB. CRUD-operations for students.

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Swagger (docs)
- Docker (optional)

## Getting Started

1. Clone repo:
```bash
git clone https://github.com/Kiril-Lyutyy/hillel-hw-monorepo.git
cd hw-31-mongo-CRUD-readme-docs
```

2. Create .env in the root folder:
```bash
NODE_ENV=development
PORT=5000
MONGO_URI=mongodb://mongo:27017/store
```
3. Run the project:
```bash
docker-compose up --build
```

## Project Structure
```bash
src/
├── config/
├── controllers/
├── routes/
├── models/
├── seeds/
├── app.js
└── swagger.js
```
## API Documentation

Available at: [http://localhost:5000/api-docs](http://localhost:5000/api-docs)
(Generated with Swagger)

### 9. 📄 Licence

```md
## License

This project is licensed under the MIT License.

## Contributing

1. Fork the repository
2. Create your branch: `git checkout -b feature/feature-name`
3. Commit your changes: `git commit -m 'Add feature'`
4. Push to the branch: `git push origin feature/feature-name`
5. Create a pull request

## Author

- Kyrylo Liutyi — [LinkedIn](https://www.linkedin.com/in/kyrylo-liutyi-262231161/) — [GitHub](https://github.com/Kiril-Lyutyy)