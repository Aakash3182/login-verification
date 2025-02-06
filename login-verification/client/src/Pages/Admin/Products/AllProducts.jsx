import React,{ useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import {toast} from 'react-toastify'
import ProductItem from './ProductItem'

function Allproducts() {
    const [products, setProducts] = useState([])

    const readData = async () => {
      await axios.get(`/api/products`)
      .then(res=> {
        setProducts(res.data.Products)
      }).catch(err => toast.error(err.response.data.msg))
    }

    useEffect(() => {
      readData()
    }, [])

    return (
        <div className='container mt-5'>
          <div className='row pt-5'>
            <div className='col md-12 text-center'>
              <h3 className='display-3 text-secondary'> All Products </h3>
            </div>
          </div>
          <div className='row mt-3'>
            <div className='col md-12'>
              <div className='table-responsive'>
                <table className='table table-striped table-hover table-bordered text-center'>
                  <thead>
                    <tr>
                      <th colSpan={7}>
                        <NavLink to={`/products/add`} className='btn btn-outline-dark float-end'><i className='bi bi-plus-circle'></i></NavLink>
                      </th>
                    </tr>
                    <tr>
                      <th>Title</th>
                      <th>Image</th>
                      <th>Price</th>
                      <th>category</th>
                      <th>Discount</th>
                      <th>tax</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                   {
                    products?.map((item,index) => {
                      return <ProductItem key={item._id} {...item} />
                    })
                   }
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
    )
}

export default Allproducts
