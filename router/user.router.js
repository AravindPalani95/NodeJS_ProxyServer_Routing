const express = require('express');
const router = express.Router();
const userService = require('../service/user.service');

router.get("/getAllUsers",userService.getAllUsers);
router.post("/getUserInfo",userService.getUserInfo);

module.exports = router;