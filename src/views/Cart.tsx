import React from 'react'
import CartCard from '../components/Cart/CartCard'
import  swish  from '../images/Logo/swish.svg'
import  klarna  from '../images/Logo/klarna.webp'
import { useDispatch, useSelector } from 'react-redux'
import { CartActions, State } from '../state'
import { bindActionCreators } from 'redux'
import { useHistory } from 'react-router'


const Cart = () => {
  const dispatch = useDispatch();
  const history = useHistory()
  const cart = useSelector((state:State) => state.CartReducer.cart)
  const TotalPrice = useSelector((state:State) => state.CartReducer.totalPrice)
  const user = useSelector((state: State) => state.UserReducer.UserId)
  const loggedin = useSelector((state: State) => state.UserReducer.LoggedIn)

  const { addOrder } = bindActionCreators(CartActions, dispatch)

  const placeOrder = () => {

    if(cart.length !== 0) {

      if(loggedin) {
        let newCart = cart.map(t => {
          return{
            productId: t.id,
            price: t.price,
            quantity: t.quantity
          }
        })
    
        let order = {
          usersId: user,
          totalAmount: TotalPrice + 99,
          cartProducts: newCart
        }
    
        addOrder(order)
        history.push('/OrderConfirmaion')
      }
      else {
        console.log("Du måste va inloggad för att lägga en order")
      }
    }
    else {
      console.log("Du måste lägga till en produkt")
    }

  }




  return (
    <div className="Cart fullpage">
      <div className="container">
        <h1 className="text-center mt-3">Kundvagn</h1>
        <div className="d-flex">
          <div className="block1">

            {
              cart.length? 
              cart.map(product => {
                return(
                  <CartCard key={product.id} product={product} />
                  // <CartCard  />
                )
              })
              : <h3 className="text-center mt-2" >Finns inga produkter lägg till några</h3>
            }

            {/* <CartCard />
            <CartCard />
            <CartCard /> */}

          </div>
          <div className="block2">
            <div className="orderInfo">
              <h3 className="mt-3" >Order Information</h3>
              <hr className="mt-5"/>

              <div className="d-flex justify-content-between">
                <p>Ordervärde:</p>
                <p>{TotalPrice} kr</p>
              </div>
              <div className="d-flex justify-content-between">
                <p>Frakt:</p>
                <p>99 kr</p>
              </div>


              <hr />
              <div className="d-flex justify-content-between">
                <h5>Totlalt:</h5>
                <h5>{TotalPrice + 99} kr</h5>
              </div>

              <button className="mt-4 placeOrder w-100" onClick={placeOrder} disabled={cart.length === 0} >Lägg Order</button>

              {
                loggedin? 
                ""
                : 
                <p className="mt-1">Du måste va inloggad för att kunna Lägga en order</p>
              }
              {
                cart.length === 0? 
                <p className="mt-1">Du måste lägga till en produkt för att kunna lägga en order</p>
                : ""
              }

              <div className="mt-2">
                <img src={swish} alt="" className="klarna"/>
                <img src={klarna} alt="" className="swish"/>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default Cart
