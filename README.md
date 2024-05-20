# Football Players Data API with MongoDB based Documents

API endpoints allow you request data of specific players in the most popular leagues. 
Built on top of Node.js, Express and MongoDB Atlas, data is to be continously updated by scraping https://www.transfermarkt.com

Here is what a sample response for a player looks like:

```
[
  {
    "_id": 820374,
    "player_name": "Kobbie Mainoo",
    "dob": "2005-04-19",
    "curr_club": "Man Utd",
    "club_logo": "https://tmssl.akamaized.net/images/wappen/big/985.png?lm=1457975903",
    "exp_date": "2027-06-30",
    "league": "England",
    "league_name": "Premier League",
    "league_img": "https://tmssl.akamaized.net/images/flagge/medium/189.png?lm=1520611569",
    "country": "England",
    "country_img": "https://tmssl.akamaized.net/images/flagge/medium/189.png?lm=1520611569",
    "positions": [
      "Central Midfield",
      "Attacking Midfield",
      "Defensive Midfield"
    ],
    "value": "€35.00m",
    "player_img": "https://img.a.transfermarkt.technology/portrait/header/820374-1692706750.jpg?lm=1",
    "team_id": 985,
    "name_spell": "Kobbie Mainoo"
  }
]
```
Make sure you include your own connection string in a .env file
