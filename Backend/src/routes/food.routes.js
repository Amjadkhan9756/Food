const express = require("express");
const foodController = require("../controllers/food.controller.js");
const authMiddleware = require("../middleware/auth.middleware.js");
const multer = require("multer");

const router = express.Router();

// Multer memory storage
const storage = multer.memoryStorage();
const upload = multer({ storage });

// POST /api/food
router.post(
    "/",
    authMiddleware.authFoodPartnerMiddleware,
    upload.single("video"),
    foodController.createFood
);

// GET /api/food
router.get(
    "/",
    foodController.getFoodItems
);

router.post(
    "/like",
    authMiddleware.authUserMiddleware,
    foodController.likeFood
);

router.get(
    "/save",
    authMiddleware.authUserMiddleware,
    foodController.getSavedFoods
);

router.post(
    "/save",
    authMiddleware.authUserMiddleware,
    foodController.toggleSaveFood
);

module.exports = router;