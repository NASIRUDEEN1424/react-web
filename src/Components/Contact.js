import React from 'react'
import Footer from './Footer'
import { Box } from '@mui/material'
const Contact = () => {
  return (
    <div>
        <h1>Contact us on</h1>
        <p>Email : ns1420@gmail.com</p>
       <p>ph.no : 9655123123,9655321321</p> 
      <div>
      <Box>
      {/* Your Home component content */}
      <Footer /> {/* Include the Footer component */}
    </Box>

      </div>
    </div>
    
  )
}

export default Contact;