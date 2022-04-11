const Page = require("../models/page");
const User = require("../models/user")

function newPage(req, res){
    res.render("pages/new", {title: "Create Post"})
}


function index(req, res) {
    Page.find({}, function(err, posts){
        res.render("pages/index", {
            posts,
            title: 'Front Page'
        })
    })
}

function create(req, res){
    const post = new Page(req.body);
    post.save(function(err){
        if (err) return res.render('pages/new',{title: "Create Post"});
        res.redirect(`/Chirper/FrontPage`);
    })
}














module.exports = {
    new: newPage,
    index,
    create
}