const blogModel = require("../models/blogModel");
const mongoose = require("mongoose");

module.exports = {
  createBlog: (tittle, content) => {
    console.log(tittle, content);
    try {
      return new Promise(async (resolve, reject) => {
        await new blogModel({ tittle, content }).save().then((response) => {
          resolve(response);
        });
      });
    } catch (error) {}
  },

  ///getblog
  getBlog: (id) => {
    try {
      return new Promise(async (req, res) => {
        const blogId = mongoose.Types.ObjectId(id);
        await blogModel.findOne({ _id: blogId }).then((response) => {
          resolve(response);
        });
      });
    } catch (error) {}
  },

  ///get all blogs
  getAllBlogs: () => {
    try {
      return new Promise(async (resolve, reject) => {
        await blogModel.find().then((response) => {
          resolve(response);
        });
      });
    } catch (error) {}
  },
};
