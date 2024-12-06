# User Registration Endpoint

## Endpoint

`POST /api/users/register`

## Description

This endpoint is used to register a new user. It validates the input data, checks if the user already exists, hashes the password, and creates a new user in the database.

## Request Body

The request body should be a JSON object with the following fields:

- `fullName`: An object containing:
  - `firstName` (string, required): The first name of the user. Must be at least 3 characters long.
  - `lastName` (string, optional): The last name of the user.
- `email` (string, required): The email address of the user. Must be a valid email format.
- `password` (string, required): The password for the user. Must be at least 6 characters long.

Example:

```json
{
  "fullName": {
    "firstName": "John",
    "lastName": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}
```

## Response 

### Success Response
* **Status code**: `201 Created`
* **Response Body**: 

```json
{
  "success": true,
  "message": "Account created successfully",
  "user": {
    "user": {
      "_id": "user_id",
      "fullName": {
        "firstName": "John",
        "lastName": "Doe"
      },
      "email": "john.doe@example.com",
      "password": "hashed_password",
      "socketId": null
    },
    "token": "jwt_token"
  }
}
```

### Error responses - Invalid request data
* **Status Code**: `400 Bad Request`
* **Response Body**:


```json
{
  "success": false,
  "message": "Something went wrong",
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
      "msg": "Password must be at least 6 characters long",
      "param": "password",
      "location": "body"
    }
  ]
}
```

### User already exists
* **Status Code**: `400 Bad Request`
* **Response Body**:

```json
{
  "success": false,
  "message": "Email already exists"
}
```

### Missing fields
* **Status Code**: `400 Bad Request`
* **Response Body**:

```json
{
  "success": false,
  "message": "Please fill in all fields"
}
```

## Example request

```json
curl -X POST http://localhost:3000/api/users/register \
  -H "Content-Type: application/json" \
  -d '{
    "fullName": {
      "firstName": "John",
      "lastName": "Doe"
    },
    "email": "john.doe@example.com",
    "password": "password123"
  }'
```
