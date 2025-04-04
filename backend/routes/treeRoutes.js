"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var treeController_1 = require("../controllers/treeController");
var router = (0, express_1.Router)();
// Routes for tree-related operations
router.get('/', treeController_1.default.getAllTrees); // Route to get all trees
router.get('/:id', treeController_1.default.getTreeById); // Route to get a tree by ID
exports.default = router;
