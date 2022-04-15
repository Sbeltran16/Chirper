const Comment = require("../models/comment");
const Chirp = require("../models/chirp")

async function index(req, res){
    const chirp = await Chirp.findById(req.params.id)
    Comment.find({}, function(err, comments){
        res.render("comments/index", {
            comments,
            chirp,
            title: "Chirper | Comments"
        })
    })
}

async function newComment(req, res){
    const chirp = await Chirp.findById(req.params.id)
    res.render('comments/new', {
        chirp,
        title: 'Chirper | New Comment'
    })
}

function create(req, res){
    const commentData = req.body
    commentData.chirpId = req.params.id
    const comment = new Comment(commentData)
    console.log(comment)
    comment.save(function(err){
        if(err) return res.render('comments/new', {title: "Chirper | Create a Comment"});
        res.redirect(`/Chirper/chirp/${req.params.id}`);
    })
}
// function show(req, res){
//     Comment.findById(req.params.commentId){

//     }
// }

module.exports = {
    index,
    new: newComment,
    create

}


// function newComment(req, res){
//     res.render('comments/new', {title: 'Chirper | Add a Comment'})
// }


// function create(req, res) {
//     const commentData = req.body
//     commentData.chirpId = req.params.id
//     const comment = new Comment(commentData)
//     console.log(commentData)
//     const chirp = Chirp.findById(req.params.id)
//     comment.save(function(err){
//         if (err) return res.render('comments/new', {chirp, title: 'Chirper | Post'});
//         res.redirect(`/Chirper/chirps/${req.params.id}/comments`)
//     })
//   }

// function index(req, res){
//     Comment.find({}, function(err, comments){
//     const chirp = Chirp.findById(req.params.id)
//         res.render("comments/index", {
//             comments,
//             chirp,
//             title: "Chirper | Comments"
//         })
//     })
// }

// // function deleteComment(req, res) {
// //     // DELETE FIRST BY CHIRP ID
// //     Chirp.findByIdAndDelete(req.params.id, function(err){
// //         res.redirect('/Chirper/chirps/:id')
// //     })
// // }