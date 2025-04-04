"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const treeRoutes_1 = __importDefault(require("./treeRoutes"));
const router = (0, express_1.Router)();
router.use("/trees", treeRoutes_1.default); // Route to handle all tree-related operations
exports.default = router;
