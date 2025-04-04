import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://root:12345@cluster0.uqewyut.mongodb.net/food-del').then(()=>console.log("DataBase Connected"));
}