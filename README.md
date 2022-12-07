SUMMARY - A hub for the top 20 video games and what players think.

## Tech Usage

**CSS Framework:**

**Stack:** MongoDB, Express, NodeJS

**Service-Side Rendering:** JSX

**Node Modules**:

## Routes

| Method | Path | Purpose |
| ------ | ------------------------------------- | ----------------------------- |
| GET | `/` | The home page |
| GET | `/videogames` | Index page listing all video games |
| GET | `/videogames/new` | New form for a video game |
| POST | `/videogames` | Create a new video game |
| GET | `/videogames/:id` | Show one video game in detail (Associated reviews, new review form, delete review button) |
| GET | `/videogames/:id/edit` | Edit form for a video game |
| PUT | `/videogames/:id` | Make changes to existing video game |
| DELETE | `/videogames/:id` | Delete a video game |
| POST | `/videogames/:id/review` | Add review to a video game |
| DELETE | `/videogames/:id/review/:reviewId` | Delete a review |

## Database

**videogames**
| Field | Type |
| ---------- | ------------ |
| _id | Object ID |
| gameTitle | String |
| pic | String |
| rating | Number |
| releaseDate | String |