import { Router } from 'express';
import treeController from '../controllers/treeController';

const router = Router();

// Routes for tree-related operations
router.get('/', treeController.getAllTrees); // Route to get all trees
router.get('/:id', treeController.getTreeById); // Route to get a tree by ID


export default router;
