import React from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux';
import { CartActions } from '../../state';


  interface product {
    id: number,
    imgUrl: string,
    name: string,
    price: number,
    quantity: number
  }

  interface iProps {
    product: product
  }


const CartCard: React.FC<iProps> = ({product}) => {

  const dispatch = useDispatch();
  const { setIncementProduct, setDecrementProduct, deliteProductFromCart } = bindActionCreators(CartActions, dispatch);

  // console.log(product)
  const increment = () => {
    setIncementProduct(product.id)
  }
  const decrement = () => {
    setDecrementProduct(product.id)
  }
  const deletefromcart = () => {
    deliteProductFromCart(product.id)
  }

  return (
    <div className="CartCard my-2">
      <div className="cardBody border d-flex justify-content-between">
        <img src={product.imgUrl} alt="" />
        <div className="mx-3">
          <h4> {product.name} </h4>

          <div className="d-flex justify-content-end px-2">
            <p className="price me-5">{product.price} kr</p>
            <div className="d-flex align-items-center">
              <p className="mx-2">{product.quantity} st</p>
              <button className="btn btn-info" onClick={decrement} >-</button>
              <button className="btn btn-info" onClick={increment} >+</button>
              <button className="btn btn-danger" onClick={deletefromcart} >X</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default CartCard