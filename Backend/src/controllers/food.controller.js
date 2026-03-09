const foodModel = require("../models/food.model.js");
const storageService = require('../services/storage.service.js');
const { v4: uuid } = require("uuid");

async function createFood(req, res) {
    try {
        // 1️⃣ Check foodPartner
        if (!req.foodPartner) {
            return res.status(401).json({ message: "Unauthorized: Food partner not found" });
        }

        // 2️⃣ Check file
        if (!req.file) {
            return res.status(400).json({ message: "Image/video file required" });
        }

        // 3️⃣ Upload file
        const filename = `${uuid()}-${req.file.originalname}`;
        const fileUploadResult = await storageService.uploadFile(req.file.buffer, filename);

        // 4️⃣ Create food item in DB
        const foodItem = await foodModel.create({
            name: req.body.name,
            description: req.body.description,
            video: fileUploadResult.url,
            foodPartner: req.foodPartner._id
        });

        // 5️⃣ Respond correctly
        return res.status(201).json({
            message: "Food created successfully",
            food: foodItem
        });

    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Server error", error: err.message });
    }
}

module.exports = {
    createFood
};