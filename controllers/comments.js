const Page = require("../models/page");

module.exports = {
    create
}


function create(req, res){
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;

	Page.findById(req.params.id, function(err, posts) {
		posts.comment.push(req.body); 
		posts.save(function(err){
			console.log(posts)
			res.redirect(`/Chirper/${posts._id}/post`)	
		})
	})
}