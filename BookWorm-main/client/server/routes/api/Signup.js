const express = require("express");
const router = express.Router();
const { register } = require("../controllers/AuthenticationController");

router.get("/", register);

module.exports = router;