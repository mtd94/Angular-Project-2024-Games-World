const router = require('express').Router();
const {auth} = require('../utils');
const {gameController} = require('../controllers');


router.get('/',gameController.getGames);

router.get('/:gameId',gameController.getGame);

router.post('/',auth(),gameController.createGame);

router.put('/:gameId',auth(),gameController.editGame);

router.delete('/:gameId',auth(),gameController.deleteGame);





module.exports = router;