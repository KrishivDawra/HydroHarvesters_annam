import React from 'react'

const Footer = () => {
  return (
    <div className='flex justify-between pt-16 px-16'>
      <div>
        <h1>Our Locations</h1>
        <p>Mumbai</p>
        <p>Delhi</p>
        <p>Hyderabad</p>
        <p>Haryana</p>
        <p>Punjab</p>
        <p>Rajesthan</p>

      </div>

      <div>
        <h1>Quick Links</h1>
        <div className='flex flex-col'>
          <a href="#home">Home</a>
          <a href="#About">About Us</a>
          <a href="#Blockchain">Blockchain</a>
          <a href="#Nutrients">Nutrients</a>
          <a href="#Setup">Setup</a>
        </div>
        

      </div>

      <div>
      <h1>Contact Us</h1>
        <p>+91-9416940665</p>
        <p>+91-8968817565</p>
        <p>hydroharvesters@gmail.com</p>

      </div>

      <div>
      <h1>Our Services</h1>
        <p>Fast Delivey</p>
        <p>Easy Payments</p>
        <p>Easy Acess</p>
        <p>24x7 Service</p>

      </div>
    </div>
  )
}

export default Footer
