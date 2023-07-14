# Welcome to Flights Service

## Project Setup
- clone the project on your local
- execute `npm install` on the root directory of downloaded project
- create an `.env` file in root directory and add the following environment variables
    - `PORT=3000`
- inside the `src/config` folder, create a new file `config.json` and add the following piece of json

```
{
  "development": {
    "username": <database_username>,
    "password": <database_password>,
    "database": "Flights_Search_Database_Dev",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

```

- once you've setup your database config as listed above, go to the src folder from your terminal and execute `npx sequelize db:create`