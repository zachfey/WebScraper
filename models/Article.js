var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var uniqueValidator = require('mongoose-unique-validator')

var ArticleSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
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

ArticleSchema.plugin(uniqueValidator)

let Article = mongoose.model("Article", ArticleSchema);
module.exports = Article;