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
  createRecipe,
  getRecipes,
  updateRecipe,
  getRecipeByUserId,
  deleteRecipe,
} = require("../Controllers/recipeController");
const router = express.Router();

router.post("/register", Register);
router.post("/login", Login);
router.put("/update/:id", authMiddleware, updateUser);
router.delete("/delete", authMiddleware, deleteUsers);
router.delete("/delete/:id", authMiddleware, deleteUser);
router.get("/users", authMiddleware, getUsers);
router.post("/recipe", authMiddleware, createRecipe);
router.get("/recipes", authMiddleware, getRecipes);
router.put("/recipe/:recipeId", authMiddleware, updateRecipe);
router.get("/recipe/:userId", authMiddleware, getRecipeByUserId);
router.delete("/recipe/:recipeId", authMiddleware, deleteRecipe);

module.exports = router;
