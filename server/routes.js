const router = require("express").Router();
const ip = require("ip");

function hello(req, res) {
    res.send('Hello ' + req.params.name + ' from IP: ' + ip.address() + '\n');
}
router.get('/name/:name', hello)

module.exports = router;