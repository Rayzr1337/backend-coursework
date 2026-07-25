# Tasks CRUD API
A minimal Express + SQLite task management API.

## Why SQLite?
Zero configuration, no database server needed, stored as a single file.

## Database
The file `tasks.db` is created automatically in the project root on first run.  
The table is created and seeded with sample tasks on startup.

## Setup
npm install

npm start

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

## Example Query
```sql
SELECT * FROM tasks;
```

## Screenshot
![Image](https://i.ibb.co/fY0LTC3S/Screenshot-DBViewer.png)

## Docs

Swagger UI at [/api-docs](http://localhost:3000/api-docs).

