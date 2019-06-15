var path = require("path");
var db = require('../models');

// Routes
// =============================================================
module.exports = function (app) {

  app.get("/", function (req, res) {
    articles = []
    db.Article.find({})
      .then(data => {
        // console.log(data)
        for (let i in data) {
          // Display the apropos information on the page
          // console.log(data[i])
          article = {
            title: data[i].title,
            link: data[i].link,
            snippet: data[i].snippet
          }
          // console.log(article)
          articles.push(article);
        }
        console.log(articles)

        res.render('index', {articles: articles});
      })
      .catch(err => res.json(err))



  });




};