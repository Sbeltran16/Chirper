const Page = require("../models/page");

module.exports = {
    create
}


function create(req, res) {
    Page.findById(req.params.id, function(err, comments) {
      // Update req.body to contain user info
      req.body.userId = req.user._id;
      req.body.userName = req.user.name;
      // Add the comment
      comments.comment.push(req.body);
      comments.save(function(err) {
        res.redirect(`/Chirper/${comments._id}/post`);
      });
    });
  }