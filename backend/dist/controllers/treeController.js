"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tree_1 = __importDefault(require("../models/tree"));
// Get all trees
const getAllTrees = async (req, res) => {
    try {
        const trees = await tree_1.default.find();
        console.log("Fetched trees:", trees);
        if (!trees || trees.length === 0) {
            res.status(404).json({ message: "No trees found" });
            return;
        }
        res.status(200).json(trees);
    }
    catch (error) {
        res.status(500).json({ message: "Error fetching trees", error });
    }
};
//Get tree by ID
const getTreeById = async (req, res) => {
    try {
        const tree = await tree_1.default.findById(req.params.id);
        if (!tree) {
            res.status(404).json({ message: "Tree not found" });
            return;
        }
        res.status(200).json(tree);
    }
    catch (error) {
        res.status(500).json({ message: "Error fetching tree", error });
    }
};
exports.default = {
    getAllTrees,
    getTreeById,
};
