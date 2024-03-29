const blogModel = require("../models/blogModel");
const mongoose = require("mongoose");

module.exports = {
  ///create blog
  createBlog: (tittle, content, author) => {
    try {
      return new Promise(async (resolve, reject) => {
        await new blogModel({ tittle, content, author })
          .save()
          .then((response) => {
            resolve(response);
          });
      });
    } catch (error) {
      throw new Error('Error found')
    }
  },

  ///get blog
  getBlog: (id) => {
    try {
      if(id?.length !== 24) {
        throw new Error("Invalid Id")
      }
      return new Promise(async (resolve, reject) => {
        const blogId = mongoose.Types.ObjectId(id);
        await blogModel.findOne({ _id: blogId }).then((response) => {
          resolve(response);
        }).catch((error) => {
          reject(error)
        });
      });
    } catch (error) {
      throw new Error('Error found')
    }
  },

  ///get all blogs
  getAllBlog: () => {
    try {
      return new Promise(async (resolve, reject) => {
        await blogModel.find().then((response) => {
          resolve(response);
        });
      });
    } catch (error) {
      throw new Error('Error found')
    }
  },

  ///paginatedBlogs
  paginatedBlogs: async(limit, skip) => {
    try {
      const totalCount = await blogModel.count({})
      return new Promise(async (resolve, reject) => {
        await blogModel
          .find()
          .skip(skip)
          .limit(limit)
          .then((response) => {
            resolve({data:response, count:totalCount, totalPage: Math.ceil(totalCount / limit)});
          });
      });
    } catch (error) {
      throw new Error('Error found')
    }
  },
};
