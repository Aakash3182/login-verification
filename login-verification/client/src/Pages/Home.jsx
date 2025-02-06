import React from 'react'

function Home() {
  return (
    <section id='showcase' className='showcase-area'>
      <div className='container d-flex align-items-center justify-content-center h-100' id='home'>
        <div className='row'>
          <div className='col-md-12 text-center'>
            <h1 className='display-1 text-secondary'>
              Welcome to <span className='text-success'>Foody</span>
            </h1>
            <h6 className='display-6 text-warning mt-5'>
              Eat healthy , it's good for our health.
            </h6>
            <button className='btn btn-outline-success mt-3'>
              <i className='bi bi bi-arrow-down'></i> Browse Collection
            </button>
          </div>
        </div> 
      </div>
    </section>
  )
}

export default Home
