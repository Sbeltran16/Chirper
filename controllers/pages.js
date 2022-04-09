const Page = require("../models/page");

function newPage(req, res){
    res.render("pages/new", {title: "Create Post"})
}














module.exports = {
    new: newPage
}