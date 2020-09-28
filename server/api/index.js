const { Router } = require("express");

const router = Router();

// router.use('/songs', require('./song'));
router.use("/album", require("./album"));
router.use("/artist", require("./artist"));

module.exports = router;
