const express = require('express');
const {
    createPlayer,
    getPlayer,
    getAllPlayers,
    updatePlayer,
    deletePlayer,
    getEnglishPlayers,
    getPlayerByName,
    getRandomPlayersFromEngland,
    searchPlayersByName,
} = require('../controllers/playerController');

const {
    searchENG_PlayerByName,
    searchESP_PlayerByName,
    searchGER_PlayerByName,
    searchITA_PlayerByName,
    searchFR_PlayerByName
} = require('../controllers/searchbyLeague');

const router = express.Router()

router.get("/players/get_name", getPlayerByName)

router.get("/players/search/eng", searchENG_PlayerByName);
router.get("/players/search/esp", searchESP_PlayerByName);
router.get("/players/search/ger", searchGER_PlayerByName);
router.get("/players/search/ita", searchITA_PlayerByName);
router.get("/players/search/fra", searchFR_PlayerByName);

router.get("/england/rand", getRandomPlayersFromEngland);



router.get("/england/:id", getEnglishPlayers) // get english player by id

router.get("/spain/:id", getPlayer)



router.post('/:id', createPlayer)

router.put("/:id", updatePlayer)

//router.delete("/:id", deletePlayer)

router.get("/", getAllPlayers)




module.exports = router;

