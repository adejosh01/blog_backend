import express from "express";
const router = express.Router();
import {
  createPostCategory,
  deletePostCategory,
  getAllPostCategories,
  updatePostCategory,
  getSingleCategory,
} from "../controllers/postCategoriesControllers.js";
import { adminGuard, authGuard } from "../middlewave/authMiddleWare.js";

router
  .route("/")
  .post(authGuard, adminGuard, createPostCategory)
  .get(getAllPostCategories);

router
  .route("/:postCategoryId")
  .get(getSingleCategory)
  .put(authGuard, adminGuard, updatePostCategory)
  .delete(authGuard, adminGuard, deletePostCategory);

export default router;