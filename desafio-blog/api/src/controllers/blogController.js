const blogService = require('../services/blogService');

module.exports = {
    ping: (req, res) => {
        res.json({pong:true});
    }
};