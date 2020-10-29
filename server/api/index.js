const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
	res.send("apiiii");
});
router.use("/artist", require("./artist"));
router.use("/album", require("./album"));
router.use("/playlist", require("./playlist"));
router.use("/song", require("./song"));

module.exports = router;
