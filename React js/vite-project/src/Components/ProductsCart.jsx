import { useState } from "react";

const ProductsCart = (props)=> {
 let [cart,setCart] = useState(0);
    
    return (
        < >
        <div style={styling.out}>
        <div style={styling.div}>
            <img src={props.details.Imgsrc} alt="" style={styling.img}/>
            <p>
                <h4>Name : {props.details.Name}</h4>
                <h4>Price : {props.details.Price}</h4>
                <h4>Description : {props.details.Description}</h4>
                <h4>Rateing : {props.details.Rateing}</h4>
            </p>
            <button onClick={(value)=> {
                setCart(cart +1)
            }}style={styling.btn}>Add Tocart</button>


        </div>
        </div>
            <h1>{cart}</h1>
        </>
    )
}

const styling = {

    div : {
        display : "flex",
        justifyContant : "center",
        alignItems : "center",
        border :"2px solid black",
        borderRadius : "10px",
        flexDirection : "column",
        heigt :"300px",
        width : "200px",
        margin : "10px",
        padding : "10px",
    },
    img : {
        height : "100px",
        width : "90px",
    },
    btn : {
        backgroundColor: "black",
        borderRadius :"10px",
        color : "aqua",
        padding : "10px 20px",
        fontWeight :"bold",
        fontsixe : "20px",
    }
    
}

export default ProductsCart;