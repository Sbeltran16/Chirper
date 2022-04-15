const Comment = require("../models/comment");
const Chirp = require("../models/chirp")

function index(req, res){
    const chirp = Chirp.findById(req.params.id)
    Comment.find({}, function(err, comments){
        res.render("comments/index", {
            comments,
            chirp,
            title: "Chirper | Comments"
        })
    })
}

function newComment(req, res){
    const chirp = Chirp.findById(req.params.id)
    res.render('comments/new', {
        chirp,
        title: 'Chirper | New Comment'
    })
}

function create(req, res){
    const comment = new Comment(req.body)
    console.log(comment)
    comment.save(function(err){
        if(err) return res.render('comments/new', {title: "Chirper | Create a Comment"});
        res.redirect(`/Chirper/chirp/${req.params.id}/comments/show`);
    })
}

function show(req, res){
    Comment.findById(req.params.id, function(err, comments){
        res.render('comments/show', {
            comments,
            title: 'Chirper | View Comments'
        })
    })
}



module.exports = {
    index,
    new: newComment,
    create, 
    show
}


