import orderModel from '../models/orderModel.js'
import userModel from '../models/userModel.js';



const calculateOrderAmount = async(items) => {
    console.log(items);
    
}


// Placing orders using COD Method

const placeOrder = async (req, res) => {
    try {

        const { userId, items, amount, address } = req.body;

        const amount2 = await calculateOrderAmount(items);


        if (!items?.length || !address) {
            return res.status(400).json({
                success: false,
                message: "Items and delivery address are required.",
            });
        }

        const newOrder = await orderModel.create({
            userId,
            items,
            amount,
            address,
            paymentMethod: "COD",
            payment: false,
            status: "Order Placed",
            date: Date.now()
        });

        await userModel.findByIdAndUpdate(userId, {
            $set: { cartData: {} },
        });


        res.json({ success: true, message: "Order Placed" })



    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })

    }

}



// All Orders data for Admin Panel
const allOrders = async (req, res) => {

    try {
        
        const orders = await orderModel.find({})
        res.json({success:true, orders})

    } catch (error) {
        console.log(error);
        res.json({success:false, message:error.message})  
    }


}


// User Order Data for Frontend
const userOrders = async (req, res) => {
    try {

        const { userId } = req.body

        const orders = await orderModel.find({ userId })
        res.json({ success: true, orders })

    } catch (error) {
        console.log(error);
        res.json({success:false, message:error.message})     
    }

}

// Update order status from Admin Panel
const updateStatus = async (req, res) => {
    try {
        const {orderId, status} = req.body

        await orderModel.findByIdAndUpdate(orderId, {status})
        res.json({success:true, message: 'Status Updated'})

    } catch (error) {
        console.log(error);
        res.json({success:false, message: error.message})
        
    }
}

export { placeOrder, allOrders, userOrders, updateStatus }