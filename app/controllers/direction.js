const mongoose = require('mongoose');
const Direction = mongoose.model('Direction');

module.exports.saveDirection = function(req, res) {
  if (!req.payload._id) {
    res.status(401).json({
      "message" : "UnauthorizedError: private profile"
    });
  } else {
	const direction = new Direction({
		direction: req.body,
		user: req.payload._id
	 });
    direction.save((err) => {
		if(err) {
			return res.status(500);
			res.json({
				"message" : "Internal server error"
			});
		}
		res.status(200);
		res.json({
			"message" : "Created",
			"direction": direction
		});
	 });
  }

};