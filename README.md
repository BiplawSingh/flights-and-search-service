# Welcome to Flights Service

## Before we start, here's the link to the other three services
- [Air Ticket Booking Service](https://github.com/BiplawSingh/airticket-booking-service)
- [Auth Service](https://github.com/BiplawSingh/auth-service)
- [Reminder Service](https://github.com/BiplawSingh/reminder-service)


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
- once you've setup your database config as listed above, go to the src folder from your terminal and execute `npx sequelize db:create` and then execute `npx sequelize db:migrate`


## Database Design

### Entities

  - Airplane
  - Flight
  - Airport
  - City

### Constraints

  - A flight belongs to an airplane, but one airplane can be used in multiple flights.
  - A city can have many airports, but each airport belongs to a single city.
  - One airport can have many flights, but each flight belongs to a single airport.

### Tables

  - City: id, name, created_at, updated_at
  - Airport: id, name, address, city_id, created_at, updated_at
      - Relationship: City has many airports and Airport belongs to a city (one to many)
  ```
  npx sequelize model: generate --name Airport --attributes
  name:String,address:String,cityId:integer

  ```
  
