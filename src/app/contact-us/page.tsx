import React from 'react'

type Contact = {
  name: string;
  onClick : () => void;
}

const ContactUs = () => {
  return (
    <div className='d-flex align-middle justify-center w-screen h-full'>ContactUs</div>
  )
}

export default ContactUs