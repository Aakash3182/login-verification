import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';

function UpdateCategory(props) {
  const [category, setCategory] = useState({
    title: "",
    desc: "",
  });
  const [image, setImage] = useState("");
  const [type, setType] = useState(true);
  const [error, setError] = useState({});

  const navigate = useNavigate();
  const params = useParams()

  const readSingle = async () =>{
    await axios.get(`/api/category/${params.id}`)
    .then(res =>{
        setCategory(res.data.category)
        setImage(res.data.category.image)
    }).catch(err => toast.error(err.response.data.msg))
  }
  useEffect(() => {
    readSingle()
  } , [])

  const readInput = (e) => {
    const { name, value } = e.target;
    setCategory({ ...category, [name]: value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    let data = {
      ...category,
      image
    };
    console.log(`category`, data);
    await axios.patch(`/api/category/${params.id}`, data)
      .then(res => {
        toast.success(res.data.msg);
        navigate('/category');
      }).catch(err => toast.error(err.response.data.msg));
  };

  return (
    <div className='container mt-5'>
      <div className='row pt-5'>
        <div className='col-md-12 text-center'>
          <h3 className='display-3 text-secondary'> Update Category </h3>
        </div>
      </div>

      <div className='row mb-5'>
        <div className='col-md-6 offset-md-3'>
          <div className='card'>
            <div className='card-body'>
              <form onSubmit={submitHandler}>
                <div className='form-group mt-2'>
                  <label htmlFor='title'>Title</label>
                  <input
                    type='text'
                    className='form-control'
                    id='title'
                    name='title'
                    value={category.title}
                    onChange={readInput}
                    required
                  />
                </div>
                <div className='form-group mt-2'>
                  <label htmlFor='desc'>Category Description</label>
                  <textarea
                    className='form-control'
                    id='desc'
                    name='desc'
                    cols={30} rows={6}
                    value={category.desc}
                    onChange={readInput}
                    required
                  >
                  </textarea>
                </div>
                <div className="form-group mt-2">
                                    <label htmlFor="image">Category Image</label>
                                    <div className="form-group mt-2 mb-2">
                                        <input type="checkbox" name="type" id="type" className="form-check-input" value={type} onChange={(e) => setType(e.target.checked)} />
                                        <label className='form-check-label ms-3'>
                                            {
                                                type ? "Enter Image Url" : "Choose File to Upload"
                                            }
                                        </label>
                                    </div>
 
                                    {
                                        type ? <input type="url" name="image" id="url" value={image} onChange={(e) => setImage(e.target.value)} className='form-control' required /> : <input type="file" name="image" id="image" className="form-control" required />
                                    }
                                </div>
                <div className='form-group mt-2'>
                  <button type='submit' value="Update Category" className='btn btn-outline-dark'>Update Category</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateCategory;
