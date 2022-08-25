import { Box, Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Dashboard = () => {
  const [sidebarStatus, setSidebarStatus] = useState(false);

  const toogleStatus = (value) => {
    console.log(value, "value===");
    setSidebarStatus(value);
  };

  return (
    <Flex w='100%' bg='#3C3B54' h="100vh" >
      <Sidebar sidebarStatus={sidebarStatus}/>
      <Box className="mainDiv"  w='100%' bg='white' borderTopLeftRadius={sidebarStatus ? "40px": '0'} overflow="hidden" transition="all .4s ease">
        <Navbar toogleStatus={toogleStatus} />
        <Box
          className="content"
          // w={sidebarStatus ? "80%" : "100%"}
        ></Box>
      </Box>
    </Flex>
  );
};

export default Dashboard;
