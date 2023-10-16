import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
    {
        name: {
            type: String,
        },
        img:{
            type:String
        },
        productId: [
            {
                type: mongoose.Types.ObjectId,
                ref: "Product"
            }
        ]
    },
    { timestamps: true, versionKey: false }
);

export default mongoose.model("Category", categorySchema);