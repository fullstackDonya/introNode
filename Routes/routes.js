const express = require("express");
const {
  Register,
  Login,
  updateUser,
  deleteUsers,
  deleteUser,
  getUsers,
} = require("../Controllers/userController");
const authMiddleware = require("../Middleware/authMiddleware");
const {
  createPost,
  getPosts,
  updatePost,
  getPostByUserId,
  deletePost,
} = require("../Controllers/postController");
const router = express.Router();

router.post("/register", Register);
router.post("/login", Login);
router.put("/update/:id", authMiddleware, updateUser);
router.delete("/delete", authMiddleware, deleteUsers);
router.delete("/delete/:id", authMiddleware, deleteUser);
router.get("/users", authMiddleware, getUsers);
router.post("/post", authMiddleware, createPost);
router.get("/posts", authMiddleware, getPosts);
router.put("/post/:postId", authMiddleware, updatePost);
router.get("/post/:userId", authMiddleware, getPostByUserId);
router.delete("/post/:postId", authMiddleware, deletePost);

module.exports = router;
