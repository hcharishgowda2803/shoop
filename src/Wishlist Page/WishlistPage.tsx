/* eslint-disable @typescript-eslint/no-explicit-any */
import "./WishlistPage.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import heartselected from "../assets/Source/heart_selected.png";
import back from "../assets/Source/back.png";


const Wishlistpage = () => {

    const navigate = useNavigate();

    const authstring = sessionStorage.getItem("Auth");
    const auth = authstring ? JSON.parse(authstring) : "";
    // const loggedin = auth.token;
    const userid = auth.user_id;

    const [wishlists, setwishlists] = useState([]);
    const [refresh, setrefresh] = useState<number>(0);




    useEffect(() => {
        if (userid) {
            const url = `${import.meta.env.VITE_BASE_URL}/wishList`;

            axios.get(url, {
                params:{
                    userId:userid
                }
            })
            .then(response => setwishlists(response.data.response.data))
            .catch(error => console.error('Error fetching data:', error));
        }
    },[userid, refresh])
    console.log("wish",wishlists) //////remove

    const removewishlist = (wishlistid:any) => {
        if (userid) {

            const url = `${import.meta.env.VITE_BASE_URL}/wishList/${wishlistid}`;
            axios.delete(url).then(() => setrefresh(refresh + 1));
        }
    }


    return(<>
        <div className="subheader">
            <img src={back} alt="back" width={30} onClick={() => navigate(-1)}/>
        </div>

        {wishlists.length > 0 ? <>
            <h1 className="explore">Your Personalized Wishlists</h1>

            <div className="productsholder">
                {wishlists.map((eachproduct:any) => (
                    <div className="productholder" key={eachproduct.productDetails._id}>

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

                                <button className="wish">
                                    <img src={heartselected} alt="selected" width={20} onClick={() => removewishlist(eachproduct._id)}/>
                                </button>
                                    

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
            <h1 className="explore">Your wishlist is empty. Add something you love!</h1>
        }

            
        
    
    </>)
}
export default Wishlistpage;