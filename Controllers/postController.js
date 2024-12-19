const Post = require("../Models/postModel");

const createPost = async (req, res) => {
  const authorId = req.user.id; 
  
  try {
    const post = new Post({
      ...req.body,
      author: authorId,
    });

    await post.save();
    res.status(201).send(post);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

const getPosts = async (req, res) => {
  try {
    const filter = {};

    if (req.query.title) {
      filter.title = { $regex: req.query.title, $options: "i" };
    }
    if (req.query.category) {
      filter.category = { $regex: req.query.category, $options: "i" };
    }
    if (req.query.location) {
      filter.location = { $regex: req.query.location, $options: "i" };
    }
    if (req.query.priceMin || req.query.priceMax) {
      filter.price = {};
      if (req.query.priceMin) filter.price.$gte = parseFloat(req.query.priceMin);
      if (req.query.priceMax) filter.price.$lte = parseFloat(req.query.priceMax);
    }

    const posts = await Post.find(filter).populate("author", "username email");

    res.status(200).send(posts);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

const updatePost = async (req, res) => {
  try {
    const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!post) {
      return res.status(404).send({ error: "Annonce introuvable" });
    }
    res.status(200).send(post);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const getPostById = async (req, res) => {
  console.log(req.params.id);
  try {
    const post = await Post.findById(req.params.id).populate("author", "username email");
    console.log(post);
    
    
    if (!post) {
      return res.status(404).send({ error: "Annonce introuvable" });
    }
    res.status(200).send(post);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const getPostByUserId = async (req, res) => {
  try {
    const posts = await Post.find({ author: req.params.userId }).populate(
      "author",
      "username email"
    );
    if (posts.length === 0) {
      return res.status(404).send({ error: "Aucune annonce trouvée pour cet utilisateur" });
    }
    res.status(200).send(posts);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const deletePost = async (req, res) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.id);
    if (!post) {
      return res.status(404).send({ error: "Annonce introuvable" });
    }
    res.status(200).send({ message: "Annonce supprimée avec succès" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

module.exports = {
  createPost,
  getPosts,
  updatePost,
  getPostByUserId,
  deletePost,
  getPostById,
};
