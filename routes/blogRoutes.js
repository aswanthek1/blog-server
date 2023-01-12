const express = require('express')
const router = express()
const { addBlog, getBlog, getAllBlogs } = require('../controllers/blogController')

router.post('/addBlog', addBlog)
router.get('/getBlog/:id', getBlog)
router.get('/allBlog', getAllBlogs) 





module.exports = router