import express from "express";
import {
  getAdmin,
  getAdminById,
  addAdmin,
  updateAdmin,
  deleteAdmin,
} from "../controllers/AdminController";

const router = express.Router();

router.get("/admin", getAdmin);
router.get("/admin/:id", getAdminById);
router.post("/admin", addAdmin);
router.patch("/admin/:id", updateAdmin);
router.delete("/admin/:id", deleteAdmin);

export default router;
