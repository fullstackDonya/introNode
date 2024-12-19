const express = require("express");
const {
  Register,
  Login,
  updateUser,
  deleteUsers,
  deleteUser,
  getUsers,
  getUser,
} = require("../Controllers/userController");
const authMiddleware = require("../Middleware/authMiddleware");
const {
  createPost,
  getPosts,
  updatePost,
  getPostByUserId,
  deletePost,
  getPostById,
} = require("../Controllers/postController");
const router = express.Router();

router.post("/register", Register);
router.post("/login", Login);
router.put("/update/:id", authMiddleware, updateUser);
router.delete("/delete", authMiddleware, deleteUsers);
router.delete("/delete/:id", authMiddleware, deleteUser);
router.get("/users", authMiddleware, getUsers);
router.get("/user/:id", authMiddleware, getUser);
router.get("/post/user/:userId", authMiddleware, getPostByUserId);
router.post("/post", authMiddleware, createPost);
router.get("/posts", authMiddleware, getPosts);
router.put("/post/:id", authMiddleware, updatePost);
router.get("/post/:id", authMiddleware, getPostById);
router.delete("/post/:id", authMiddleware, deletePost);

module.exports = router;
