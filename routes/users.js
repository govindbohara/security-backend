const express = require("express");
const router = express.Router();

const { createAccount } = require("../controller/userController");

/* GET users listing. */
router.post("/user", createAccount);

module.exports = router;
