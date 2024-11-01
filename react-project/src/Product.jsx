function Product(){
    const product={
        id:222,name:"Books",Price:100,Available:true}
    
    return(
        <>
        <h1> Productdetailes</h1>
        <p> productId:{product.id} </p>
        <p> productNames:{product.name} </p>
        <p> productprice:{product.Price} </p>
        <p> productCheck:{product.Available?'Instock':'outofstock'} </p>
        </>

    )
}
export default Product;