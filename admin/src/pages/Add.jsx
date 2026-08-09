import axios from 'axios';
import React, { useState } from 'react';
import { FaCloudUploadAlt } from "react-icons/fa";
import { MdCloudUpload } from "react-icons/md";
import { backendUrl } from '../App'
import { toast } from 'react-toastify';



const Add = ({ token }) => {

    const [image1, setImage1] = useState(false);
    const [image2, setImage2] = useState(false);
    const [image3, setImage3] = useState(false);
    const [image4, setImage4] = useState(false);

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("Writing Materials");
    const [bestSeller, setBestSeller] = useState(false)

    const onSubmitHandler = async (e) => {
        e.preventDefault();

        try {

            const formData = new FormData()

            formData.append("name", name)
            formData.append("description", description)
            formData.append("price", price)
            formData.append("category", category)
            formData.append("bestSeller", bestSeller)

            image1 && formData.append("image1", image1)
            image2 && formData.append("image2", image2)
            image3 && formData.append("image3", image3)
            image4 && formData.append("image4", image4)

            console.log(token);
            

            const response = await axios.post(`${backendUrl}/api/product/add`, formData, { headers: { token }, });

            console.log(response.data);

            if (response.data.success){
                toast.success(response.data.message)
                setName('')
                setDescription('')
                setImage1(false)
                setImage2(false)
                setImage3(false)
                setImage4(false)
                setPrice('')
            } else {
                toast.error(response.data.message)
            }


        } catch (error) {
            console.log(error);
            toast.error(error.message)
            
        }

    }


    return (
        <form
            onSubmit={onSubmitHandler}
            className='flex flex-col w-full items-start gap-3'>
            <div>
                <p className='mb-2'>Upload Image</p>

                <div className='flex gap-2'>
                    <label
                        htmlFor="image1"
                        className="flex h-[100px] w-[100px] cursor-pointer flex-col items-center justify-center gap-1 border border-dashed border-[#c9c9c9] bg-white font-sans text-sm text-[#777] transition hover:border-[#9da8ba] hover:bg-slate-50"
                    >
                        {image1 ? (
                            <img
                                src={URL.createObjectURL(image1)}
                                alt="Selected product"
                                className="h-full w-full object-cover"
                            />
                        ) : (
                            <>
                                <MdCloudUpload className="text-[28px] text-[#b4bbc9]" />
                                <span>Upload</span>
                            </>
                        )}

                        <input
                            onChange={(e) => setImage1(e.target.files[0])}
                            type="file"
                            id="image1"
                            className="hidden"
                            accept="image/*"
                        />
                    </label>

                    <label
                        htmlFor="image2"
                        className="flex h-[100px] w-[100px] cursor-pointer flex-col items-center justify-center gap-1 border border-dashed border-[#c9c9c9] bg-white font-sans text-sm text-[#777] transition hover:border-[#9da8ba] hover:bg-slate-50"
                    >
                        {image2 ? (
                            <img
                                src={URL.createObjectURL(image2)}
                                alt="Selected product"
                                className="h-full w-full object-cover"
                            />
                        ) : (
                            <>
                                <MdCloudUpload className="text-[28px] text-[#b4bbc9]" />
                                <span>Upload</span>
                            </>
                        )}

                        <input
                            onChange={(e) => setImage2(e.target.files[0])}
                            type="file"
                            id="image2"
                            className="hidden"
                            accept="image/*"
                        />
                    </label>

                    <label
                        htmlFor="image3"
                        className="flex h-[100px] w-[100px] cursor-pointer flex-col items-center justify-center gap-1 border border-dashed border-[#c9c9c9] bg-white font-sans text-sm text-[#777] transition hover:border-[#9da8ba] hover:bg-slate-50"
                    >
                        {image3 ? (
                            <img
                                src={URL.createObjectURL(image3)}
                                alt="Selected product"
                                className="h-full w-full object-cover"
                            />
                        ) : (
                            <>
                                <MdCloudUpload className="text-[28px] text-[#b4bbc9]" />
                                <span>Upload</span>
                            </>
                        )}

                        <input
                            onChange={(e) => setImage3(e.target.files[0])}
                            type="file"
                            id="image3"
                            className="hidden"
                            accept="image/*"
                        />
                    </label>

                    <label
                        htmlFor="image4"
                        className="flex h-[100px] w-[100px] cursor-pointer flex-col items-center justify-center gap-1 border border-dashed border-[#c9c9c9] bg-white font-sans text-sm text-[#777] transition hover:border-[#9da8ba] hover:bg-slate-50"
                    >
                        {image4 ? (
                            <img
                                src={URL.createObjectURL(image4)}
                                alt="Selected product"
                                className="h-full w-full object-cover"
                            />
                        ) : (
                            <>
                                <MdCloudUpload className="text-[28px] text-[#b4bbc9]" />
                                <span>Upload</span>
                            </>
                        )}

                        <input
                            onChange={(e) => setImage4(e.target.files[0])}
                            type="file"
                            id="image4"
                            className="hidden"
                            accept="image/*"
                        />
                    </label>
                </div>
            </div>

            <div className='w-full'>
                <p className='mb-2'>Product Name</p>
                <input
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    className='w-full max-w-[500px] px-3 py-2' type="text" placeholder='Product Name' required />
            </div>

            <div className='w-full'>
                <p className='mb-2'>Product Description</p>
                <textarea
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                    className='w-full max-w-[500px] px-3 py-2' type="text" placeholder='Write content here' required />
            </div>

            <div className='flex flex-col sm:flex-row gap-2 w-full sm:gap-8'>
                <div>
                    <p className='mb-2'>Product Category</p>
                    <select
                        onChange={(e) => setCategory(e.target.value)}
                        className='w-full px-3 py-2'>
                        <option value="Writing Materials">Writing Materials</option>
                        <option value="Notebooks">Notebooks</option>
                        <option value="Books">Books</option>
                        <option value="Nobels">Nobels</option>
                        <option value="School Items">School Items</option>
                        <option value="Office Items">Office Items</option>
                        <option value="Accessories">Accessories</option>
                    </select>
                </div>

                <div>
                    <p className='mb-2'>Product Price</p>
                    <input
                        onChange={(e) => setPrice(e.target.value)}
                        value={price}
                        className='w-full px-3 py-2 sm:w-[120px]' type="Number" placeholder='Rs' />
                </div>
            </div>

            <div className='flex gap-2 mt-2'>
                <input
                    onChange={() => setBestSeller(prev => !prev)}
                    checked={bestSeller}
                    type="checkbox" id='bestSeller' />
                <label className='cursor-pointer' htmlFor="bestSeller">Add to Bestseller</label>
            </div>

            <button type='submit' className='w-28 py-3 mt-4 bg-black text-white active:bg-gray-300'>ADD</button>

        </form>
    )
}

export default Add
