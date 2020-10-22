# back-end

deployed at
https://salty-atoll-28049.herokuapp.com/

### USERS

Type | Endpoints | Description
-----|-----------|------------
GET | /api/users/ | Get all users
GET | /api/users/:id | Find user by ID
POST | /api/auth/register | Register new users
POST | /api/auth/login | Login users
PUT | /api/auth/update | Update users
DELETE | /api/auth/delete | Delete user

### USER SCHEMA

Name | Type | Required
-----|------|---------
Username | String | Yes
Password | String | Yes

### SONGS

Type | Endpoints | Description
-----|-----------|------------
POST | /api/music/favs | Save a favorite song
GET | /api/music/:id/favs | Get a users favorite song
POST | /api/music/singleTrack | Get recommendations from a single song
DELETE | /api/music/:id/favs/:track_id | delete song from favorite songs list
POST | /api/music/singleTrack/data | Retrive songs audio chart

### SONGS SCHEMA 

Name | Type | Required
-----|------|---------
track_id | String | Yes
track_name | String | Yes
artist_name | String | Yes

### REGISTER NEW USERS

```
{
  "username": "username",
  "password": "password
}
```

### LOGIN

```
{
  "username": "username",
  "password": "password
}
```

### SAVE FAVORITE SONG

```
{
    "song_id": 4,
    "user_id": 1,
    "full_track_id": "5CujCfToNKPYEZt12WnxVY"
}
```

### USE SINGLE TRACK FOR SONG SUGGESTIONS

```
{
  "track_id": "5CujCfToNKPYEZt12WnxVY"
}
```
