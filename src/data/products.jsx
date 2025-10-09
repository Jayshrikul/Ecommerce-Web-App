// ------- Gowns -------
import gown1 from "../assets/gowns/gown1.jpg";
import gown2 from "../assets/gowns/gown2.jpg";
import gown3 from "../assets/gowns/gown3.jpg";
import gown4 from "../assets/gowns/gown4.jpg";
import gown5 from "../assets/gowns/gown5.jpg";
import gown6 from "../assets/gowns/gown6.jpg";
import gown7 from "../assets/gowns/gown7.jpg";
// ------- Tops -------
import top1 from "../assets/tops/shirt.jpg";
import top2 from "../assets/tops/Cowboyjacket.jpg"
import top3 from "../assets/tops/BlazerlongSleeves.jpg";

//--------Clothing--------
import cloth1 from "../assets/Clothing/formalset.jpg";
import cloth2 from "../assets/Clothing/trenchcoat.jpg";
import cloth3 from "../assets/Clothing/formalset2.jpg";
// ------- Accessories -------
import acc1 from "../assets/accessories/jwelesset1.jpg";
import acc2 from "../assets/accessories/shoulderbag.jpg";
import acc3 from "../assets/accessories/DiamondRing.jpg"

//---------Footwear --------
import shoes1 from "../assets/Footwear/Beautifulsandal.jpg";
import shoes2 from "../assets/Footwear/heelsshoes.jpg";
import shoes3 from "../assets/Footwear/Loafer.jpg"; 
import shoes4 from "../assets/Footwear/shoes.jpg"; 
import shoes5 from "../assets/Footwear/Sneakers.jpg"; 
import shoes6 from "../assets/Footwear/whiteflats.jpg"; 
import shoes7 from "../assets/Footwear/yellowflats.jpg"; 
import shoes8 from "../assets/Footwear/ziperboots.jpg"; 
import shoes9 from "../assets/Footwear/blackboots.jpg"; 
 

export const products = [
  // Gowns
  {
    id: 1,
    name: "Gown",
    category: "Gowns",
    price: 2500,
    image: gown1,
  },
  {
    id: 2,
    name: "Pretty pink Gown",
    category: "Gowns",
    price: 3000,
    image: gown2,
   
  },
  {
    id: 3,
    name: "Gown",
    category: "Gowns",
    price: 3500,
    image: gown3,
  },
   {
    id: 4,
    name: "Blue Gown" ,
    category: "Gowns",
    price: 1200,
    image: gown4,
    
  },
{
    id: 5,
    name: "Halter Neck gown",
    category: "Gowns",
    price: 2500,
    image: gown5,
  
  },
  {
    id: 6,
    name: "Elegant Black",
    category: "Gowns",
    price: 2000,
    image: gown6,
     isNew:true,
  },
  {
    id: 7,
    name: "Elegant Gown",
    category: "Gowns",
    price: 3000,
    image: gown7,
  
  },


  // Tops
  {
    id: 8,
    name: "Trendy Crop Top",
    category: "Tops",
    price: 800,
    image: top1,
  },
  

  // Accessories
  {
    id: 9,
    name: "Jewellery Set",
    category: "Accessories",
    price: 1200,
    image: acc1,
  },
  
   {
    id: 10,
    name: "Cowboy Jacket",
    category: "Tops",
    price: 1200,
    image: top2,
    isNew: true, 
  },
  
  {
    id: 11,
    name: "Trendy Bag ",
    category: "accessories",
    price: 1200,
    image: acc2,
    isNew: true, 
  },
  
{
    id: 12,
    name: "Blazer",
    category: "tops",
    price: 1200,
    image: top3,
    isNew: true, 
  },
//------Clothing------
{
    id: 13,
    name: "Formal Set ",
    category: "Clothing",
    price: 1200,
    image: cloth1,
    isNew: true, 
  },
  
{
    id: 14,
    name: "Trench Coat" ,
    category: "Clothing",
    price: 1200,
    image: cloth2,
    isNew: true, 
  },
   {
    id: 15,
    name: "Formal set" ,
    category: "Clothing",
    price: 1200,
    image: cloth3,
    isNew: true, 
  },

  //-----Footwear-----

  {
    id: 16,
    name: "Stylish Heels",
    category: "Footwear",
    price: 1300,
    image: shoes1,
   
  },
   
  {
    id: 17,
    name: "Heels shoes",
    category: "Footwear",
    price: 1200,
    image: shoes2,
   

  },
  {
    id: 18,
    name: "Loafer",
    category: "Footwear",
    price: 2000,
    image: shoes3,
  
  },
   {
    id: 19,
    name: "shoes",
    category: "Footwear",
    price: 1700,
    image: shoes4,
  
  },
{
    id: 20,
    name: "Sneakers",
    category: "Footwear",
    price: 2000,
    image: shoes5,
  
  },
{
    id: 21,
    name: "Flats",
    category: "Footwear",
    price: 900,
    image: shoes6,
  
  },
{
    id: 22,
    name: "Flats",
    category: "Footwear",
    price: 1200,
    image: shoes7,
  
  },
{
    id: 23,
    name: "Ziper Boots",
    category: "Footwear",
    price: 2500,
    image: shoes8,
     isNew:true,
  },
{
    id: 24,
    name: "Boots",
    category: "Footwear",
    price: 2000,
    image: shoes9,

  
  },
   {
    id: 25,
    name: "Diamond Ring",
    category: "accessories",
    price: 49609,
    image: acc3,
    isNew: true,
  
  },
   
];


// Debug (optional, remove in prod)
console.log("✅ Loaded Products:", products);
