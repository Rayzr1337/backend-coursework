# Tasks CRUD API

## Setup

```
npm install
npm start
```

Server starts on port 3000.

## Endpoints

| Method | Path | Description |
|--------|------|-------------|
| GET | /tasks | List all tasks |
| GET | /tasks/:id | Get a task |
| POST | /tasks | Create a task |
| PUT | /tasks/:id | Update a task |
| DELETE | /tasks/:id | Delete a task |

Task fields: `title` (string, required), `completed` (boolean).

## Docs

Swagger UI at [/api-docs](http://localhost:3000/api-docs).
