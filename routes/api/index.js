const router = require("express").Router();
const articleRoutes = require("./article");

// Book routes
router.use("/books", articleRoutes);

module.exports = router;
