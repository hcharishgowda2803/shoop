/* eslint-disable @typescript-eslint/no-explicit-any */
import "./CartPage.css";
import { useNavigate } from "react-router-dom";

import back from "../assets/Source/back.png";
import { useEffect, useState } from "react";




const Cartpage = () => {
    const navigate = useNavigate();

    // const authstring = sessionStorage.getItem("Auth");
    // const auth = authstring ? JSON.parse(authstring) : "";
    // const loggedin = auth.token;
    // const userid = auth.user_id;

    const [cartitems, setcartitems] = useState<any>([]);


    const itemsss = [
        {
            "_id": "wishLists-1724611178009890",
            "userId": "userRegistrationModel-1724000939029992",
            "productDetails": {
                "_id": "products-172441550688479",
                "name": "Electric Scooter",
                "description": "An eco-friendly electric scooter with a long battery life and sleek design.",
                "category": "Transportation",
                "price": 499.99,
                "discount": 30,
                "brand": "EcoRide",
                "stock": 15,
                "imageUrl": "https://img.freepik.com/free-photo/electric-scooter-urban-environment_1150-1012.jpg?size=626&ext=jpg",
                "rating": 4.6,
                "color": "Blue",
                "size": "NA",
                "material": "Aluminum",
                "created_at": 1724415506886,
                "__v": 0
            },
            "created_at": 1724607048379,
            "__v": 0
        },
        {
            "_id": "wishLists-1724677424374550",
            "userId": "userRegistrationModel-1724000939029992",
            "productDetails": {
                "_id": "products-1723789223316784",
                "name": "Luxury Bed Set",
                "description": "A 4-piece bed set including sheets, pillowcases, and a duvet cover.",
                "category": "Bedding",
                "price": 219.99,
                "discount": 20,
                "brand": "SleepWell",
                "stock": 40,
                "imageUrl": "https://img.freepik.com/free-photo/luxury-bed-set-bedroom-interior_1150-1357.jpg?size=626&ext=jpg",
                "rating": 4.8,
                "color": "White",
                "size": "NA",
                "material": "Cotton",
                "created_at": 1723789223317,
                "__v": 0
            },
            "created_at": 1724677315335,
            "__v": 0
        },
        {
            "_id": "wishLists-1724677426701838",
            "userId": "userRegistrationModel-1724000939029992",
            "productDetails": {
                "_id": "products-1723789124892886",
                "name": "Elegant Dining Set",
                "description": "A 6-piece dining set with a marble top and wooden legs.",
                "category": "Furniture",
                "price": 799.99,
                "discount": 10,
                "brand": "LuxDeco",
                "stock": 10,
                "imageUrl": "https://img.freepik.com/free-photo/elegant-dining-room-interior_1150-1084.jpg?size=626&ext=jpg",
                "rating": 4.9,
                "size": "NA",
                "material": "Marble",
                "created_at": 1723789124892,
                "__v": 0
            },
            "created_at": 1724677315335,
            "__v": 0
        },
        {
            "_id": "wishLists-1724677428253121",
            "userId": "userRegistrationModel-1724000939029992",
            "productDetails": {
                "_id": "products-1723789100304390",
                "name": "Bluetooth Headphones",
                "description": "High-quality wireless headphones with noise-cancelling features.",
                "category": "Electronics",
                "price": 129.99,
                "discount": 25,
                "brand": "SoundWave",
                "stock": 60,
                "imageUrl": "https://img.freepik.com/free-photo/modern-bluetooth-headphones_1150-1320.jpg?size=626&ext=jpg",
                "rating": 4.7,
                "color": "Silver",
                "size": "NA",
                "material": "Metal",
                "created_at": 1723789100305,
                "__v": 0
            },
            "created_at": 1724677315335,
            "__v": 0
        }
    ]

    useEffect(() => {
        setcartitems(itemsss)
        console.log(cartitems)
    },[])
    


    return(<>
        <div className="subheader">
            <img src={back} alt="back" width={30} onClick={() => navigate(-1)}/>
        </div>

        {cartitems.length > 0 ? <>
            <h1 className="explore">Your Cart Items</h1>

            <div className="productsholder">
                {cartitems.map((eachproduct:any) => (
                    <div className="cartproductholder" key={eachproduct.productDetails._id}>

                        <div className="productimageholder">
                            <img className="productimage" src={eachproduct.productDetails.imageUrl} alt="product"/>
                        </div>

                        <div className="productcontent">

                            <div className="brandrating">
                                <p className="brand">{eachproduct.productDetails.brand}</p>
                                {eachproduct.productDetails.rating > 0 ? (
                                    <p className="rating">
                                        <span className="star">⭐ &nbsp;</span>
                                        {eachproduct.productDetails.rating.toFixed(1)}
                                    </p>
                                ) : null}
                            </div>

                            <p className="name">{eachproduct.productDetails.name}</p>
                            <p className="description">{eachproduct.productDetails.description}</p>
                            <div className="priceholder">
                                <p className="scratchprice">₹ {Math.round(eachproduct.productDetails.price)}</p>
                                <p className="price">₹ {Math.round(eachproduct.productDetails.price - eachproduct.productDetails.discount)}</p>
                            </div>

                            <div className="colorsize">
                                {eachproduct.color && <p className="color"><b>Color: </b>{eachproduct.productDetails.color}</p>}
                                {eachproduct.size && <p className="size"><b>Size: </b>{eachproduct.productDetails.size}</p>}
                            </div>

                            <div className="wishadd">
                                    
                                {!eachproduct
                                    ?   <button className="addedbutton">
                                            <p className='addsub'>-</p>
                                            <p>0</p>
                                            <p className='addsub'>+</p>
                                        </button>
                                    
                                    :   <button className="addbutton">ADD</button>
                                }

                            </div>

                        </div>

                    </div>
                ))}
            </div>
        </> :
            <h1 className="explore">Your cart is empty.</h1>
        }
    
    
    </>)
}
export default Cartpage;