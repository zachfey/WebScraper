var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    snippet: {
        type: String,
        required: true
    },
    note:  {
        type: Schema.Types.ObjectId,
        ref: 'Note'
    }
});

let Article = mongoose.model("Article", ArticleSchema);
module.exports = Article;