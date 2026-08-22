# food_app — Node.js API starter

A minimal Express 5 backend scaffold, structured with the classic **routes → controllers** layout. It's the starting point for a food-ordering-style API.

## Stack

- Node.js + Express 5
- `cors`, `morgan`, `dotenv`
- `nodemon` for local dev reload

## Layout

```
server.js              # app bootstrap, middleware, mount routes
routes/
  testRoutes.js        # GET /api/v1/test/test-user
controllers/
  testcontroller.js    # testUserController
.env                   # PORT (see .env.example)
```

## Run

```bash
npm install
cp .env.example .env   # then edit if needed
npm run server
```

Server boots on `http://localhost:8080` (or `PORT` from `.env`).

## Endpoints

| Method | Path | Response |
|---|---|---|
| GET | `/` | `<h1>welcome</h1>` |
| GET | `/api/v1/test/test-user` | `{ success: true, message: "test user data api" }` |

## Quick check

```bash
curl -s http://localhost:8080/api/v1/test/test-user
```

## Adding a new resource

1. Create `controllers/<name>Controller.js` exporting your handler.
2. Create `routes/<name>Routes.js` and wire the handler to a path.
3. Mount it in `server.js`:
   ```js
   app.use('/api/v1/<name>', require('./routes/<name>Routes'));
   ```
