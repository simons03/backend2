import React from 'react'
import { Link } from 'react-router-dom'
import { product } from '../../state/actions'

interface props {
  product: product
}


const ShopingCard:React.FC<props> = ({product}) => {

  // console.log(product)
  // console.log(product.Id)
    
  return (
      <div className="card ShopingCard shadow">
        <Link to={`/ProductDetails/${product.id}`}>
          <img src={product.imgUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title"> {product.name} </h5>
            <p className="card-text">{product.shortDescription.slice(0,50)}... </p>
            <div className="d-flex justify-content-between align-items-center">
              <p className="price"> {product.price} kr </p>
              {/* <button className="btn btn-info">Köp</button> */}
            </div>
          </div>
        </Link>
      </div>
  )
}

export default ShopingCard
