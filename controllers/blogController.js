const blogHelper = require("../helpers/blogHelper");

module.exports = {
  ///add new blog
  addBlog: async (req, res) => {
    try {
      const { tittle, content } = req.body;
      if (!tittle || !content) {
        res.json({ message: "Need to fill all fields" });
        throw new Error("All fields are mentatory");
      } else {
        blogHelper.createBlog(tittle, content).then((response) => {
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
      blogHelper.getBlog(req.params.id).then((blog) => {
        console.log(blog);
      });
    } catch (error) {
      res.status(500).json("error found", error);
    }
  },

  //getAllBlogs
  getAllBlogs: async (req, res) => {
    try {
      blogHelper.getAllBlogs().then((blogs) => {
        console.log(blogs);
      });
    } catch (error) {
      res.status(500).json("error found", error);
    }
  },
};
