import React from "react";
import { PopularProductData } from "../../../public/assets/TestimonialData";



const PopularProduct = () => {

    return (
        <div className="popular-product">
            <div className="container">
                <div className="row">
                    {  PopularProductData.map((product)=>{
                        return(
 
                    <div className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0" key={product.id}>
                        <div className="product-item-sm d-flex">
                            <div className="thumbnail">
                                <img src={product.productImage} alt="Image" className="img-fluid"/>
                            </div>
                            <div className="pt-3">
                                <h3>{product.productName}</h3>
                                <p>{product.productDecription} </p>
                                <p><a href="#">Read More</a></p>
                            </div>
                        </div>
                    </div>  )   }) }

                </div>
            </div>
        </div>
    );

};

export default PopularProduct;