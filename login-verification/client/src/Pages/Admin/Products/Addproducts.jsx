import React, { useEffect, useState } from 'react';
import axios from 'axios'; 
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function Addproducts() {

  const [product, setProduct] = useState({
    title: '',
    image: '',
    price: 0,
    discount: 0,
    tax: 0,
    desc: '',
    stock: 0,
    sku: '',
    weight: 0,
    unit: '',
    category: '',
  });

  const [category, setCategory] = useState([]);

  let navigate = useNavigate();

  const readInput = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const readCatData = async () => {
    await axios.get('/api/category')
      .then(res => {
        setCategory(res.data.categories);
      })
      .catch(err => toast.error(err.response.data.error));
  };

  useEffect(() => {
    readCatData();
  }, []);

  const submitHandler = async (e) => {
    e.preventDefault();
    await axios.post('/api/products', product)
      .then(res => {
        toast.success(res.data.message);
        navigate('/products');
      })
      .catch(err => toast.error(err.response.data.error));
  };

  return (
    <div className='container mt-5'>
      <div className='row pt-5'>
        <div className='col-md-12 text-center'>
          <h3 className='display-3 text-secondary'> Add Product </h3>
        </div>
      </div>
      <div className='row mb-4'>
        <div className="col-md-12">
          <form onSubmit={submitHandler}>
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group mb-2">
                      <input type="text" name="title" value={product.title} onChange={readInput} id="title" className="form-control" placeholder="product title" required/>
                    </div>
                    <div className='form-group mt-2'>
                      <input type='url' name="image" value={product.image} onChange={readInput} id="image" className='form-control' placeholder='product image url' required/>
                    </div>
                    <div className='form-group mt-2'>
                      <input type='number' name="price" value={product.price} onChange={readInput} id="price" className='form-control' placeholder='product price' required/>
                    </div>
                    <div className='form-group mt-2'>
                      <input type='number' name="discount" value={product.discount} onChange={readInput} id="discount" className='form-control' placeholder='discount %' required/>
                    </div>
                    <div className='form-group mt-2'>
                      <input type='number' name="tax" value={product.tax} onChange={readInput} id="tax" className='form-control' placeholder='tax %' required/>
                    </div>
                    <div className="form-group mt-2">
                      <textarea name="desc" value={product.desc} onChange={readInput} id="desc" className="form-control" placeholder="product description" column={40} rows={5} required></textarea>           
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group mt-3">
                      <input type="text" name="stock" value={product.stock} onChange={readInput} id="stock" className='form-control' placeholder='stock in number' required/>
                    </div>
                    <div className="form-group mt-3">
                      <input type="string" name="sku" value={product.sku} onChange={readInput}  id="sku" className='form-control' placeholder='stock keeping unit' required/>
                    </div>
                    <div className="form-group mt-3">
                      <input type="number" name="weight" value={product.weight} onChange={readInput} id="weight" className='form-control' placeholder='product weight' required/>
                    </div>
                    <div className="form-group mt-3">
                      <input type="number" name="unit" value={product.unit} onChange={readInput} id="unit" className='form-control' placeholder='product weight unit' required/>
                    </div>
                    <div className="form-group mt-3">
                      <select name="category" value={product.category} onChange={readInput} id="category" className='form-select' required>
                        <option value="null">Choose Category</option>
                        {category?.map((item) => (
                          <option key={item._id} value={item._id}> {item.title} </option>
                        ))}
                      </select>
                    </div>
                    <div className="form-group mt-3">
                      <button className='btn btn-outline-success'><i className="bi bi-plus-circle" />Add Product</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Addproducts;
