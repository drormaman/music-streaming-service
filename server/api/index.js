const { Router } = require("express");

const router = Router();

// router.use('/songs', require('./song'));
// router.use('/albums', require('./album'));
router.use("/artists", require("./artists"));

module.exports = router;
