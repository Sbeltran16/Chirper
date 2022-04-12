const Page = require("../models/page");
const User = require("../models/user");

module.exports = {
    new: newComment
}


function newComment(req, res){
    res.render('comments/new',{title: 'Chirper | Comment'})
}