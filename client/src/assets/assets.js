import brush from '../assets/brush.png'
import brush_kids from '../assets/brush_kids.png'
import colors from '../assets/colors.png'
import eraser from '../assets/eraser.png'
import ink_pen from '../assets/ink_pen.png'
import ink_pen1 from '../assets/ink_pen1.png'
import pens from '../assets/pens.png'
import product1 from '../assets/product1.png'
import shelve1 from '../assets/shelve1.png'
import logo from '../assets/logo.png'
import logo1 from '../assets/logo1.png'
import menu_icon from '../assets/menu_icon.png'
import banner from '../assets/banner.avif'
import banner2 from '../assets/banner2.jpg'
import banner3 from '../assets/banner3.jpeg'
import penbg from '../assets/penbg.jpeg'
import pencilbg from '../assets/pencilbg.png'
import colorsbg from '../assets/colorsbg.webp'
import eraserbg from '../assets/eraserbg.jpeg'
import quality from '../assets/quality.png'
import star_icon from '../assets/star_icon.png'
import star_dull_icon from '../assets/star_dull_icon.png'



export const assets = {
    brush,
    brush_kids,
    colors,
    eraser, 
    ink_pen,
    ink_pen1,
    pens,
    product1,
    shelve1,
    logo,
    logo1,
    menu_icon,
    banner,
    banner2,
    banner3,
    penbg,
    pencilbg,
    colorsbg,
    eraserbg,
    quality,
    star_icon,
    star_dull_icon
}

export const products = [
    {
        _id: "aaa",
        name: "Pen",
        price: 100,
        image: [penbg, pencilbg, ink_pen, ink_pen1],
        category: "Writing Materials",
        description: "Pen is very nice. khfa hkfhaf jhkfhaf hf jkhfa  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex sint animi fugiat dolores culpa beatae neque necessitatibus autem nobis quia perspiciatis consectetur deserunt, modi tenetur rerum sequi repudiandae possimus?",
        date: "07182026",
        bestSeller: true

    },
    {
        _id: "bbb",
        name: "Pencil",
        price: 10,
        image: [pencilbg],
        category: "Writing Materials",
        date: "07282026",
        bestSeller: true
    },
    {
        _id: "ccc",
        name: "Eraser",
        price: 10,
        image: [eraserbg],
        category: "Writing Materials",
        date: "07282026",
        bestSeller: true
    },
    {
        _id: "ddd",
        name: "Sharpener",
        price: 10,
        image: [product1],
        category: "Writing Materials",
        date: "07282026",
        bestSeller: true
    },
    {
        _id: "eee",
        name: "Scale",
        price: 10,
        image: [ink_pen],
        category: "School Items",
        date: "07282026",
        bestSeller: true
    },
    {
        _id: "fff",
        name: "Book",
        price: 10,
        image: [ink_pen1],
        category: "Books",
        date: "07282026",
        bestSeller: false
    },
    {
        _id: "ggg",
        name: "Protactor",
        price: 10,
        image: [pens],
        category: "School Items",
        date: "07282026",
        bestSeller: false
    },
    {
        _id: "hhh",
        name: "Color",
        price: 10,
        image: [colorsbg],
        category: "Writing Materials",
        date: "07282026",
        bestSeller: true
    },
    {
        _id: "iii",
        name: "InkPen",
        price: 10,
        image: [ink_pen],
        category: "Writing Materials",
        date: "07282026",
        bestSeller: true
    },
    {
        _id: "jjj",
        name: "Brush",
        price: 10,
        image: [brush_kids],
        category: "Writing Materials",
        date: "07282026",
        bestSeller: true
    },
    {
        _id: "kkk",
        name: "Copy",
        price: 10,
        image: [brush_kids],
        category: "Notebooks",
        date: "07282026",
        bestSeller: false
    },
    {
        _id: "aaa1",
        name: "Pen",
        price: 100,
        image: [penbg],
        category: "Writing Materials",
        date: "07182026",
        bestSeller: true
    },
    {
        _id: "aaa2",
        name: "Harry Poter",
        price: 100,
        image: [logo1],
        category: "Nobels",
        date: "07182026",
        bestSeller: true
    },
    {
        _id: "aaa3",
        name: "Paper",
        price: 100,
        image: [logo1],
        category: "Office Items",
        date: "07182026",
        bestSeller: true
    },
     {
        _id: "aaa4",
        name: "Study Table",
        price: 100,
        image: [logo1],
        category: "Accessories",
        date: "07182026",
        bestSeller: true
    },
    {
        _id: "aaa5",
        name: "Pen",
        price: 100,
        image: [penbg],
        category: "Writing Materials",
        date: "07182026",
        bestSeller: true

    },
    {
        _id: "bbb",
        name: "Pencil",
        price: 10,
        image: [pencilbg],
        category: "Writing Materials",
        date: "07282026",
        bestSeller: true
    },
    {
        _id: "ccc",
        name: "Eraser",
        price: 10,
        image: [eraserbg],
        category: "Writing Materials",
        date: "07282026",
        bestSeller: true
    },
    {
        _id: "ddd",
        name: "Sharpener",
        price: 10,
        image: [product1],
        category: "Writing Materials",
        date: "07282026",
        bestSeller: true
    },
    {
        _id: "eee",
        name: "Scale",
        price: 10,
        image: [ink_pen],
        category: "School Items",
        date: "07282026",
        bestSeller: true
    },
    {
        _id: "fff",
        name: "Book",
        price: 540,
        image: [ink_pen1],
        category: "Books",
        date: "07282026",
        bestSeller: false
    },
    {
        _id: "ggg",
        name: "Protactor",
        price: 10,
        image: [pens],
        category: "School Items",
        date: "07282026",
        bestSeller: false
    },
    {
        _id: "hhh",
        name: "Color",
        price: 120,
        image: [colorsbg],
        category: "Writing Materials",
        date: "07282026",
        bestSeller: true
    },
    {
        _id: "iii",
        name: "InkPen",
        price: 110,
        image: [ink_pen],
        category: "Writing Materials",
        date: "07282026",
        bestSeller: true
    },
    {
        _id: "jjj",
        name: "Brush",
        price: 130,
        image: [brush_kids],
        category: "Writing Materials",
        date: "07282026",
        bestSeller: true
    },
    {
        _id: "kkk",
        name: "Copy",
        price: 50,
        image: [brush_kids],
        category: "Notebooks",
        date: "07282026",
        bestSeller: false
    },
    {
        _id: "aaa10",
        name: "Pen",
        price: 100,
        image: [penbg],
        category: "Writing Materials",
        date: "07182026",
        bestSeller: true
    },
    {
        _id: "aaa20",
        name: "Harry Poter",
        price: 300,
        image: [logo1],
        category: "Nobels",
        date: "07182026",
        bestSeller: true
    },
    {
        _id: "aaa30",
        name: "Paper",
        price: 400,
        image: [logo1],
        category: "Office Items",
        date: "07182026",
        bestSeller: true
    },
     {
        _id: "aaa40",
        name: "Study Table",
        price: 800,
        image: [logo1],
        category: "Accessories",
        date: "07182026",
        bestSeller: true
    },
    {
        _id: "aaa50",
        name: "Pen",
        price: 100,
        image: [penbg],
        category: "Writing Materials",
        date: "07182026",
        bestSeller: true

    },
    {
        _id: "bbb",
        name: "Pencil",
        price: 5,
        image: [pencilbg],
        category: "Writing Materials",
        date: "07282026",
        bestSeller: true
    },
    {
        _id: "ccc",
        name: "Eraser",
        price: 5,
        image: [eraserbg],
        category: "Writing Materials",
        date: "07282026",
        bestSeller: true
    },
    {
        _id: "ddd",
        name: "Sharpener",
        price: 5,
        image: [product1],
        category: "Writing Materials",
        date: "07282026",
        bestSeller: true
    },
    {
        _id: "eee",
        name: "Scale",
        price: 10,
        image: [logo1],
        category: "School Items",
        date: "07282026",
        bestSeller: true
    },
    {
        _id: "fff",
        name: "Book",
        price: 1000,
        image: [logo1],
        category: "Books",
        date: "07282026",
        bestSeller: false
    },
    {
        _id: "ggg",
        name: "Protactor",
        price: 10,
        image: [pens],
        category: "School Items",
        date: "07282026",
        bestSeller: false
    },
    {
        _id: "hhh",
        name: "Color",
        price: 150,
        image: [colorsbg],
        category: "Writing Materials",
        date: "07282026",
        bestSeller: true
    },
    {
        _id: "iii",
        name: "InkPen",
        price: 50,
        image: [ink_pen],
        category: "Writing Materials",
        date: "07282026",
        bestSeller: true
    },
    {
        _id: "jjj",
        name: "Brush",
        price: 105,
        image: [brush_kids],
        category: "Writing Materials",
        date: "07282026",
        bestSeller: true
    },
    {
        _id: "kkk",
        name: "Copy",
        price: 100,
        image: [brush_kids],
        category: "Notebooks",
        date: "07282026",
        bestSeller: false
    },
    {
        _id: "aaa100",
        name: "Pen",
        price: 10,
        image: [penbg],
        category: "Writing Materials",
        date: "07182026",
        bestSeller: true
    },
    {
        _id: "aaa200",
        name: "Harry Poter",
        price: 300,
        image: [logo1],
        category: "Nobels",
        date: "07182026",
        bestSeller: true
    },
    {
        _id: "aaa300",
        name: "Paper",
        price: 400,
        image: [logo1],
        category: "Office Items",
        date: "07182026",
        bestSeller: true
    },
     {
        _id: "aaa400",
        name: "Study Table",
        price: 800,
        image: [logo1],
        category: "Accessories",
        date: "07182026",
        bestSeller: true
    },

]