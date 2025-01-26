import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    address:{
        type: String,
        required: true,
    },
    phone:{
        type: String,
        required: true,
    },
    cart:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Cart",
    },
    orders: [
        {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "Order",
        },
    ],
    role:{
        type: String,
        enum:["user", "admin","vendor","delivery_partner"],
        default: "user",
    }

},{
    timestamps: true,
});

const User = mongoose.model("User", userSchema);

export default User;