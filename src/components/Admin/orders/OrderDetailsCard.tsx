import axios from 'axios'
import React, { useEffect, useState } from 'react'


interface orderLine {
  id: number,
  ordersId: number,
  productsId: number,
  quantity: number,
  unitPrice: number
}

interface iProps {
  orderline: orderLine
}

const OrderDetailsCard:React.FC<iProps> = ({orderline}) => {


  let [product, setProduct] = useState({
    id: 0,
    imgUrl: "",
    longDescription: "",
    name: "",
    price: 0,
    shortDescription: "",
    subCategoryesId: 0
  })

  const getProduct = () => {
    axios.get("https://localhost:44373/api/Products/" + orderline.productsId)
    .then(res => {
      setProduct(product = res.data)
    })
    .catch(err => console.log(err))
  }


  useEffect(() => {
    getProduct()
    return () => {
      setProduct({
        ...product,
        id: 0,
        imgUrl: "",
        longDescription: "",
        name: "",
        price: 0,
        shortDescription: "",
        subCategoryesId: 0
      })

    }
    /* eslint-disable */
  },[])

 const test = () => {
  //  console.log(product)
  console.log(product)
 }


  return (
    <div className="OrderDetailsCard border p-2">
      <div className="d-flex justify-content-between align-items-center">
        <img src={product.imgUrl} alt="Detta är min bild" />
        <p> {product.name} </p>
        <p> { orderline.quantity } st </p>
        <p> {orderline.unitPrice} kr/st</p>
        {/* <button onClick={test}>gasdg</button> */}
      </div>

    </div>
  )
}

export default OrderDetailsCard
