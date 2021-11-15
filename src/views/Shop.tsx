import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux';
import { ProductActions, State } from '../state'
import ShopingCard from '../components/Shop/ShopingCard'

const Shop = () => {

  const dispatch = useDispatch();
  const { getProducts } = bindActionCreators(ProductActions, dispatch)
  const Products = useSelector((state:State) => state.productReducer.Products)

  useEffect(() => {
    getProducts()
        /* eslint-disable */
  }, [])

//   const test = () => {
//     getProducts()
//   }
//  const testState = () => {
//    console.log(Products)
//  }

  return (
    <div className="Shop container">
                                        {/* <button onClick={test} >test</button> */}
                                        {/* <button onClick={testState} >testState</button> */}
      <div className="mt-4">
        <h1 className="text-center">Shop</h1>

        <div className="row row-cols-3 g-4 mt-4">


        {
          Products? 
          Products.map(product => {
            return (
              <ShopingCard key={product.id} product={product} />
            )
          })
          : <h1 className="noProducts">Det finns inga produkter</h1>
        }




        </div>
        {/* <h1>Detta är shopping sidan</h1> */}
      </div>
    </div>
  )
}

export default Shop
