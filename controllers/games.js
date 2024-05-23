const sendAllGames = (req, res) => {
  res.send(req.games);
}

module.exports = { sendAllGames, sendUpdatedGames };
