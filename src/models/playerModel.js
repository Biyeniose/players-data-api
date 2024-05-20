const mongoose = require('mongoose')

const playerSchema = mongoose.Schema(
    {
        player_name: {
            type: String,
            required: [true, "Please enter a player name"]
        },
        dob: {
            type: String,
            required: [true, "Please enter a dob"]
        },
        curr_club: {
            type: String,
            required: [true, "Please enter a curr_club"]
        },
        league: {
            type: String,
            required: [true, "Please enter a league name"]
        },
        club_logo: {
            type: String,
            required: false, 
        },
        country: {
            type: String,
            required: [true, "Please enter a country"]
        },
        country_img: {
            type: String,
            required: false, 
        },
        positions: {
            type: Array,
            required: false, 
        },
        value: {
            type: String,
            required: false, 
        },
        player_img: {
            type: String,
            required: false, 
        },
        clubs: {
            type: Array,
            required: false, 
        },
    },
    { collection: 'spain' } 
)


const Player = mongoose.model('spain',playerSchema);

module.exports = Player;







