import mongoose from "mongoose";

  export const Connection= async function Connection(){
    mongoose.connect('mongodb://127.0.0.1:27017/blog-app')
    console.log("connected")

}
