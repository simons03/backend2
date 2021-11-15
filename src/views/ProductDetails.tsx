import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { bindActionCreators } from 'redux'
import { CartActions, ProductActions, State } from '../state'



interface data {
  id: string
}



const ProductDetails = () => {
  const data:data = useParams();
  const dispatch = useDispatch();
  const { getOneProduct } = bindActionCreators(ProductActions, dispatch);
  const { addToCart } = bindActionCreators(CartActions, dispatch);


  const OneProduct = useSelector((state:State) => state.productReducer.OneProduct)


  useEffect(() => {
    let id = data.id
    let newId = parseInt(id)
    getOneProduct(newId)
    /* eslint-disable */
  }, [])



  const AddToCart = () => {
    let data = {
      name: OneProduct.name,
      id: OneProduct.id,
      price: OneProduct.price,
      imgUrl: OneProduct.imgUrl,
      quantity: 1
    }
    addToCart(data)
    // console.log(data)
  }


  return (
    <div className="ProductDetails container">
      <h1 className="text-center mt-3">ProductDetails</h1>
      <div className="d-flex justify-content-between align-items-center mt-5">
        <img src={OneProduct.imgUrl} alt="Img" />
        <div className="mx-4">
          <h3> { OneProduct.name } </h3>
          <p> { OneProduct.longDescription } </p>
          <div className="d-flex align-items-center">
            <p className="Price"> { OneProduct.price } kr</p>
            <button className="btn btn-info mx-5" onClick={AddToCart} >Add to cart</button>
  

          </div>
        </div>
      </div>


    </div>
  )
}

export default ProductDetails
