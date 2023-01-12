const blogHelper = require("../helpers/blogHelper");

module.exports = {
  ///add new blog
  addBlog: async (req, res) => {
    try {
      const { tittle, content, author } = req.body;
      if (!tittle || !content || !author) {
        res.json({ message: "Need to fill all fields" });
        throw new Error("All fields are mentatory");
      } else {
        blogHelper.createBlog(tittle, content, author).then((response) => {
          res.status(200).json({ message: "Blog added successfully" });
        });
      }
    } catch (error) {
      res.status(500).json("error found", error);
    }
  },

  ///get blog
  getBlog: async (req, res) => {
    try {
      blogHelper
        .getBlog(req.params.id)
        .then((blog) => {
          res.status(200).json(blog);
        })
        .catch((error) => console.log(error));
    } catch (error) {
      res.status(500).json("error found", error);
    }
  },

  //getAllBlogs
  getAllBlogs: async (req, res) => {
    try {
      blogHelper
        .getAllBlog()
        .then((blogs) => {
          res.status(200).json(blogs);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
      res.status(500).json("error found", error);
    }
  },
};
