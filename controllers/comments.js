const Page = require("../models/page");
const User = require("../models/user");
const Comment = require("../models/comment");

module.exports = {
    new: newComment,
    create
    
}


function newComment(req, res){
    res.render('comments/new',{title: 'Chirper | Comment'})
}

function create(req, res){
    const comment = new Comment(req.body);
    comment.save(function(err){
        if (err) return res.render('pages/show',{title: "Chirper | Posts "});
        res.redirect(`/Chirper/:id/post`);
    })
}
