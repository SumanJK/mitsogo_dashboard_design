import { Box } from '@chakra-ui/react'
import React from 'react'
import Navbar from '../components/Navbar'

const Dashboard = () => {
  return (
    <Box>
      <Navbar/>
      <Box border='2px solid red' height='80rem'></Box>
    </Box>
  )
}

export default Dashboard