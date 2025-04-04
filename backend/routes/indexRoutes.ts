import { Router } from "express"
import treeRoutes from "./treeRoutes"

const router = Router();

router.use("/trees", treeRoutes); // Route to handle all tree-related operations

export default router;
