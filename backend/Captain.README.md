# Captain Registration Endpoint

## Endpoint

`POST /api/captains/register`

## Description

This endpoint is used to register a new captain. It validates the input data, checks if the captain already exists, hashes the password, and creates a new captain in the database.

## Request Body

The request body should be a JSON object with the following fields:

- `fullName`: An object containing:
  - `firstName` (string, required): The first name of the captain. Must be at least 3 characters long.
  - `lastName` (string, optional): The last name of the captain.
- `email` (string, required): The email address of the captain. Must be a valid email format.
- `password` (string, required): The password for the captain. Must be at least 3 characters long.
- `vehicle`: An object containing:
  - `color` (string, required): The color of the vehicle. Must be at least 3 characters long.
  - `plate` (string, required): The plate number of the vehicle. Must be at least 3 characters long.
  - `capacity` (number, required): The capacity of the vehicle. Must be a number.
  - `vehicleType` (string, required): The type of the vehicle. Must be one of `"car"`, `"motorcycle"`, or `"auto"`.

### Example

```json
{
  "fullName": {
    "firstName": "Alice",
    "lastName": "Smith"
  },
  "email": "alice.smith@example.com",
  "password": "securepassword",
  "vehicle": {
    "color": "Blue",
    "plate": "ABC123",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

## Responses

### Success Response

- Status Code: `201 Created`

- Response Body:

```json
{
  "success": true,
  "message": "Captain registered successfully",
  "captain": {
    "_id": "captain_id",
    "fullName": {
      "firstName": "Alice",
      "lastName": "Smith"
    },
    "email": "alice.smith@example.com",
    "socketId": null,
    "status": "inactive",
    "vehicle": {
      "color": "Blue",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "car"
    },
    "location": {
      "lat": null,
      "lon": null
    }
  },
  "token": "jwt_token"
}
```

## Error Responses

### Validation Errors

- Status Code: `400 Bad Request`

- Response Body:

```json
{
  "success": false,
  "message": "Validation error",
  "errors": [
    {
      "msg": "Invalid email address",
      "param": "email",
      "location": "body"
    },
    {
      "msg": "First name must be at least 3 characters long",
      "param": "fullName.firstName",
      "location": "body"
    },
    {
      "msg": "Password must be at least 3 characters long",
      "param": "password",
      "location": "body"
    },
    {
      "msg": "Vehicle color must be at least 3 characters long",
      "param": "vehicle.color",
      "location": "body"
    },
    {
      "msg": "Vehicle capacity must be a number",
      "param": "vehicle.capacity",
      "location": "body"
    },
    {
      "msg": "Invalid vehicle type",
      "param": "vehicle.vehicleType",
      "location": "body"
    }
  ]
}
```

### Email Already Exists

- Status Code: `400 Bad Request`

- Response Body:

```json
{
  "success": false,
  "message": "Email already exists"
}
```

### Missing Fields

- Status Code: `400 Bad Request`

- Response Body:

```json
{
  "success": false,
  "message": "Please fill in all fields"
}
```

### Internal Server Error

- Status Code: `500 Internal Server Error`

- Response Body:

```json
{
  "success": false,
  "message": "Internal server error"
}
```

## Example Request

```json
curl -X POST http://localhost:3000/api/captains/register \
  -H "Content-Type: application/json" \
  -d '{
    "fullName": {
      "firstName": "Alice",
      "lastName": "Smith"
    },
    "email": "alice.smith@example.com",
    "password": "securepassword",
    "vehicle": {
      "color": "Blue",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "car"
    }
  }'
```

