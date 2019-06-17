var axios = require('axios');
var cheerio = require('cheerio');
var db = require('../models');

module.exports = app => {
    app.get('/scrape', (req, res) => {
        console.log('scraping');
        axios.get('http://www.npr.org').then(response => {
            let $ = cheerio.load(response.data);

            $("article .story-text").each(function (i, element) {

                let result = {};
                // result.title = $(this).children('a').children('h3')

                const title = $(this).children("a").children('h3').text();
                console.log('title: ' + title)

                const link = $(this).children("a").attr('href')
                console.log('link: ' + link)

                const snippet = $(this).children("a").children('p').text();
                console.log('snippet: ' + snippet)

                if (title && link && snippet) {
                    result.title = title
                    result.link = link
                    result.snippet = snippet
                    console.log('uploaded!')
                }

                db.Article.create(result)
                    .then(dbArticle => {
                        console.log(dbArticle);
                    })
                    .catch(err => console.log(err));

            });

            res.send('done scraping!');
        })
    });

    app.get('/articles', (req, res) => {
        db.Article.find({})
            .then(dbArticle => res.json(dbArticle))
            .catch(err => res.json(err))
    })

    app.post('/api/notes', (req, res) => {
        console.log(req.body)
        console.log('body: ' + req.body.body)
        console.log('id: ' + req.body.id)

        // db.Note.create()
        res.send('done noting');
    })


    
}
