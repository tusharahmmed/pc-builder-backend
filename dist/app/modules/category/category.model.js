"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Category = void 0;
const mongoose_1 = require("mongoose");
const productSchama = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
});
exports.Category = (0, mongoose_1.model)("Category", productSchama);
