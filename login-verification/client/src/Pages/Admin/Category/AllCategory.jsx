import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { NavLink } from 'react-router-dom';

function AllCategory(props) {
  const [category, setCategory] = useState([]);

  const readData = async () => {
    await axios.get('/api/category')
      .then(res => {
        setCategory(res.data.categories);
      }).catch(err => toast.error(err.response.data.msg));
  };

  useEffect(() => {
    readData();
  }, []);

  //delete product category
  const deleteItem = async (id) => {
    if (window.confirm(`Are you sure to delete category ? `)) {
      await axios.delete(`/api/category/${id}`)
      .then (res => {
        toast.success(res.data.msg)
        readData()
      }).catch(err => toast.error(err.response.data.msg))
    }else {
      toast.warning("delete terminated")
    }
  }

  return (
    <div className='container mt-5'>
      <div className='row pt-5'>
        <div className='col-md-12 text-center'>
          <h3 className='display-3 text-secondary'> All category </h3>
        </div>
      </div>
      <div className='row'>
        <div className='col-md-12'>
          <div className='table-responsive'>
            <table className='table table-bordered table-striped text-center'> 
              <thead>
                <tr>
                  <th colSpan={5}>
                    <NavLink to={`/category/add`} className='btn btn-outline-dark float-end'>
                      Add Category <i className='bi bi-plus-circle'></i>
                    </NavLink>
                  </th>
                </tr>
                <tr>
                  <th>Title</th>
                  <th>Image</th>
                  <th>Description</th> 
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  category?.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{item.title}</td>
                        <td>
                          <img src={item?.image} alt="no image" className='img-fluid rounded' />
                        </td>
                        <td>{item.desc}</td>
                        <td>
                          {item.isActive ? <span className='text-success'>Active</span> : <span className='text-danger'>Disabled</span>}
                        </td>
                        <td>
                          <NavLink to={`/category/edit/${item._id}`} className='btn btn-link text-info'><i className='bi bi-pencil'></i></NavLink>
                          <button onClick={() => deleteItem(item._id)} className='btn btn-link text-danger'><i className='bi bi-trash'></i></button>
                        </td>
                      </tr>
                    );
                  })
                }
              </tbody>
            </table> 
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllCategory;
