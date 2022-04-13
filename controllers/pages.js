const Page = require("../models/page");
const User = require("../models/user");


module.exports = {
    new: newPage,
    index,
    create,
    show,
    delete: deletePost,
}


function newPage(req, res){
    res.render("pages/new", {title: "Create Post"})
}


function index(req, res) {
    Page.find({}, function(err, posts){
        res.render("pages/index", {
            posts,
            title: "Chirper | Home"
        })
    })
}

function create(req, res){
    const post = new Page(req.body);
    post.save(function(err){
        if (err) return res.render('pages/new',{title: "Create Post"});
        res.redirect(`/Chirper/home`);
    })
}

function show(req, res){
    Page.findById(req.params.id, function(err, posts){
        Page.find({comment: posts._id},function (err, comments){
            res.render('pages/show', {
                posts,
                comments,
                title: 'Chirper | Posts'
            })  
        })
    })
}

function deletePost(req, res) {
    Page.findOneAndDelete(
      {_id: req.params.id, userRecommending: req.user}, function(err) {
        res.redirect('/Chirper/home');
      }
    );
  }