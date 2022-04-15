const Chirp = require('../models/chirp');


function newChirp(req, res){
    res.render('chirps/new', {title: 'Chirper | Create a Chirp'})
}

function index(req, res){
    Chirp.find({}, function(err, chirps){
        res.render("chirps/index", {
            chirps,
            title: "Chirper | Home"
        })
    })
}

function create(req, res){
    const chirp = new Chirp(req.body)
    chirp.save(function(err){
        if (err) return res.render('chirps/new', {title: "Chirper | Create a Chirp"});
        res.redirect(`/Chirper/home`);
    })
}

function show(req, res){
    Chirp.findById(req.params.id, function(err, chirp){
        res.render('chirps/show', {
            chirp,
            title: 'Chirper | Chirp'
        })
    })
}

function deleteChirp(req, res) {
    // DELETE FIRST BY CHIRP ID
    Chirp.findByIdAndDelete(req.params.id, function(err){
        res.redirect('/Chirper/home')
    })
}

function edit(req, res) {
    Chirp.findById(req.params.id, function(err, chirp){
        res.render('chirps/edit', {
            chirp,
            title: 'Chiper | Edit'
        })
    })
}

function update(req, res) {
    Chirp.findByIdAndUpdate(req.params.id, req.body, function(err, chirp){
        // res.render('chirps/show', {
        //     chirp,
        //     title: 'Chirper | Chirp'
        // })
    })
    res.redirect(`/Chirper/home`)
}

module.exports = {
    new: newChirp,
    index,
    create,
    show,
    edit,
    delete: deleteChirp,
    update
}


