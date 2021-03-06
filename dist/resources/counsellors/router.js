"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = require("./controller");
const router = (0, express_1.Router)();
router.get("/", controller_1.getCounsellors);
router.get("/:id", controller_1.getById);
router.post("/", controller_1.addCounsellor);
router.patch("/:id", controller_1.updateCounsellor);
exports.default = router;
