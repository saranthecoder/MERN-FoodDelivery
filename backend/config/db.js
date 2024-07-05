import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://saranthecodder:saransaran@cluster0.hz2ibvp.mongodb.net/FoodDelivery')
    .then(()=>{
        console.log('Db connected');
    })
    .catch(err => console(err));
}