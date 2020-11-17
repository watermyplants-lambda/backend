# backend


- [ BACKEND Water-My-Plants ](#backend---water-my-plants)
  - [API ><>https://watermyplants35.herokuapp.com/<><](#api--httpsapiwatermyplantsherokuappcom)
  - [Table of Contents](#table-of-contents)
  - [Summary Table of API Endpoints](#summary-table-of-api-endpoints)
    - [POST /auth/register](#post-/auth/register)
    - [POST /auth/login](#post-/auth/login)
    - [GET /api/users](#get-/api/users)
    - [GET /api/users/:id](#get-/api/users/:id)
    - [GET /api/users/:id/plants](#get-/api/users/:id/plants)
    - [DELETE /api/users/:id](#get-/api/users/:id)
    - [GET /api/plants](#get-/api/plants)
    - [GET /api/plants/:id](#get-/api/plants/:id)
    - [POST /api/plants](#post-/api/plants)
    - [DELETE /api/plants/:id](#get-/api/plants/:id)
    - [POST /api/notifications](#post-/api/notifications)


- [Author](#author)

## Summary Table of API Endpoints

| Type   | Endpoints                    | Description                                                  |
| ------ | ---------------------------- | ------------------------------------------------------------ |
| POST   | /api/auth/register               | Register user                                                |
| POST   | /api/auth/login                  | Login                                                        |
| GET    | /api/users                   | get a list of all users if authorized                        |
| GET    | /api/users/:id               | gets a specific user by id                                   |
| GET    | /api/users/:id/plants        | gets all plants associated with a specific user by id        |
| PUT    | /api/users/:id               | update a user's information                                  |
| DELETE | /api/users/:id               | delete a user                                                |
| GET    | /api/plants/                 | get a list of all plants                                     |
| GET    | /api/plants/:id              | get a list of all plants associated with id            |
| POST   | /api/users/:id/plants                 | create a new plant for user           |
| PUT    | /api/plants/:id              | update a plant's information                                 |

### POST api/auth/register

```
{
	"email": "skelator@aol.com", // string
	"firstName": "test", // string
	"lastName": "user", // string
	"password": "password" // string
}
```

`200 ✅`

```
{
  "message": "User sucessfully made."
}
```

`400 ❌`

```
{
    "message": "please provide username and password and the password shoud be alphanumeric"
}
```

### POST api/auth/login

```
{
	"email": "testUser",
	"password": "pass"
}
```

`200 ✅`

```
{
    "message": "Welcome to our API",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjYsImlhdCI6MTU1MjUwOTI0MSwiZXhwIjoxNTUzMTE0MDQxfQ.1TCUGrEyP_jQ2fct48mPiZ7RGSnDezEfyTymvcPN0lg"
}
```

`400 ❌`

```
{
    "message": "Please enter an email and password."
}
```

### GET /api/users

`200 ✅ (AUTHORIZED)`

```
[
    {
        "id": 1,
        "firstName": "Skelator",
        "lastName": "Skelator",
        "email":"skelator@castlegreyskull.com"
        "password": "$2a$12$Q7Py5NG.M5CQHyQGH1Nzm.R0bW2AIpmSW0o3LhYBKDgdgD/TBtgIi",
      
    },
    {
        "id": 2,
        "firstName": "Battle",
        "lastName": "Cat",
        "email":"skelator@castlegreyskull.com"
        "password": "$2a$12$Q7Py5NG.M5CQHyQGH1Nzm.R0bW2AIpmSW0o3LhYBKDgdgD/TBtgIi",
       
    }
]

```

`404 ❌ (NOT AUTHORIZED)`

```
[
    {
    "error": "No users at this moment."
    }
]

```

### GET /api/users/:id

`GET 200 ✅`

```
[{
      "id": 2,
        "firstName": "Battle",
        "lastName": "Cat",
        "email":"skelator@castlegreyskull.com"
        "password": "$2a$12$Q7Py5NG.M5CQHyQGH1Nzm.R0bW2AIpmSW0o3LhYBKDgdgD/TBtgIi",
    }]
```

`404 ❌`

```
{
    "message": "There is no user with that id."
}
```

### GET /api/users/:id/plants

`200 ✅`

```
[
  {
        "id": 1,
        "name": "Agave",
        "species": "succulent",
        "water_schedule": "2020-12-31 11:00",
        "frequency": 1,
        "last_watered": "2020-11-1",
        "image_url": "https://cdn.pixabay.com/photo/2017/04/25/22/28/despaired-2261021__480.jpg"
    },
    {
        "id": 2,
        "name": "Cactus",
        "species": "succulent",
        "water_schedule": "2020-12-30 09:50",
        "frequency": 3,
        "last_watered": "2020-11-1",
        "image_url": "https://cdn.pixabay.com/photo/2017/07/25/22/54/office-2539844__480.jpg"
    },
    {
        "id": 7,
        "name": "Orange",
        "species": "succulent",
        "water_schedule": "2020-12-31 11:00",
        "frequency": 1,
        "last_watered": "2020-11-1",
        "image_url": "https://cdn.pixabay.com/photo/2017/04/25/22/28/despaired-2261021__480.jpg"
    },
    {
        "id": 8,
        "name": "Orange",
        "species": "succulent",
        "water_schedule": "2020-12-31 11:00",
        "frequency": 1,
        "last_watered": "2020-11-1",
        "image_url": "https://cdn.pixabay.com/photo/2017/04/25/22/28/despaired-2261021__480.jpg"
    },
]
```

`404 ❌`

```
{
    "message": "There are no plants with this user"
}
```


### DELETE /api/users/:id/

`200 ✅`

```
{
    "message": "user was deleted"
}
```

`404 ❌`

```
{
    "message": "user could not be deleted"
}
```

### GET /api/plants/

`200 ✅`

```
[
 {
        "id": 1,
        "name": "Agave",
        "species": "succulent",
        "water_schedule": "2020-12-31 11:00",
        "frequency": 1,
        "last_watered": "2020-11-1",
        "image_url": "https://cdn.pixabay.com/photo/2017/04/25/22/28/despaired-2261021__480.jpg"
    },
    {
        "id": 2,
        "name": "Cactus",
        "species": "succulent",
        "water_schedule": "2020-12-30 09:50",
        "frequency": 3,
        "last_watered": "2020-11-1",
        "image_url": "https://cdn.pixabay.com/photo/2017/07/25/22/54/office-2539844__480.jpg"
    },
    {
        "id": 7,
        "name": "Orange",
        "species": "succulent",
        "water_schedule": "2020-12-31 11:00",
        "frequency": 1,
        "last_watered": "2020-11-1",
        "image_url": "https://cdn.pixabay.com/photo/2017/04/25/22/28/despaired-2261021__480.jpg"
    },
    {
        "id": 8,
        "name": "Orange",
        "species": "succulent",
        "water_schedule": "2020-12-31 11:00",
        "frequency": 1,
        "last_watered": "2020-11-1",
        "image_url": "https://cdn.pixabay.com/photo/2017/04/25/22/28/despaired-2261021__480.jpg"
    },
]
```

### GET /api/plants/:id

`200 ✅`

```
[
    {
        "id": 1,
        "name": "Agave",
        "species": "succulent",
        "water_schedule": "2020-12-31 11:00",
        "frequency": 1,
        "last_watered": "2020-11-1",
        "image_url": "https://cdn.pixabay.com/photo/2017/04/25/22/28/despaired-2261021__480.jpg"
    },
]
```

`404 ❌`

```
{
    "message": "There are no plants associated with that id."
}
```

### POST /api/users/id/plants

`201 ✅`

```
[
    {
        "id": 1,
        "name": "Agave",
        "species": "succulent",
        "water_schedule": "2020-12-31 11:00",
        "frequency": 1,
        "last_watered": "2020-11-1",
        "image_url": "https://cdn.pixabay.com/photo/2017/04/25/22/28/despaired-2261021__480.jpg"
    },
]
```

`400 ❌`

```
{
    "message": "Could not save the plant"
}
```

### DELETE /api/plants/:id/

`200 ✅`

```
{
    "message": "plant has been destroyed"
}
```

`404 ❌`

```
{
    "message": "plant has not been destroyed"
}
```






### Author

- Alexandra