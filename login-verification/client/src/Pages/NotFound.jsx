import React from 'react'

function NotFound() {
  return (
    <section className='not-found' >
      <div className='container d-flex align-items-center justify-content-center'>
        <div className='row mt-5'>
          <div className='col-md-12 text-center pt-5'>
            <div className='car bg-transparent mt-5'>
              <div className='card-body'>
                <h2 className='display-2 text-danger'>404-Error</h2>
                <h3 className='display-2 text-danger '>Requested path not found</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  )
}

export default NotFound
