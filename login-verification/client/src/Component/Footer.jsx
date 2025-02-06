import React from 'react'
import { NavLink } from 'react-router-dom'

function Footer() {
  return (
   <footer className='foot'>
    <div className='container'>
        <div className='row'>
            <div className='col-md-4 col-lg-4 col-sm-12'>
                <h5 className='text-dark'>Quick Contact</h5>

                <h6 className='text-secondary'>Call us</h6>
                <p className='text-secondary pt-2'>
                    <i className='bi bi-phone'></i> <a className='btn-link' href='tel:+919966332255'>+91-99663 32255</a>
                </p>
                <p className='text-secondary pt-2'>
                    <i className='bi bi-headset'></i> <a className='btn-link' href='tel:+919966332255'>+91-99663 32255</a>
                </p>
                <p className='text-secondary pt-2'>
                    <i className='bi bi-envelope-at'></i> <a className='btn-link' href='tel:mailto:contact@foody.com'>contact@foody.com</a>
                </p>
                <p className='text-secondary pt-2'>
                    <i className='bi bi-envelope-at'></i> <a className='btn-link' href='tel:mailto:conta@foody.com'>complaint@foody.com</a>
                </p>
            </div>

            <div className='col-md-4 col-lg-4 col-sm-12'>
                <h5 className='text-dark'>Corporate Office</h5>

                <address className='pt-3 pb-2'>
                    <p className='text-secondary'>Foody India Private Limited. <br/> 2nd Cross, <br/> 4th main, <br/> Rajaji nagar, <br/> Bengaluru - 560010.</p>
                </address>
            </div>
            <div className='col-md-4 col-lg-4 col-sm-12'>
                <h5 className='text-dark'>Store policies</h5>
                <ul className='list-group'>
                    <li className='list-group-item'>
                        <NavLink to={`/privacy/policy`} className='list-group-item-action'>terms of use</NavLink>
                    </li>
                    <li className='list-group-item'>
                        <NavLink to={`/Delivery/policy`} className='list-group-item-action'>Delivery policy</NavLink>
                    </li>
                    <li className='list-group-item'>
                        <NavLink to={`/Refund/policy`} className='list-group-item-action'>Refund policy</NavLink>
                    </li>
                    <li className='list-group-item'>
                        <NavLink to={`/pricing/policy`} className='list-group-item-action'>Pricing policy</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </div>
   </footer>
  )
}

export default Footer
