const express = require("express");
const foodContoller = require("../controllers/food.controller.js");
const authMiddleware = require("../middleware/auth.middleware.js");
const multer = require("multer");

const router = express.Router();

// Multer memory storage
const storage = multer.memoryStorage();
const upload = multer({ storage });

// POST /api/food [protected, with image upload]
router.post(
    "/",
    authMiddleware.authFoodPartnerMiddleware,
    upload.single("video"),  // file key must match frontend
    foodContoller.createFood
);

module.exports = router;