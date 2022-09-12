import React from "react";

const Cart = (count)=>{
    return(
        <div >
            <i className="fa fa-shopping-cart icon" >{count.count}</i>
        </div>
    )
}

export default Cart