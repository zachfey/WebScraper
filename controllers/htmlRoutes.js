var path = require("path");

// Routes
// =============================================================
module.exports = function (app) {

  app.get("/", function (req, res) {
    articles = []
    db.Article.find({})
      .then(data => {for (let i in data) {
        // Display the apropos information on the page
        article = {
          title: data.title,
          link: data.link,
          snippet: data.snippet
        }
        articles.push(article);
      }})
    .catch(err => res.json(err))


  console.log(articles)

  res.render('index');
});



  
};