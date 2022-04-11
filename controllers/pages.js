const Page = require("../models/page");
const User = require("../models/user")

function newPage(req, res){
    res.render("pages/new", {title: "Create Post"})
}


function index(req, res) {
    console.log(req.user, '<-- req.user')
    Page.find({}, function(err, posts){
        res.render("pages/index", {
            posts,
            title: 'Front Page'
        })
    })
}














module.exports = {
    new: newPage,
    index
}