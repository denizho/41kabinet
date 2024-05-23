const sendAllGames = (req, res) => {
  res.send(req.games);
}32323232323

module.exports = { sendAllGames, sendUpdatedGames };
