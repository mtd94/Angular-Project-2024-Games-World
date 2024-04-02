const gameModel = require('../models/gameModel');



function getGames(req, res, next) {
    gameModel.find()
       .then(games => res.json(games))
       .catch(next);
}

function getGame(req, res, next) {
    const { gameId } = req.params;
    gameModel.findById(gameId)
       .then(game => res.json(game))
       .catch(next);
}

function createGame(req, res, next) {
    const { name,imgUrl,description,year,genre } = req.body;
    const { _id: userId } = req.user;
    gameModel.create({ name,imgUrl,description,year,genre, userId });
    res.status(201).json({ message: 'Game created' });
}

function editGame (req, res, next) {
    const { gameId } = req.params;
    const { name,imgUrl,description,year,genre } = req.body;
    gameModel.findByIdAndUpdate(gameId, { name,imgUrl,description,year,genre }, { new: true })
       .then(game => res.json(game))
       .catch(next);
}


function deleteGame(req, res, next) {
    const gameId = req.params.gameId;
    gameModel.findByIdAndDelete(gameId)
       .then(() => res.status(200).json({ message: 'Game deleted' }))
       .catch(next);
}

module.exports = {
    getGames,
    getGame,
    createGame,
    editGame,
    deleteGame,
}