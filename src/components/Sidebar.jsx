import { Flex } from '@chakra-ui/react'
import React from 'react'

const Sidebar = ({sidebarStatus}) => {
  return (
    <Flex
        className="sidebar"
        w={sidebarStatus ? "20%" : "0"}
        h="80rem"
        bg="#43425D"
        transition="all .4s ease"
      >
        
      </Flex>
  )
}

export default Sidebar