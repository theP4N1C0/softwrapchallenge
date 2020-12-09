## Description

This backend is a simple crud developed in [Node JS](https://nodejs.org/en/).

## Installation

```bash
$ npm install
```

## Environment exemple

```bash
DB_USER=exemple
DB_PASSWRD=exemple

# You need go to mongoDB (https://www.mongodb.com/) and create a simple Cluester.
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

## Database and Secret JWT
```

## Routes

```bash
Users

http://localhost:3000/users

#GET: http://localhost:3000/user
#DELETE: http://localhost:3000/user/:id
#UPDATE: http://localhost:3000/user/:id
#POST: http://localhost:3000/user
{
	"name": "Kevin",
	"age": 20,
	"status": "Solteiro",
	"cpf": "44444444441",
	"city": "São Sebastião",
	"state": "São Paulo"
}
```