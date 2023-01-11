const mongoose = require("mongoose")

const Schema = mongoose.Schema

const BookSchema = new Schema({
    title: { type: String, required: true },
    author: { type: Schema.Types.ObjectId, ref: "Author", required: true },
    summary: { type: String, reqired: true },
    isbn: { type: String, reqired: true },
    genre: [{ type: Schema.Types.ObjectId, ref: "Genre" }]
})

BookSchema.virtual("url").get(function () {
    return `/catalog/book/${this._id}`
})

module.exports = mongoose.model("Book", BookSchema)