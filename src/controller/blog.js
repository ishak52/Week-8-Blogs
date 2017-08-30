const {getBlogById, updateBlog, deleteBlog} = require('../model/queries');

function get (req, res) {
  getBlogById(req.params.id, (err, blog) => {
    if (err) {
      console.log(err);
      res.render('404');
    } else {
      res.render('blog', {blog: blog[0], title: blog[0].title, cssPath: '/css/index.css'});
    }
  });
}

function getEditBlog (req, res) {
  getBlogById(req.params.id, (err, blog) => {
    if (err) {
      res.render('404');
    } else {
      // console.log(blog);
      res.render('editBlog', {blog: blog[0], title: 'Edit Blog', cssPath: '/css/add_blog.css'});
    }
  });
}

function post (req, res) {
  updateBlog(req, (err, result) => {
    if (err) {
      res.redirect('/404');
    } else {
      res.redirect('/blogs/' + req.params.id);
    }
  });
}

function deleteBlogById (req, res) {
  deleteBlog(req, (err, result) => {
    if (err) {
      res.redirect('/404');
    } else {
      res.redirect('/admin');
    }
  });
}

module.exports = {
  get,
  getEditBlog,
  post,
  deleteBlogById
};
