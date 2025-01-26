
import mongoose from "mongoose";

const orderSchema = mongoose.Schema({

   userId:{
         type: mongoose.Schema.Types.ObjectId,
         required: true,
         ref: "User",
   },
   items:{
            type: Array,
            required: true,
   },
   address:{
            type: String,
            required: true,
   },
   payment:{
    type:Boolean,
    required: true,
    default:false,
    },
    status:{
        type: String,
        required: true,
        default:"Pending",
    },
    date:{
        type: Date,
        required: true,
        default: Date.now(),
    }

},{
    timestamps: true,
});

const Order = mongoose.model("Order", orderSchema);

export default Order;
