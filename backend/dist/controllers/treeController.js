"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tree_1 = __importDefault(require("../models/tree"));
// Get all trees
const getAllTrees = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const trees = yield tree_1.default.find();
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
});
//Get tree by ID
const getTreeById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tree = yield tree_1.default.findById(req.params.id);
        if (!tree) {
            res.status(404).json({ message: "Tree not found" });
            return;
        }
        res.status(200).json(tree);
    }
    catch (error) {
        res.status(500).json({ message: "Error fetching tree", error });
    }
});
exports.default = {
    getAllTrees,
    getTreeById,
};
