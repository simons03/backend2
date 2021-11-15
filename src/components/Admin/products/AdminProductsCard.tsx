import React from 'react'
import { useSelector } from 'react-redux'
import { State } from '../../../state'

interface product {
  id: number,
  imgUrl: string,
  longDescription: string,
  name: string,
  price: number
  shortDescription: string,
  subCategoryesId: number
}
interface IProps {
  product: product
}


const AdminProductsCard:React.FC<IProps> = ({product}) => {

  const admin = useSelector((state:State) => state.UserReducer.Admin)
  const remove = () => {
    if(admin) {
      console.log("Nu ska Id: " + product.id + " tas bort")
    }else {
      console.log("Du har inte rättighet att ta bort denna produkt")
    }
  }



  return (
    <tr className="AdminProductsCard">
      <td> <img src={ product.imgUrl } alt="" /> </td>
      <td> { product.name } </td>
      <td> { product.price} kr </td>
      <td><button className="btn btn-danger" onClick={remove} >X</button></td>
    </tr>
  )
}

export default AdminProductsCard
