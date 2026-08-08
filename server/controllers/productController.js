import express from "express";
import { v2 as cloudinary } from 'cloudinary'
import productModel from "../models/productModel.js";



// function for add product
const addProduct = async (req, res) => {
    try {

        const { name, description, price, category, bestSeller } = req.body

        const image1 = req.files?.image1?.[0];
        const image2 = req.files?.image2?.[0];
        const image3 = req.files?.image3?.[0];
        const image4 = req.files?.image4?.[0];

        const images = [image1, image2, image3, image4].filter((item) => item !== undefined)

        let imageUrl = await Promise.all(
            images.map(async (item) => {
                let result = await cloudinary.uploader.upload(item.path, { resource_type: 'image' });
                return result.secure_url
            })
        )

        console.log(name, description, price, category, bestSeller);
        console.log(imageUrl);

        const productData = {
            name,
            description,
            category,
            price: Number(price),
            bestSeller: bestSeller === "true" ? true : false,
            image: imageUrl,
            date: Date.now()
        }

        console.log(productData);

        const product = new productModel(productData);
        await product.save()


        res.json({ success: true, message: "Product Added" })

    } catch (error) {
        console.log(error);

        res.json({ success: false, message: error.message })
    }


}


// function for list product
const listProducts = async (req, res) => {

    try {

        const products = await productModel.find({});
        res.json({ success: true, products })

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })

    }


}


// function for removing product
const removeProduct = async (req, res) => {
    try {

        const { id } = req.body || {};

        if (!id) {
            return res.json({ success: false, message: "Product ID is required" });
        }

        await productModel.findByIdAndDelete(id);

        res.json({ success: true, message: "Product removed" })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })
    }

}


// function for single product info
const singleProduct = async (req, res) => {
    try {
        const { id } = req.body || {};
        if (!id) {
            return res.json({ success: false, message: "Product ID is required" });
        }
        const product = await productModel.findById(id);

        console.log(product);

        res.json({ success: true, product })

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })
    }


}


export { listProducts, addProduct, removeProduct, singleProduct } 