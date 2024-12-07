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

- **Status code**: `201 Created`
- **Response Body**:

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

- **Status Code**: `400 Bad Request`
- **Response Body**:

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

- **Status Code**: `400 Bad Request`
- **Response Body**:

```json
{
  "success": false,
  "message": "Email already exists"
}
```

### Missing fields

- **Status Code**: `400 Bad Request`
- **Response Body**:

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

---

# User Login Endpoint

## Endpoint

`POST /api/users/login`

## Description

This endpoint allows a registered user to log in by providing their email and password. It validates the credentials and returns an authentication token upon successful login.

## Request Body

The request body should be a JSON object containing the following fields:

- `email` (string, required): The user's email address. Must be a valid email format.
- `password` (string, required): The user's password. Must be at least 3 characters long.

### Example

```json
{
  "email": "jane.doe@example.com",
  "password": "securepassword"
}
```

## Responses

### Success Response

- **Status Code**: `200 OK`
- **Response Body**:

```json
{
  "success": true,
  "message": "Login successful",
  "user": {
    "user": {
      "_id": "user_id",
      "fullName": {
        "firstName": "Jane",
        "lastName": "Doe"
      },
      "email": "jane.doe@example.com",
      "password": "hashed_password",
      "socketId": null
    },
    "token": "jwt_token"
  }
}
```

### Error Responses - Validation Errors

- **Status Code**: `400 Bad Request`
- **Response Body**:

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
      "msg": "Invalid Password",
      "param": "password",
      "location": "body"
    }
  ]
}
```

### Invalid Credentials

- **Status Code**: `401 Unauthorized`
- _Response Body_:

```json
{
  "success": false,
  "message": "Invalid email or password"
}
```

## Example Request

```json
curl -X POST http://localhost:3000/api/users/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "jane.doe@example.com",
    "password": "securepassword"
  }'
```

# User Profile Endpoint

**Endpoint**
`GET /api/users/profile`

## Description

This endpoint retrieves the profile information of the authenticated user. The user must be authenticated with a valid JWT token.

## Authorization

This endpoint requires a valid JWT token in the `Authorization` header or as a cookie.

## Request Headers

- `Authorization: Bearer <JWT_TOKEN>`

## Request Body

No request body is required.

## Responses

### Success Response

- Status Code: `200 OK`

- Response Body:

```json
{
  "success": true,
  "message": "User profile fetched successfully",
  "user": {
    "_id": "user_id",
    "fullName": {
      "firstName": "Jane",
      "lastName": "Doe"
    },
    "email": "jane.doe@example.com",
    "socketId": null
  }
}
```

### Error Responses

- Status Code: `401 Unauthorized`

  - Unauthorized Access:

  ```json
  {
    "success": false,
    "message": "Unauthorized access"
  }
  ```

- Status Code: `500 Internal Server Error`

  - Internal Server Error:

  ```json
  {
    "success": false,
    "message": "Internal server error",
    "error": "Error message"
  }
  ```

## User Logout Endpoint

**Endpoint**

`GET /api/users/logout`

**Description**

This endpoint logs out the authenticated user by invalidating their JWT token. It adds the token to a blacklist and clears the token cookie on the client side.

**Authorization**

This endpoint requires a valid JWT token in the `Authorization` header or as a cookie.

**Request Headers**

- `Authorization`: `Bearer <JWT_TOKEN>`

**Request Body**

No request body is required.

**Success Response**

- **Status Code**: `200 OK`
- **Response Body**:

  ```json
  {
    "success": true,
    "message": "Logout successful"
  }
  ```

### Error Responses

- Status Code: `401 Unauthorized`

  - Unauthorized Access:

```json
{
  "success": false,
  "message": "Unauthorized access"
}
```

- Status Code: `500 Internal Server Error`

  - Internal Server Error:

```json
{
  "success": false,
  "message": "Internal server error",
  "error": "Error message"
}
```
