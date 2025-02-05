
# Before you start

## To start the project

### run "go mod download"

## .env file

### Create a .env file in the root of your project

#### follow this format

PORT =
DB_PASSWORD=
DB_HOST=
DB_USER=
DB_NAME=
DB_PORT=
DATABASE_URL=postgresql://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}

## In case you have a docker installed on your machine

### run "docker-compose up" to start a docker container for this project

## To start the main entry point

### run "go run main.go"

## Api endpoint to query

### Create a user with all the fields(name, email and password)

#### POST  localhost://8080/api/waitlist

### create a user with ordinary email

#### POST  localhost://8080/api/waitlist/user

### update user detail as email is unique and validation is done if email already exist

#### PUT  localhost://8080/api/waitlist/user

### get all users details

#### GET   localhost://8080/api/waitlist

## Database Type

### Postgres

#### You can manually set your postgres configuration in .env file if you have postgresql installed on your machine

## Request body parameters

### Name and Email is required
