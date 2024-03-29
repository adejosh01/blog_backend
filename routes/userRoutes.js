import express from "express";
const router = express.Router();
import { authGuard, adminGuard } from "../middlewave/authMiddleWare.js";

import {
    registerUser, 
    loginUser,
    userProfile,
    updateProfile,
    updateProfilePicture, 
    getAllUsers,
    deleteUser,
} from "../controllers/userControllers.js";

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile", authGuard, userProfile);
router.put("/updateProfile", authGuard, updateProfile);
router.put("/updateProfilePicture", authGuard, updateProfilePicture);
router.get("/", authGuard, adminGuard, getAllUsers);
router.delete("/:userId", authGuard, adminGuard, deleteUser);

export default router;