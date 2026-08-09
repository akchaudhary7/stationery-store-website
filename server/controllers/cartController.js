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

    try {

        const { userId, itemId, quantity } = req.body;
        const quantity = Number(quantity);

        if (!userId || !itemId || !Number.isInteger(quantity) || quantity < 0) {
            return res.json({
                success: false,
                message: "Valid userId, itemId, and non-negative quantity are required"
            });
        }

        const updateQuery =
            quantity === 0
                ? { $unset: { [`cartData.${itemId}`]: 1 } }
                : { $set: { [`cartData.${itemId}`]: quantity } };



        const user = await userModel.findByIdAndUpdate(
            userId,
            updateQuery,
            { new: true }
        );


        if (!user) {
            return res.json({ success: false, message: "User not found" });
        }


        res.json({ success: true, message: "Cart Updated" })

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })

    }

}



//  get user cart data
const getUserCart = async (req, res) => {
    try {

        const { userId } = req.body

        if (!userId) {
            return res.json({ success: false, message: "userId is required" });
        }

        const userData = await userModel
            .findById(userId)
            .select("cartData");


        if (!userData) {
            return res.json({ success: false, message: "User not found" });
        }

        res.json({ success: true, cartData: userData.cartData || {} });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })

    }


}

export { addToCart, updateCart, getUserCart }