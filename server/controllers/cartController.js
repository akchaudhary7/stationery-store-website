import userModel from "../models/userModel"


//  add products to user cart
const addToCart = async (req, res) => {
    try {

        const { userId, itemId } = req.body

        if (!userId || !itemId) {
            return res.json({ success: false, message: "userId and itemId are required" })
        }

        const user = await userModel.findByIdAndUpdate(
            userId,
            { $inc: { [`cartData.${itemId}`]: 1 } },
            { new: true }
        );

        if (!user) {
            return res.json({ success: false, message: "User not found" });
        }

        res.json({ success: true, message: "Added to Cart" })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })

    }


}


//  update user cart
const updateCart = async (req, res) => {



}



//  get user cart data
const getUserCart = async (req, res) => {



}

export { addToCart, updateCart, getUserCart }