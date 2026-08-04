# Tasks API

A simple RESTful API for managing tasks built with **Node.js**, **Express**, and **PostgreSQL**.

## Features

* Create, read, update, and delete tasks
* PostgreSQL database
* Dockerized PostgreSQL
* Swagger API documentation
* Health check endpoint

## Requirements

* Node.js
* Docker Desktop
* npm

## Installation

Clone the repository and install dependencies:

```bash
npm install
```

Create a `.env` file in the project root:

```env
DATABASE_URL=postgres://postgres:dev@localhost:5432/tasks
```

Start PostgreSQL using Docker:

```bash
docker run \
  --name taskdb \
  -e POSTGRES_PASSWORD=dev \
  -e POSTGRES_DB=tasks \
  -p 5432:5432 \
  -v taskdata:/var/lib/postgresql/data \
  -d postgres:17
```

Start the server:

```bash
node server.js
```

On first startup, the application automatically:

* Creates the `tasks` table if it does not exist.
* Seeds the database with three sample tasks if the table is empty.

## API Endpoints

| Method | Endpoint     | Description      |
| ------ | ------------ | ---------------- |
| GET    | `/tasks`     | Get all tasks    |
| GET    | `/tasks/:id` | Get a task by ID |
| POST   | `/tasks`     | Create a task    |
| PUT    | `/tasks/:id` | Update a task    |
| DELETE | `/tasks/:id` | Delete a task    |
| GET    | `/status`    | Health check     |

## Swagger Documentation

After starting the server, visit:

```
http://localhost:3000/docs
```

## Example Request

```http
POST /tasks
```

```json
{
  "title": "Study PostgreSQL",
  "completed": false
}
```

## Project Structure

```
controllers/
models/
routes/
server.js
```

