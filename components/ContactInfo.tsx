import React from 'react'

const ContactInfo = ({
    icon,
    details
}:{
    icon:React.ReactNode,
    details:string
}) => {
  return (
    <div className='flex items-center w-fit text-white gap-1'>
        <span className='text-2xl'>{icon}</span>
        <p className='font-outfit font-medium text-xl'>{details}</p>
    </div>
  )
}

export default ContactInfo