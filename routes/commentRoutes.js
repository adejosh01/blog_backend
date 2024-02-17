import express from "express";
const router = express.Router();
import {
  createComment,
  deleteComment,
  getAllComments,
  updateComment,
} from "../controllers/commentControllers.js";
import { adminGuard, authGuard } from "../middlewave/authMiddleWare.js";

router
  .route("/")
  .post(authGuard, createComment)
  .get(authGuard, adminGuard, getAllComments);
router
  .route("/:commentId")
  .put(authGuard, updateComment)
  .delete(authGuard, deleteComment);


export default router;