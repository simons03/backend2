import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ProductActions, State } from '../../state'
import AdminProductsCard from './products/AdminProductsCard'

const AddNewProduct = () => {
  const dispatch = useDispatch()
  const { addOneProduct, getProducts } = bindActionCreators(ProductActions, dispatch)
  const allProducts = useSelector((state:State) => state.productReducer.Products)

  useEffect(() => {
    getProducts()
    /* eslint-disable */
  },[])

  let [values, setValues] = useState({
    name: "",
    shortDescription: "",
    price: 0,
    longDescription: "",
    imgUrl: "",
    subCategoryesId: 0,
  })




  const handleCatetory = (e:any) => {
    setValues({...values, subCategoryesId: parseInt(e.target.value)})
  }

  const handleName = (e:any) => {
    setValues({...values, name:e.target.value})
  }
  const handleShortDescription = (e:any) => {
    setValues({...values, shortDescription:e.target.value})
  }
  const handlePrice = (e:any) => {
    setValues({...values, price: parseInt(e.target.value)})
  }
  const handleLongDescription = (e:any) => {
    setValues({...values, longDescription:e.target.value})
  }
  const handleimgUrl = (e:any) => {
    setValues({...values, imgUrl:e.target.value})
  }



  const submit = (e:any) => {
    e.preventDefault();
    // console.log(values)

    if(values.subCategoryesId !== 0 && values.imgUrl !== "" && values.longDescription !== "" && values.name !== "" && values.price !== 0 && values.shortDescription !== ""){

      addOneProduct(values)
      setValues({
        ...values,
        name: "",
        shortDescription: "",
        price: 0,
        longDescription: "",
        imgUrl: "",
        subCategoryesId: 0,
      })

    } else {
      console.log("INTE OKEJ")
    }
  }


  return (
    <div className="AddNewProduct">
      <h1>Add New Product</h1>

      <form onSubmit={submit}>
        <div className="row">
          <div className="col-12">
            <label htmlFor="ImgUrl" className="form-label col-12">ImgUrl</label>
            <input type="text" className="form-control" id="ImgUrl" value={values.imgUrl} onChange={handleimgUrl} />
          </div>
        </div>
        <div className="row mt-4">          

          <div className="col-6 ">
            <label htmlFor="Name" className="form-label">Product Name</label>
            <input type="text" className="form-control" id="Name" value={values.name} onChange={handleName} />
          </div>

          <div className="col-6">
            <label htmlFor="Price" className="form-label">Price</label>
            <input type="Number" className="form-control" id="Price" value={values.price} onChange={handlePrice} />
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-12">
            <label htmlFor="Price" className="form-label">ShortDescription</label>
            <input type="text" className="form-control" id="Price" value={values.shortDescription} onChange={handleShortDescription} />
          </div>




          <div className="col-12 mt-4">
            <label htmlFor="Price" className="form-label">LongDescription</label>
            <textarea   className="form-control" id="Price" value={values.longDescription} onChange={handleLongDescription} />
          </div>
        </div>







        <select 
        className="form-select mt-5" 
        aria-label="Default select example" 
        id="catagory"
        onChange={handleCatetory}
        >
          <option value="0">Open this select menu</option>
          <option value="1">Laptop</option>
          <option value="2">Stationära datorer</option>
        </select>








        <div className="text-center mt-5">
          <button className="btn btn-info" type="submit">AddProcut</button>
        </div>

          
      </form>

      <div className="mt-4">
        <h1 className="text-center">Alla Produkter</h1>

        <table className="table">
          <tbody>
          <tr>
            <th>Img</th>
            <th>Name</th>
            <th>Price</th>
            <th>Remove</th>
          </tr>

          {
            allProducts?
            allProducts.map(product => {
              return (
                <AdminProductsCard key={product.id} product={product} />
              )
            })
            : <h1>Laddar</h1>
          }



          </tbody>
        </table>
      </div>




    </div>
  )
}

export default AddNewProduct
