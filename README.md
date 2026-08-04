# Tasks API

A simple RESTful API for managing tasks built with **Node.js**, **Express**, and **PostgreSQL**. The application uses Docker Compose to run both the API and the PostgreSQL database.

## Requirements

* Docker Desktop
* Node.js (only needed for local development outside Docker)

## Setup

1. Copy `.env.example` to `.env`.
2. Update the environment variables if needed.

Example:

```env
DATABASE_URL=postgres://postgres:dev@db:5432/tasks
```

## Run

Start the API and PostgreSQL with a single command:

```bash
docker compose up
```

The application will automatically create the database table and seed it with sample tasks if the database is empty.

## API Endpoints

| Method | Endpoint     | Description      |
| ------ | ------------ | ---------------- |
| GET    | `/tasks`     | Get all tasks    |
| GET    | `/tasks/:id` | Get a task by ID |
| POST   | `/tasks`     | Create a task    |
| PUT    | `/tasks/:id` | Update a task    |
| DELETE | `/tasks/:id` | Delete a task    |
| GET    | `/status`    | Health check     |

## Screenshots

[Screenshot 1](https://res.cloudinary.com/cr01p5h3/image/upload/v1785882098/SCREENSHOT2_pltbrc.png)

[Screenshot 2](https://res.cloudinary.com/cr01p5h3/image/upload/v1785882103/SCREENSHOT3_lispp1.png)

## Swagger

After the application starts, open:

```text
http://localhost:3000/docs
```

