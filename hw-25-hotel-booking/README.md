DB diagram
https://dbdiagram.io/d/Hotel-booking-MySql-681774021ca52373f5624d12

# Hotel Booking API
crete .env file in the root folder with the following content
MYSQL_HOST=db
MYSQL_USER=root
MYSQL_PASSWORD=root
MYSQL_DATABASE=hotel_db
MYSQL_ROOT_PASSWORD=root
PORT=5000

run "docker-compose up --build -d"

API endpoints:

POST /api/guests
Content-Type: application/json

request body example
{
  "first_name": "Kyrylo",
  "last_name": "Kyrylo",
  "email": "kyrylo@example.com",
  "phone": "123123123"
}

response example
{
  "id": 1,
  "first_name": "Kyrylo",
  "last_name": "Kyrylo",
  "email": "kyrylo@example.com",
  "phone": "123123123",
  "created_at": "2025-05-04T17:46:55Z",
  "updated_at": null
}

GET /api/guests
Content-Type: application/json

response example
[
  {
    "id": 1,
    "first_name": "Kyrylo",
    "last_name": "Kyrylo",
    "email": "kyrylo@example.com",
    "phone": "123123123",
    "created_at": "2025-05-04T17:46:55Z",
    "updated_at": null
  }
]

POST /api/bookings
Content-Type: application/json

request example
{
  "guest_id": 1,
  "room_id": 1,
  "check_in_date": "2025-05-05",
  "check_out_date": "2025-05-10",
  "total_price": 500
}

response example
{
  "id": 1,
  "guest_id": 1,
  "room_id": 1,
  "check_in_date": "2025-05-05",
  "check_out_date": "2025-05-10",
  "total_price": 500
}

GET /api/rooms/available?date=YYYY-MM-DD

request example
GET /api/rooms/available?date=2025-05-05

response example
[
  {
    "id": 1,
    "room_number": "101",
    "type": "Single",
    "price": 100,
    "is_available": true
  },
  {
    "id": 2,
    "room_number": "102",
    "type": "Double",
    "price": 150,
    "is_available": true
  }
]

GET /api/bookings/revenue?month=YYYY-MM

request example
GET /api/bookings/revenue?month=2025-04

response example
{
  "month": "2025-04",
  "revenue": 1200
}
