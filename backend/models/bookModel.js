import mongoose from "mongoose";
//book Model
const bookSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        author:{
            type: string,
            required: true,
        },
        publishYear:{
            type: Number,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

export const Book = mongoose.model('book',bookSchema);