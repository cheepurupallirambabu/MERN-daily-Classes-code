import ProductsCart from "./ProductsCart";


const Products = (props)=> {

 
    let products = [{Name :"mobile",
        Price :"50000",
        Description:"goodcondition",
        Rateing:"",
        Imgsrc :"https://tse4.mm.bing.net/th/id/OIP.cdYoDVebNgY7gexByc4wRgHaL5?rs=1&pid=ImgDetMain&o=7&rm=3",},
       {Name :"laptop",
        Price :"75000",
        Description:"goodcondition",
        Rateing:"",
        Imgsrc :"https://tse2.mm.bing.net/th/id/OIP.66eoGNK-NxBqmbMWOrF3BgHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",},
       {Name :"cloths",
        Price :"5000",
        Description:"Betterquality",
        Rateing:"",
        Imgsrc :"https://tse1.mm.bing.net/th/id/OIP.cx-VsD3iRq1-oo1ssnVGagHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",},           
    ];

    return (
        <>
        <div style={styling.out}>
         {
            products.map((product)=>(
                <div>
                    <ProductsCart details ={product}/>
                </div>
            ))
         }
        </div>
        </>
    )

}
const styling ={
  out : {
        display : "flex",
        justifyContant : "center",
        alignItems : "center",
        flexDirection : "row", 
  }
}
export default Products;