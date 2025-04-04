"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const treeController_1 = __importDefault(require("../controllers/treeController"));
const router = (0, express_1.Router)();
// Routes for tree-related operations
router.get('/', treeController_1.default.getAllTrees); // Route to get all trees
router.get('/:id', treeController_1.default.getTreeById); // Route to get a tree by ID
exports.default = router;
