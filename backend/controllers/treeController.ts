import { Request, Response } from "express";
import Tree from "../models/tree";

// Get all trees
const getAllTrees = async (req: Request, res: Response): Promise<void> => {
  try {
    const trees = await Tree.find();
    console.log("Fetched trees:", trees);
    if (!trees || trees.length === 0) {
      res.status(404).json({ message: "No trees found" });
      return;
    }

    res.status(200).json(trees);
  } catch (error: any) {
    res.status(500).json({ message: "Error fetching trees", error });
  }
};

//Get tree by ID
const getTreeById = async (req: Request, res: Response): Promise<void> => {
  try {
    const tree = await Tree.findById(req.params.id);
    if (!tree) {
      res.status(404).json({ message: "Tree not found" });
      return;
    }
    res.status(200).json(tree);
  } catch (error: any) {
    res.status(500).json({ message: "Error fetching tree", error });
  }
};

export default {
  getAllTrees,
  getTreeById,
}
