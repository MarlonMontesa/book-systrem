import mongoose from "mongoose";

//the code below creates a schema for your database that contains title, author, and publishyear as well as timestamp
const bookSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        author: {
            type: String,
            required: true
        },
        publishYear: {
            type: Number,
            required: true
        }
    },
    {
        timestamps: true // This option enables automatic timestamping of createdAt and updatedAt fields in documents.
    }
)

//the code below shows that the database schema that you created above will be passed on this book variable and will be exported to be used in index.js
export const Book = mongoose.model("books", bookSchema)