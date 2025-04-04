"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var treeRoutes_1 = require("./treeRoutes");
var router = (0, express_1.Router)();
router.use("/trees", treeRoutes_1.default); // Route to handle all tree-related operations
exports.default = router;
